package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"strings"
)

type Teams struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewTeams(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Teams {
	return &Teams{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// TeamsAddMemberLegacy - Add team member (Legacy)
// The "Add team member" endpoint (described below) is deprecated.
//
// We recommend using the [Add or update team membership for a user](https://docs.github.com/enterprise-server@2.18/rest/reference/teams#add-or-update-team-membership-for-a-user) endpoint instead. It allows you to invite new organization members to your teams.
//
// Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
//
// To add someone to a team, the authenticated user must be an organization owner or a team maintainer in the team they're changing. The person being added to the team must be a member of the team's organization.
//
// **Note:** When you have team synchronization set up for a team with your organization's identity provider (IdP), you will see an error if you attempt to use the API for making changes to the team's membership. If you have access to manage group membership in your IdP, you can manage GitHub Enterprise Server team membership through your identity provider, which automatically adds and removes team members in an organization. For more information, see "[Synchronizing teams between your identity provider and GitHub Enterprise Server](https://help.github.com/articles/synchronizing-teams-between-your-identity-provider-and-github/)."
//
// Note that you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/enterprise-server@2.18/rest/overview/resources-in-the-rest-api#http-verbs)."
// https://docs.github.com/enterprise-server@2.18/rest/reference/teams#add-team-member-legacy - API method documentation
func (s *Teams) TeamsAddMemberLegacy(ctx context.Context, request operations.TeamsAddMemberLegacyRequest) (*operations.TeamsAddMemberLegacyResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/teams/{team_id}/members/{username}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.TeamsAddMemberLegacyResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.BasicError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BasicError = out
		}
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 422:
	}

	return res, nil
}

// TeamsAddOrUpdateMembershipForUser - Add or update team membership for a user
// If the user is already a member of the team's organization, this endpoint will add the user to the team. To add a membership between an organization member and a team, the authenticated user must be an organization owner or a team maintainer.
//
// If the user is unaffiliated with the team's organization, this endpoint will send an invitation to the user via email. This newly-created membership will be in the "pending" state until the user accepts the invitation, at which point the membership will transition to the "active" state and the user will be added as a member of the team. To add a membership between an unaffiliated user and a team, the authenticated user must be an organization owner.
//
// If the user is already a member of the team, this endpoint will update the role of the team member's role. To update the membership of a team member, the authenticated user must be an organization owner or a team maintainer.
// https://docs.github.com/enterprise-server@2.18/rest/reference/teams#add-or-update-team-membership-for-a-user - API method documentation
func (s *Teams) TeamsAddOrUpdateMembershipForUser(ctx context.Context, request operations.TeamsAddOrUpdateMembershipForUserRequest) (*operations.TeamsAddOrUpdateMembershipForUserResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/teams/{team_id}/memberships/{username}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "PUT", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.TeamsAddOrUpdateMembershipForUserResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.TeamMembership
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.TeamMembership = out
		}
	case httpRes.StatusCode == 422:
	}

	return res, nil
}

// TeamsAddOrUpdateProjectPermissions - Add or update team project permissions
// Adds an organization project to a team. To add a project to a team or update the team's permission on a project, the authenticated user must have `admin` permissions for the project. The project and team must be part of the same organization.
// https://docs.github.com/enterprise-server@2.18/rest/reference/teams/#add-or-update-team-project-permissions - API method documentation
func (s *Teams) TeamsAddOrUpdateProjectPermissions(ctx context.Context, request operations.TeamsAddOrUpdateProjectPermissionsRequest) (*operations.TeamsAddOrUpdateProjectPermissionsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/teams/{team_id}/projects/{project_id}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "PUT", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.TeamsAddOrUpdateProjectPermissionsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.TeamsAddOrUpdateProjectPermissions403ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.TeamsAddOrUpdateProjectPermissions403ApplicationJSONObject = out
		}
	}

	return res, nil
}

// TeamsAddOrUpdateRepoPermissions - Add or update team repository permissions
// To add a repository to a team or update the team's permission on a repository, the authenticated user must have admin access to the repository, and must be able to see the team. The repository must be owned by the organization, or a direct fork of a repository owned by the organization. You will get a `422 Unprocessable Entity` status if you attempt to add a repository to a team that is not owned by the organization.
//
// Note that, if you choose not to pass any parameters, you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/enterprise-server@2.18/rest/overview/resources-in-the-rest-api#http-verbs)."
// https://docs.github.com/enterprise-server@2.18/rest/reference/teams/#add-or-update-team-repository-permissions - API method documentation
func (s *Teams) TeamsAddOrUpdateRepoPermissions(ctx context.Context, request operations.TeamsAddOrUpdateRepoPermissionsRequest) (*operations.TeamsAddOrUpdateRepoPermissionsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/teams/{team_id}/repos/{owner}/{repo}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "PUT", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.TeamsAddOrUpdateRepoPermissionsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	}

	return res, nil
}

// TeamsCheckPermissionsForProject - Check team permissions for a project
// Checks whether a team has `read`, `write`, or `admin` permissions for an organization project. If you pass the `hellcat-preview` media type, the response will include projects inherited from a parent team.
// https://docs.github.com/enterprise-server@2.18/rest/reference/teams/#check-team-permissions-for-a-project - API method documentation
func (s *Teams) TeamsCheckPermissionsForProject(ctx context.Context, request operations.TeamsCheckPermissionsForProjectRequest) (*operations.TeamsCheckPermissionsForProjectResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/teams/{team_id}/projects/{project_id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.TeamsCheckPermissionsForProjectResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.TeamProject
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.TeamProject = out
		}
	case httpRes.StatusCode == 404:
	}

	return res, nil
}

// TeamsCheckPermissionsForRepo - Check team permissions for a repository
// **Note**: If you pass the `hellcat-preview` media type, repositories inherited through a parent team will be checked.
//
// You can also get information about the specified repository, including what permissions the team grants on it, by passing the following custom [media type](https://docs.github.com/enterprise-server@2.18/rest/overview/media-types/) via the `Accept` header:
// https://docs.github.com/enterprise-server@2.18/rest/reference/teams/#check-team-permissions-for-a-repository - API method documentation
func (s *Teams) TeamsCheckPermissionsForRepo(ctx context.Context, request operations.TeamsCheckPermissionsForRepoRequest) (*operations.TeamsCheckPermissionsForRepoResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/teams/{team_id}/repos/{owner}/{repo}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.TeamsCheckPermissionsForRepoResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.MinimalRepository
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.MinimalRepository = out
		case utils.MatchContentType(contentType, `application/vnd.github.v3.repository+json`):
			var out *shared.FullRepository
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.FullRepository = out
		}
	case httpRes.StatusCode == 204:
	case httpRes.StatusCode == 404:
	}

	return res, nil
}

// TeamsCreate - Create a team
// To create a team, the authenticated user must be a member or owner of `{org}`. By default, organization members can create teams. Organization owners can limit team creation to organization owners. For more information, see "[Setting team creation permissions](https://help.github.com/en/articles/setting-team-creation-permissions-in-your-organization)."
//
// When you create a new team, you automatically become a team maintainer without explicitly adding yourself to the optional array of `maintainers`. For more information, see "[About teams](https://help.github.com/en/github/setting-up-and-managing-organizations-and-teams/about-teams)".
// https://docs.github.com/enterprise-server@2.18/rest/reference/teams#create-a-team - API method documentation
func (s *Teams) TeamsCreate(ctx context.Context, request operations.TeamsCreateRequest) (*operations.TeamsCreateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/orgs/{org}/teams", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.TeamsCreateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.TeamFull
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.TeamFull = out
		}
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.BasicError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BasicError = out
		}
	case httpRes.StatusCode == 422:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ValidationError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ValidationError = out
		}
	}

	return res, nil
}

// TeamsCreateDiscussion - Create a discussion
// Creates a new discussion post on a team's page. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.18/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
//
// This endpoint triggers [notifications](https://docs.github.com/en/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in abuse rate limiting. See "[Abuse rate limits](https://docs.github.com/enterprise-server@2.18/rest/overview/resources-in-the-rest-api#abuse-rate-limits)" for details.
// https://docs.github.com/enterprise-server@2.18/rest/reference/teams#create-a-discussion - API method documentation
func (s *Teams) TeamsCreateDiscussion(ctx context.Context, request operations.TeamsCreateDiscussionRequest) (*operations.TeamsCreateDiscussionResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/teams/{team_id}/discussions", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.TeamsCreateDiscussionResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.TeamDiscussion
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.TeamDiscussion = out
		}
	}

	return res, nil
}

// TeamsCreateDiscussionComment - Create a discussion comment
// Creates a new comment on a team discussion. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.18/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
//
// This endpoint triggers [notifications](https://docs.github.com/en/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in abuse rate limiting. See "[Abuse rate limits](https://docs.github.com/enterprise-server@2.18/rest/overview/resources-in-the-rest-api#abuse-rate-limits)" for details.
// https://docs.github.com/enterprise-server@2.18/rest/reference/teams#create-a-discussion-comment - API method documentation
func (s *Teams) TeamsCreateDiscussionComment(ctx context.Context, request operations.TeamsCreateDiscussionCommentRequest) (*operations.TeamsCreateDiscussionCommentResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/teams/{team_id}/discussions/{discussion_number}/comments", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.TeamsCreateDiscussionCommentResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.TeamDiscussionComment
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.TeamDiscussionComment = out
		}
	}

	return res, nil
}

// TeamsDelete - Delete a team
// To delete a team, the authenticated user must be an organization owner or team maintainer.
//
// If you are an organization owner and you pass the `hellcat-preview` media type, deleting a parent team will delete all of its child teams as well.
// https://docs.github.com/enterprise-server@2.18/rest/reference/teams/#delete-a-team - API method documentation
func (s *Teams) TeamsDelete(ctx context.Context, request operations.TeamsDeleteRequest) (*operations.TeamsDeleteResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/teams/{team_id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.TeamsDeleteResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	}

	return res, nil
}

// TeamsDeleteDiscussion - Delete a discussion
// Delete a discussion from a team's page. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.18/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
// https://docs.github.com/enterprise-server@2.18/rest/reference/teams#delete-a-discussion - API method documentation
func (s *Teams) TeamsDeleteDiscussion(ctx context.Context, request operations.TeamsDeleteDiscussionRequest) (*operations.TeamsDeleteDiscussionResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/teams/{team_id}/discussions/{discussion_number}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.TeamsDeleteDiscussionResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	}

	return res, nil
}

// TeamsDeleteDiscussionComment - Delete a discussion comment
// Deletes a comment on a team discussion. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.18/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
// https://docs.github.com/enterprise-server@2.18/rest/reference/teams#delete-a-discussion-comment - API method documentation
func (s *Teams) TeamsDeleteDiscussionComment(ctx context.Context, request operations.TeamsDeleteDiscussionCommentRequest) (*operations.TeamsDeleteDiscussionCommentResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/teams/{team_id}/discussions/{discussion_number}/comments/{comment_number}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.TeamsDeleteDiscussionCommentResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	}

	return res, nil
}

// TeamsGet - Get a team
// https://docs.github.com/enterprise-server@2.18/rest/reference/teams/#get-a-team - API method documentation
func (s *Teams) TeamsGet(ctx context.Context, request operations.TeamsGetRequest) (*operations.TeamsGetResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/teams/{team_id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.TeamsGetResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.TeamFull
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.TeamFull = out
		}
	}

	return res, nil
}

// TeamsGetByName - Get a team by name
// Gets a team using the team's `slug`. GitHub Enterprise Server generates the `slug` from the team `name`.
//
// **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}`.
// https://docs.github.com/enterprise-server@2.18/rest/reference/teams#get-a-team-by-name - API method documentation
func (s *Teams) TeamsGetByName(ctx context.Context, request operations.TeamsGetByNameRequest) (*operations.TeamsGetByNameResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/orgs/{org}/teams/{team_slug}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.TeamsGetByNameResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.TeamFull
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.TeamFull = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.BasicError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BasicError = out
		}
	}

	return res, nil
}

// TeamsGetDiscussion - Get a discussion
// Get a specific discussion on a team's page. OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@2.18/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
// https://docs.github.com/enterprise-server@2.18/rest/reference/teams#get-a-discussion - API method documentation
func (s *Teams) TeamsGetDiscussion(ctx context.Context, request operations.TeamsGetDiscussionRequest) (*operations.TeamsGetDiscussionResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/teams/{team_id}/discussions/{discussion_number}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.TeamsGetDiscussionResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.TeamDiscussion
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.TeamDiscussion = out
		}
	}

	return res, nil
}

// TeamsGetDiscussionComment - Get a discussion comment
// Get a specific comment on a team discussion. OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@2.18/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
// https://docs.github.com/enterprise-server@2.18/rest/reference/teams#get-a-discussion-comment - API method documentation
func (s *Teams) TeamsGetDiscussionComment(ctx context.Context, request operations.TeamsGetDiscussionCommentRequest) (*operations.TeamsGetDiscussionCommentResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/teams/{team_id}/discussions/{discussion_number}/comments/{comment_number}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.TeamsGetDiscussionCommentResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.TeamDiscussionComment
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.TeamDiscussionComment = out
		}
	}

	return res, nil
}

// TeamsGetMemberLegacy - Get team member (Legacy)
// The "Get team member" endpoint (described below) is deprecated.
//
// We recommend using the [Get team membership for a user](https://docs.github.com/enterprise-server@2.18/rest/reference/teams#get-team-membership-for-a-user) endpoint instead. It allows you to get both active and pending memberships.
//
// To list members in a team, the team must be visible to the authenticated user.
// https://docs.github.com/enterprise-server@2.18/rest/reference/teams#get-team-member-legacy - API method documentation
func (s *Teams) TeamsGetMemberLegacy(ctx context.Context, request operations.TeamsGetMemberLegacyRequest) (*operations.TeamsGetMemberLegacyResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/teams/{team_id}/members/{username}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.TeamsGetMemberLegacyResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	case httpRes.StatusCode == 404:
	}

	return res, nil
}

// TeamsGetMembershipForUser - Get team membership for a user
// If you pass the `hellcat-preview` media type, team members will include the members of child teams.
//
// To get a user's membership with a team, the team must be visible to the authenticated user.
//
// **Note:**
// The response contains the `state` of the membership and the member's `role`.
//
// The `role` for organization owners is set to `maintainer`. For more information about `maintainer` roles, see [Create a team](https://docs.github.com/enterprise-server@2.18/rest/reference/teams#create-a-team).
// https://docs.github.com/enterprise-server@2.18/rest/reference/teams#get-team-membership-for-a-user - API method documentation
func (s *Teams) TeamsGetMembershipForUser(ctx context.Context, request operations.TeamsGetMembershipForUserRequest) (*operations.TeamsGetMembershipForUserResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/teams/{team_id}/memberships/{username}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.TeamsGetMembershipForUserResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.TeamMembership
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.TeamMembership = out
		}
	}

	return res, nil
}

// TeamsList - List teams
// Lists all teams in an organization that are visible to the authenticated user.
// https://docs.github.com/enterprise-server@2.18/rest/reference/teams#list-teams - API method documentation
func (s *Teams) TeamsList(ctx context.Context, request operations.TeamsListRequest) (*operations.TeamsListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/orgs/{org}/teams", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.TeamsListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.Team
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Teams = out
		}
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.BasicError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BasicError = out
		}
	}

	return res, nil
}

// TeamsListChild - List child teams
// You must use the `hellcat-preview` media type to use this endpoint.
// https://docs.github.com/enterprise-server@2.18/rest/reference/teams/#list-child-teams - API method documentation
func (s *Teams) TeamsListChild(ctx context.Context, request operations.TeamsListChildRequest) (*operations.TeamsListChildResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/teams/{team_id}/teams", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.TeamsListChildResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.Team2
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Team2s = out
		}
	}

	return res, nil
}

// TeamsListDiscussionComments - List discussion comments
// List all comments on a team discussion. OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@2.18/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
// https://docs.github.com/enterprise-server@2.18/rest/reference/teams#list-discussion-comments - API method documentation
func (s *Teams) TeamsListDiscussionComments(ctx context.Context, request operations.TeamsListDiscussionCommentsRequest) (*operations.TeamsListDiscussionCommentsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/teams/{team_id}/discussions/{discussion_number}/comments", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.TeamsListDiscussionCommentsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.TeamDiscussionComment
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.TeamDiscussionComments = out
		}
	}

	return res, nil
}

// TeamsListDiscussions - List discussions
// List all discussions on a team's page. OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@2.18/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
// https://docs.github.com/enterprise-server@2.18/rest/reference/teams#list-discussions - API method documentation
func (s *Teams) TeamsListDiscussions(ctx context.Context, request operations.TeamsListDiscussionsRequest) (*operations.TeamsListDiscussionsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/teams/{team_id}/discussions", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.TeamsListDiscussionsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.TeamDiscussion
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.TeamDiscussions = out
		}
	}

	return res, nil
}

// TeamsListForAuthenticatedUser - List teams for the authenticated user
// List all of the teams across all of the organizations to which the authenticated user belongs. This method requires `user`, `repo`, or `read:org` [scope](https://docs.github.com/enterprise-server@2.18/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/) when authenticating via [OAuth](https://docs.github.com/enterprise-server@2.18/apps/building-oauth-apps/).
// https://docs.github.com/enterprise-server@2.18/rest/reference/teams#list-teams-for-the-authenticated-user - API method documentation
func (s *Teams) TeamsListForAuthenticatedUser(ctx context.Context, request operations.TeamsListForAuthenticatedUserRequest) (*operations.TeamsListForAuthenticatedUserResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/user/teams"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.TeamsListForAuthenticatedUserResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.TeamFull
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.TeamFulls = out
		}
	case httpRes.StatusCode == 304:
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.BasicError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BasicError = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.BasicError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BasicError = out
		}
	}

	return res, nil
}

// TeamsListMembers - List team members
// If you pass the `hellcat-preview` media type, team members will include the members of child teams.
//
// To list members in a team, the team must be visible to the authenticated user.
// https://docs.github.com/enterprise-server@2.18/rest/reference/teams#list-team-members - API method documentation
func (s *Teams) TeamsListMembers(ctx context.Context, request operations.TeamsListMembersRequest) (*operations.TeamsListMembersResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/teams/{team_id}/members", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.TeamsListMembersResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.SimpleUser
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.SimpleUsers = out
		}
	}

	return res, nil
}

// TeamsListProjects - List team projects
// Lists the organization projects for a team. If you are an [authenticated](https://docs.github.com/enterprise-server@2.18/rest/overview/resources-in-the-rest-api#authentication) site administrator for your Enterprise instance, you will be able to list all projects for the team. If you pass the `hellcat-preview` media type, the response will include projects inherited from a parent team.
// https://docs.github.com/enterprise-server@2.18/rest/reference/teams/#list-team-projects - API method documentation
func (s *Teams) TeamsListProjects(ctx context.Context, request operations.TeamsListProjectsRequest) (*operations.TeamsListProjectsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/teams/{team_id}/projects", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.TeamsListProjectsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.TeamProject
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.TeamProjects = out
		}
	}

	return res, nil
}

// TeamsListRepos - List team repositories
// **Note**: If you pass the `hellcat-preview` media type, the response will include any repositories inherited through a parent team.
//
// If you are an [authenticated](https://docs.github.com/enterprise-server@2.18/rest/overview/resources-in-the-rest-api#authentication) site administrator for your Enterprise instance, you will be able to list all repositories for the team.
// https://docs.github.com/enterprise-server@2.18/rest/reference/teams/#list-team-repositories - API method documentation
func (s *Teams) TeamsListRepos(ctx context.Context, request operations.TeamsListReposRequest) (*operations.TeamsListReposResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/teams/{team_id}/repos", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.TeamsListReposResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.MinimalRepository
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.MinimalRepositories = out
		}
	}

	return res, nil
}

// TeamsRemoveMemberLegacy - Remove team member (Legacy)
// The "Remove team member" endpoint (described below) is deprecated.
//
// We recommend using the [Remove team membership for a user](https://docs.github.com/enterprise-server@2.18/rest/reference/teams#remove-team-membership-for-a-user) endpoint instead. It allows you to remove both active and pending memberships.
//
// Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
//
// To remove a team member, the authenticated user must have 'admin' permissions to the team or be an owner of the org that the team is associated with. Removing a team member does not delete the user, it just removes them from the team.
//
// **Note:** When you have team synchronization set up for a team with your organization's identity provider (IdP), you will see an error if you attempt to use the API for making changes to the team's membership. If you have access to manage group membership in your IdP, you can manage GitHub Enterprise Server team membership through your identity provider, which automatically adds and removes team members in an organization. For more information, see "[Synchronizing teams between your identity provider and GitHub Enterprise Server](https://help.github.com/articles/synchronizing-teams-between-your-identity-provider-and-github/)."
// https://docs.github.com/enterprise-server@2.18/rest/reference/teams#remove-team-member-legacy - API method documentation
func (s *Teams) TeamsRemoveMemberLegacy(ctx context.Context, request operations.TeamsRemoveMemberLegacyRequest) (*operations.TeamsRemoveMemberLegacyResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/teams/{team_id}/members/{username}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.TeamsRemoveMemberLegacyResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	case httpRes.StatusCode == 404:
	}

	return res, nil
}

// TeamsRemoveMembershipForUser - Remove team membership for a user
// To remove a membership between a user and a team, the authenticated user must have 'admin' permissions to the team or be an owner of the organization that the team is associated with. Removing team membership does not delete the user, it just removes their membership from the team.
// https://docs.github.com/enterprise-server@2.18/rest/reference/teams#remove-team-membership-for-a-user - API method documentation
func (s *Teams) TeamsRemoveMembershipForUser(ctx context.Context, request operations.TeamsRemoveMembershipForUserRequest) (*operations.TeamsRemoveMembershipForUserResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/teams/{team_id}/memberships/{username}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.TeamsRemoveMembershipForUserResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	}

	return res, nil
}

// TeamsRemoveProject - Remove a project from a team
// Removes an organization project from a team. An organization owner or a team maintainer can remove any project from the team. To remove a project from a team as an organization member, the authenticated user must have `read` access to both the team and project, or `admin` access to the team or project. **Note:** This endpoint removes the project from the team, but does not delete it.
// https://docs.github.com/enterprise-server@2.18/rest/reference/teams/#remove-a-project-from-a-team - API method documentation
func (s *Teams) TeamsRemoveProject(ctx context.Context, request operations.TeamsRemoveProjectRequest) (*operations.TeamsRemoveProjectResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/teams/{team_id}/projects/{project_id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.TeamsRemoveProjectResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	}

	return res, nil
}

// TeamsRemoveRepo - Remove a repository from a team
// If the authenticated user is an organization owner or a team maintainer, they can remove any repositories from the team. To remove a repository from a team as an organization member, the authenticated user must have admin access to the repository and must be able to see the team. NOTE: This does not delete the repository, it just removes it from the team.
// https://docs.github.com/enterprise-server@2.18/rest/reference/teams/#remove-a-repository-from-a-team - API method documentation
func (s *Teams) TeamsRemoveRepo(ctx context.Context, request operations.TeamsRemoveRepoRequest) (*operations.TeamsRemoveRepoResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/teams/{team_id}/repos/{owner}/{repo}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.TeamsRemoveRepoResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	}

	return res, nil
}

// TeamsUpdate - Update a team
// To edit a team, the authenticated user must either be an organization owner or a team maintainer.
//
// **Note:** With nested teams, the `privacy` for parent teams cannot be `secret`.
// https://docs.github.com/enterprise-server@2.18/rest/reference/teams/#update-a-team - API method documentation
func (s *Teams) TeamsUpdate(ctx context.Context, request operations.TeamsUpdateRequest) (*operations.TeamsUpdateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/teams/{team_id}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "PATCH", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.TeamsUpdateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.TeamFull
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.TeamFull = out
		}
	}

	return res, nil
}

// TeamsUpdateDiscussion - Update a discussion
// Edits the title and body text of a discussion post. Only the parameters you provide are updated. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.18/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
// https://docs.github.com/enterprise-server@2.18/rest/reference/teams#update-a-discussion - API method documentation
func (s *Teams) TeamsUpdateDiscussion(ctx context.Context, request operations.TeamsUpdateDiscussionRequest) (*operations.TeamsUpdateDiscussionResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/teams/{team_id}/discussions/{discussion_number}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "PATCH", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.TeamsUpdateDiscussionResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.TeamDiscussion
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.TeamDiscussion = out
		}
	}

	return res, nil
}

// TeamsUpdateDiscussionComment - Update a discussion comment
// Edits the body text of a discussion comment. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.18/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
// https://docs.github.com/enterprise-server@2.18/rest/reference/teams#update-a-discussion-comment - API method documentation
func (s *Teams) TeamsUpdateDiscussionComment(ctx context.Context, request operations.TeamsUpdateDiscussionCommentRequest) (*operations.TeamsUpdateDiscussionCommentResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/teams/{team_id}/discussions/{discussion_number}/comments/{comment_number}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "PATCH", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.TeamsUpdateDiscussionCommentResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.TeamDiscussionComment
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.TeamDiscussionComment = out
		}
	}

	return res, nil
}
