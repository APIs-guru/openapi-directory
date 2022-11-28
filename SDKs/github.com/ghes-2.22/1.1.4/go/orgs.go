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

type Orgs struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewOrgs(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Orgs {
	return &Orgs{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// OrgsCheckMembershipForUser - Check organization membership for a user
// Check if a user is, publicly or privately, a member of the organization.
// https://docs.github.com/enterprise-server@2.22/rest/reference/orgs#check-organization-membership-for-a-user - API method documentation
func (s *Orgs) OrgsCheckMembershipForUser(ctx context.Context, request operations.OrgsCheckMembershipForUserRequest) (*operations.OrgsCheckMembershipForUserResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/orgs/{org}/members/{username}", request.PathParams)

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

	res := &operations.OrgsCheckMembershipForUserResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	case httpRes.StatusCode == 302:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 404:
	}

	return res, nil
}

// OrgsCheckPublicMembershipForUser - Check public organization membership for a user
// https://docs.github.com/enterprise-server@2.22/rest/reference/orgs#check-public-organization-membership-for-a-user - API method documentation
func (s *Orgs) OrgsCheckPublicMembershipForUser(ctx context.Context, request operations.OrgsCheckPublicMembershipForUserRequest) (*operations.OrgsCheckPublicMembershipForUserResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/orgs/{org}/public_members/{username}", request.PathParams)

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

	res := &operations.OrgsCheckPublicMembershipForUserResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	case httpRes.StatusCode == 404:
	}

	return res, nil
}

// OrgsConvertMemberToOutsideCollaborator - Convert an organization member to outside collaborator
// When an organization member is converted to an outside collaborator, they'll only have access to the repositories that their current team membership allows. The user will no longer be a member of the organization. For more information, see "[Converting an organization member to an outside collaborator](https://help.github.com/articles/converting-an-organization-member-to-an-outside-collaborator/)".
// https://docs.github.com/enterprise-server@2.22/rest/reference/orgs#convert-an-organization-member-to-outside-collaborator - API method documentation
func (s *Orgs) OrgsConvertMemberToOutsideCollaborator(ctx context.Context, request operations.OrgsConvertMemberToOutsideCollaboratorRequest) (*operations.OrgsConvertMemberToOutsideCollaboratorResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/orgs/{org}/outside_collaborators/{username}", request.PathParams)

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

	res := &operations.OrgsConvertMemberToOutsideCollaboratorResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 202:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.OrgsConvertMemberToOutsideCollaborator202ApplicationJSONObject = out
		}
	case httpRes.StatusCode == 204:
	case httpRes.StatusCode == 403:
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

// OrgsCreateWebhook - Create an organization webhook
// Here's how you can create a hook that posts payloads in JSON format:
// https://docs.github.com/enterprise-server@2.22/rest/reference/orgs#create-an-organization-webhook - API method documentation
func (s *Orgs) OrgsCreateWebhook(ctx context.Context, request operations.OrgsCreateWebhookRequest) (*operations.OrgsCreateWebhookResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/orgs/{org}/hooks", request.PathParams)

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

	res := &operations.OrgsCreateWebhookResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.OrgHook
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.OrgHook = out
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

// OrgsDeleteWebhook - Delete an organization webhook
// https://docs.github.com/enterprise-server@2.22/rest/reference/orgs#delete-an-organization-webhook - API method documentation
func (s *Orgs) OrgsDeleteWebhook(ctx context.Context, request operations.OrgsDeleteWebhookRequest) (*operations.OrgsDeleteWebhookResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/orgs/{org}/hooks/{hook_id}", request.PathParams)

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

	res := &operations.OrgsDeleteWebhookResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
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

// OrgsGet - Get an organization
// To see many of the organization response values, you need to be an authenticated organization owner with the `admin:org` scope. When the value of `two_factor_requirement_enabled` is `true`, the organization requires all members, billing managers, and outside collaborators to enable [two-factor authentication](https://help.github.com/articles/securing-your-account-with-two-factor-authentication-2fa/).
//
// GitHub Apps with the `Organization plan` permission can use this endpoint to retrieve information about an organization's GitHub Enterprise Server plan. See "[Authenticating with GitHub Apps](https://docs.github.com/enterprise-server@2.22/apps/building-github-apps/authenticating-with-github-apps/)" for details. For an example response, see 'Response with GitHub Enterprise Server plan information' below."
// https://docs.github.com/enterprise-server@2.22/rest/reference/orgs#get-an-organization - API method documentation
func (s *Orgs) OrgsGet(ctx context.Context, request operations.OrgsGetRequest) (*operations.OrgsGetResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/orgs/{org}", request.PathParams)

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

	res := &operations.OrgsGetResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.OrganizationFull
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.OrganizationFull = out
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

// OrgsGetMembershipForAuthenticatedUser - Get an organization membership for the authenticated user
// https://docs.github.com/enterprise-server@2.22/rest/reference/orgs#get-an-organization-membership-for-the-authenticated-user - API method documentation
func (s *Orgs) OrgsGetMembershipForAuthenticatedUser(ctx context.Context, request operations.OrgsGetMembershipForAuthenticatedUserRequest) (*operations.OrgsGetMembershipForAuthenticatedUserResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/user/memberships/orgs/{org}", request.PathParams)

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

	res := &operations.OrgsGetMembershipForAuthenticatedUserResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.OrgMembership
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.OrgMembership = out
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

// OrgsGetMembershipForUser - Get organization membership for a user
// In order to get a user's membership with an organization, the authenticated user must be an organization member. The `state` parameter in the response can be used to identify the user's membership status.
// https://docs.github.com/enterprise-server@2.22/rest/reference/orgs#get-organization-membership-for-a-user - API method documentation
func (s *Orgs) OrgsGetMembershipForUser(ctx context.Context, request operations.OrgsGetMembershipForUserRequest) (*operations.OrgsGetMembershipForUserResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/orgs/{org}/memberships/{username}", request.PathParams)

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

	res := &operations.OrgsGetMembershipForUserResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.OrgMembership
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.OrgMembership = out
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

// OrgsGetWebhook - Get an organization webhook
// Returns a webhook configured in an organization. To get only the webhook `config` properties, see "[Get a webhook configuration for an organization](/rest/reference/orgs#get-a-webhook-configuration-for-an-organization)."
// https://docs.github.com/enterprise-server@2.22/rest/reference/orgs#get-an-organization-webhook - API method documentation
func (s *Orgs) OrgsGetWebhook(ctx context.Context, request operations.OrgsGetWebhookRequest) (*operations.OrgsGetWebhookResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/orgs/{org}/hooks/{hook_id}", request.PathParams)

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

	res := &operations.OrgsGetWebhookResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.OrgHook
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.OrgHook = out
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

// OrgsList - List organizations
// Lists all organizations, in the order that they were created on GitHub Enterprise Server.
//
// **Note:** Pagination is powered exclusively by the `since` parameter. Use the [Link header](https://docs.github.com/enterprise-server@2.22/rest/overview/resources-in-the-rest-api#link-header) to get the URL for the next page of organizations.
// https://docs.github.com/enterprise-server@2.22/rest/reference/orgs#list-organizations - API method documentation
func (s *Orgs) OrgsList(ctx context.Context, request operations.OrgsListRequest) (*operations.OrgsListResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/organizations"

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

	res := &operations.OrgsListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.OrganizationSimple
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.OrganizationSimples = out
		}
	case httpRes.StatusCode == 304:
	}

	return res, nil
}

// OrgsListAppInstallations - List app installations for an organization
// Lists all GitHub Apps in an organization. The installation count includes all GitHub Apps installed on repositories in the organization. You must be an organization owner with `admin:read` scope to use this endpoint.
// https://docs.github.com/enterprise-server@2.22/rest/reference/orgs#list-app-installations-for-an-organization - API method documentation
func (s *Orgs) OrgsListAppInstallations(ctx context.Context, request operations.OrgsListAppInstallationsRequest) (*operations.OrgsListAppInstallationsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/orgs/{org}/installations", request.PathParams)

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

	res := &operations.OrgsListAppInstallationsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.OrgsListAppInstallations200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.OrgsListAppInstallations200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// OrgsListForAuthenticatedUser - List organizations for the authenticated user
// List organizations for the authenticated user.
//
// **OAuth scope requirements**
//
// This only lists organizations that your authorization allows you to operate on in some way (e.g., you can list teams with `read:org` scope, you can publicize your organization membership with `user` scope, etc.). Therefore, this API requires at least `user` or `read:org` scope. OAuth requests with insufficient scope receive a `403 Forbidden` response.
// https://docs.github.com/enterprise-server@2.22/rest/reference/orgs#list-organizations-for-the-authenticated-user - API method documentation
func (s *Orgs) OrgsListForAuthenticatedUser(ctx context.Context, request operations.OrgsListForAuthenticatedUserRequest) (*operations.OrgsListForAuthenticatedUserResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/user/orgs"

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

	res := &operations.OrgsListForAuthenticatedUserResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.OrganizationSimple
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.OrganizationSimples = out
		}
	case httpRes.StatusCode == 304:
	case httpRes.StatusCode == 401:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.BasicError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BasicError = out
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

// OrgsListForUser - List organizations for a user
// List [public organization memberships](https://help.github.com/articles/publicizing-or-concealing-organization-membership) for the specified user.
//
// This method only lists _public_ memberships, regardless of authentication. If you need to fetch all of the organization memberships (public and private) for the authenticated user, use the [List organizations for the authenticated user](https://docs.github.com/enterprise-server@2.22/rest/reference/orgs#list-organizations-for-the-authenticated-user) API instead.
// https://docs.github.com/enterprise-server@2.22/rest/reference/orgs#list-organizations-for-a-user - API method documentation
func (s *Orgs) OrgsListForUser(ctx context.Context, request operations.OrgsListForUserRequest) (*operations.OrgsListForUserResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/users/{username}/orgs", request.PathParams)

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

	res := &operations.OrgsListForUserResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.OrganizationSimple
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.OrganizationSimples = out
		}
	}

	return res, nil
}

// OrgsListMembers - List organization members
// List all users who are members of an organization. If the authenticated user is also a member of this organization then both concealed and public members will be returned.
// https://docs.github.com/enterprise-server@2.22/rest/reference/orgs#list-organization-members - API method documentation
func (s *Orgs) OrgsListMembers(ctx context.Context, request operations.OrgsListMembersRequest) (*operations.OrgsListMembersResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/orgs/{org}/members", request.PathParams)

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

	res := &operations.OrgsListMembersResponse{
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
	case httpRes.StatusCode == 302:
		res.Headers = httpRes.Header

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

// OrgsListMembershipsForAuthenticatedUser - List organization memberships for the authenticated user
// https://docs.github.com/enterprise-server@2.22/rest/reference/orgs#list-organization-memberships-for-the-authenticated-user - API method documentation
func (s *Orgs) OrgsListMembershipsForAuthenticatedUser(ctx context.Context, request operations.OrgsListMembershipsForAuthenticatedUserRequest) (*operations.OrgsListMembershipsForAuthenticatedUserResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/user/memberships/orgs"

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

	res := &operations.OrgsListMembershipsForAuthenticatedUserResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.OrgMembership
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.OrgMemberships = out
		}
	case httpRes.StatusCode == 304:
	case httpRes.StatusCode == 401:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.BasicError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BasicError = out
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

// OrgsListOutsideCollaborators - List outside collaborators for an organization
// List all users who are outside collaborators of an organization.
// https://docs.github.com/enterprise-server@2.22/rest/reference/orgs#list-outside-collaborators-for-an-organization - API method documentation
func (s *Orgs) OrgsListOutsideCollaborators(ctx context.Context, request operations.OrgsListOutsideCollaboratorsRequest) (*operations.OrgsListOutsideCollaboratorsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/orgs/{org}/outside_collaborators", request.PathParams)

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

	res := &operations.OrgsListOutsideCollaboratorsResponse{
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

// OrgsListPublicMembers - List public organization members
// Members of an organization can choose to have their membership publicized or not.
// https://docs.github.com/enterprise-server@2.22/rest/reference/orgs#list-public-organization-members - API method documentation
func (s *Orgs) OrgsListPublicMembers(ctx context.Context, request operations.OrgsListPublicMembersRequest) (*operations.OrgsListPublicMembersResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/orgs/{org}/public_members", request.PathParams)

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

	res := &operations.OrgsListPublicMembersResponse{
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

// OrgsListWebhooks - List organization webhooks
// https://docs.github.com/enterprise-server@2.22/rest/reference/orgs#list-organization-webhooks - API method documentation
func (s *Orgs) OrgsListWebhooks(ctx context.Context, request operations.OrgsListWebhooksRequest) (*operations.OrgsListWebhooksResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/orgs/{org}/hooks", request.PathParams)

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

	res := &operations.OrgsListWebhooksResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.OrgHook
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.OrgHooks = out
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

// OrgsPingWebhook - Ping an organization webhook
// This will trigger a [ping event](https://docs.github.com/enterprise-server@2.22/webhooks/#ping-event) to be sent to the hook.
// https://docs.github.com/enterprise-server@2.22/rest/reference/orgs#ping-an-organization-webhook - API method documentation
func (s *Orgs) OrgsPingWebhook(ctx context.Context, request operations.OrgsPingWebhookRequest) (*operations.OrgsPingWebhookResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/orgs/{org}/hooks/{hook_id}/pings", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
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

	res := &operations.OrgsPingWebhookResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
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

// OrgsRemoveMember - Remove an organization member
// Removing a user from this list will remove them from all teams and they will no longer have any access to the organization's repositories.
// https://docs.github.com/enterprise-server@2.22/rest/reference/orgs#remove-an-organization-member - API method documentation
func (s *Orgs) OrgsRemoveMember(ctx context.Context, request operations.OrgsRemoveMemberRequest) (*operations.OrgsRemoveMemberResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/orgs/{org}/members/{username}", request.PathParams)

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

	res := &operations.OrgsRemoveMemberResponse{
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
	}

	return res, nil
}

// OrgsRemoveMembershipForUser - Remove organization membership for a user
// In order to remove a user's membership with an organization, the authenticated user must be an organization owner.
//
// If the specified user is an active member of the organization, this will remove them from the organization. If the specified user has been invited to the organization, this will cancel their invitation. The specified user will receive an email notification in both cases.
// https://docs.github.com/enterprise-server@2.22/rest/reference/orgs#remove-organization-membership-for-a-user - API method documentation
func (s *Orgs) OrgsRemoveMembershipForUser(ctx context.Context, request operations.OrgsRemoveMembershipForUserRequest) (*operations.OrgsRemoveMembershipForUserResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/orgs/{org}/memberships/{username}", request.PathParams)

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

	res := &operations.OrgsRemoveMembershipForUserResponse{
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

// OrgsRemoveOutsideCollaborator - Remove outside collaborator from an organization
// Removing a user from this list will remove them from all the organization's repositories.
// https://docs.github.com/enterprise-server@2.22/rest/reference/orgs#remove-outside-collaborator-from-an-organization - API method documentation
func (s *Orgs) OrgsRemoveOutsideCollaborator(ctx context.Context, request operations.OrgsRemoveOutsideCollaboratorRequest) (*operations.OrgsRemoveOutsideCollaboratorResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/orgs/{org}/outside_collaborators/{username}", request.PathParams)

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

	res := &operations.OrgsRemoveOutsideCollaboratorResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	case httpRes.StatusCode == 422:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.OrgsRemoveOutsideCollaborator422ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.OrgsRemoveOutsideCollaborator422ApplicationJSONObject = out
		}
	}

	return res, nil
}

// OrgsRemovePublicMembershipForAuthenticatedUser - Remove public organization membership for the authenticated user
// https://docs.github.com/enterprise-server@2.22/rest/reference/orgs#remove-public-organization-membership-for-the-authenticated-user - API method documentation
func (s *Orgs) OrgsRemovePublicMembershipForAuthenticatedUser(ctx context.Context, request operations.OrgsRemovePublicMembershipForAuthenticatedUserRequest) (*operations.OrgsRemovePublicMembershipForAuthenticatedUserResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/orgs/{org}/public_members/{username}", request.PathParams)

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

	res := &operations.OrgsRemovePublicMembershipForAuthenticatedUserResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	}

	return res, nil
}

// OrgsSetMembershipForUser - Set organization membership for a user
// Only authenticated organization owners can add a member to the organization or update the member's role.
//
// *   If the authenticated user is _adding_ a member to the organization, the invited user will receive an email inviting them to the organization. The user's [membership status](https://docs.github.com/enterprise-server@2.22/rest/reference/orgs#get-organization-membership-for-a-user) will be `pending` until they accept the invitation.
//
// *   Authenticated users can _update_ a user's membership by passing the `role` parameter. If the authenticated user changes a member's role to `admin`, the affected user will receive an email notifying them that they've been made an organization owner. If the authenticated user changes an owner's role to `member`, no email will be sent.
//
// **Rate limits**
//
// To prevent abuse, the authenticated user is limited to 50 organization invitations per 24 hour period. If the organization is more than one month old or on a paid plan, the limit is 500 invitations per 24 hour period.
// https://docs.github.com/enterprise-server@2.22/rest/reference/orgs#set-organization-membership-for-a-user - API method documentation
func (s *Orgs) OrgsSetMembershipForUser(ctx context.Context, request operations.OrgsSetMembershipForUserRequest) (*operations.OrgsSetMembershipForUserResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/orgs/{org}/memberships/{username}", request.PathParams)

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

	res := &operations.OrgsSetMembershipForUserResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.OrgMembership
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.OrgMembership = out
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

// OrgsSetPublicMembershipForAuthenticatedUser - Set public organization membership for the authenticated user
// The user can publicize their own membership. (A user cannot publicize the membership for another user.)
//
// Note that you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/enterprise-server@2.22/rest/overview/resources-in-the-rest-api#http-verbs)."
// https://docs.github.com/enterprise-server@2.22/rest/reference/orgs#set-public-organization-membership-for-the-authenticated-user - API method documentation
func (s *Orgs) OrgsSetPublicMembershipForAuthenticatedUser(ctx context.Context, request operations.OrgsSetPublicMembershipForAuthenticatedUserRequest) (*operations.OrgsSetPublicMembershipForAuthenticatedUserResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/orgs/{org}/public_members/{username}", request.PathParams)

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

	res := &operations.OrgsSetPublicMembershipForAuthenticatedUserResponse{
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
	}

	return res, nil
}

// OrgsUpdate - Update an organization
// **Parameter Deprecation Notice:** GitHub Enterprise Server will replace and discontinue `members_allowed_repository_creation_type` in favor of more granular permissions. The new input parameters are `members_can_create_public_repositories`, `members_can_create_private_repositories` for all organizations and `members_can_create_internal_repositories` for organizations associated with an enterprise account using GitHub Enterprise Cloud or GitHub Enterprise Server 2.20+. For more information, see the [blog post](https://developer.github.com/changes/2019-12-03-internal-visibility-changes).
//
// Enables an authenticated organization owner with the `admin:org` scope to update the organization's profile and member privileges.
// https://docs.github.com/enterprise-server@2.22/rest/reference/orgs/#update-an-organization - API method documentation
func (s *Orgs) OrgsUpdate(ctx context.Context, request operations.OrgsUpdateRequest) (*operations.OrgsUpdateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/orgs/{org}", request.PathParams)

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

	res := &operations.OrgsUpdateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.OrganizationFull
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.OrganizationFull = out
		}
	case httpRes.StatusCode == 409:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.BasicError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BasicError = out
		}
	case httpRes.StatusCode == 415:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.OrgsUpdate415ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.OrgsUpdate415ApplicationJSONObject = out
		}
	case httpRes.StatusCode == 422:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.OrgsUpdate422ApplicationJSONOneOf = out
		}
	}

	return res, nil
}

// OrgsUpdateMembershipForAuthenticatedUser - Update an organization membership for the authenticated user
// https://docs.github.com/enterprise-server@2.22/rest/reference/orgs#update-an-organization-membership-for-the-authenticated-user - API method documentation
func (s *Orgs) OrgsUpdateMembershipForAuthenticatedUser(ctx context.Context, request operations.OrgsUpdateMembershipForAuthenticatedUserRequest) (*operations.OrgsUpdateMembershipForAuthenticatedUserResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/user/memberships/orgs/{org}", request.PathParams)

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

	res := &operations.OrgsUpdateMembershipForAuthenticatedUserResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.OrgMembership
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.OrgMembership = out
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
	case httpRes.StatusCode == 404:
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

// OrgsUpdateWebhook - Update an organization webhook
// Updates a webhook configured in an organization. When you update a webhook, the `secret` will be overwritten. If you previously had a `secret` set, you must provide the same `secret` or set a new `secret` or the secret will be removed. If you are only updating individual webhook `config` properties, use "[Update a webhook configuration for an organization](/rest/reference/orgs#update-a-webhook-configuration-for-an-organization)."
// https://docs.github.com/enterprise-server@2.22/rest/reference/orgs#update-an-organization-webhook - API method documentation
func (s *Orgs) OrgsUpdateWebhook(ctx context.Context, request operations.OrgsUpdateWebhookRequest) (*operations.OrgsUpdateWebhookResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/orgs/{org}/hooks/{hook_id}", request.PathParams)

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

	res := &operations.OrgsUpdateWebhookResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.OrgHook
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.OrgHook = out
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
