package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

type Reactions struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewReactions(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Reactions {
	return &Reactions{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// ReactionsCreateForCommitComment - Create reaction for a commit comment
// Create a reaction to a [commit comment](https://docs.github.com/enterprise-server@2.19/rest/reference/repos#comments). A response with an HTTP `200` status means that you already added the reaction type to this commit comment.
// https://docs.github.com/enterprise-server@2.19/rest/reference/reactions#create-reaction-for-a-commit-comment - API method documentation
func (s *Reactions) ReactionsCreateForCommitComment(ctx context.Context, request operations.ReactionsCreateForCommitCommentRequest) (*operations.ReactionsCreateForCommitCommentResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repos/{owner}/{repo}/comments/{comment_id}/reactions", request.PathParams)

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

	res := &operations.ReactionsCreateForCommitCommentResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Reaction
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Reaction = out
		}
	case httpRes.StatusCode == 201:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Reaction
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Reaction = out
		}
	case httpRes.StatusCode == 415:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.ReactionsCreateForCommitComment415ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ReactionsCreateForCommitComment415ApplicationJSONObject = out
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

// ReactionsCreateForIssue - Create reaction for an issue
// Create a reaction to an [issue](https://docs.github.com/enterprise-server@2.19/rest/reference/issues/). A response with an HTTP `200` status means that you already added the reaction type to this issue.
// https://docs.github.com/enterprise-server@2.19/rest/reference/reactions#create-reaction-for-an-issue - API method documentation
func (s *Reactions) ReactionsCreateForIssue(ctx context.Context, request operations.ReactionsCreateForIssueRequest) (*operations.ReactionsCreateForIssueResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repos/{owner}/{repo}/issues/{issue_number}/reactions", request.PathParams)

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

	res := &operations.ReactionsCreateForIssueResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Reaction
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Reaction = out
		}
	case httpRes.StatusCode == 201:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Reaction
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Reaction = out
		}
	case httpRes.StatusCode == 415:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.ReactionsCreateForIssue415ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ReactionsCreateForIssue415ApplicationJSONObject = out
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

// ReactionsCreateForIssueComment - Create reaction for an issue comment
// Create a reaction to an [issue comment](https://docs.github.com/enterprise-server@2.19/rest/reference/issues#comments). A response with an HTTP `200` status means that you already added the reaction type to this issue comment.
// https://docs.github.com/enterprise-server@2.19/rest/reference/reactions#create-reaction-for-an-issue-comment - API method documentation
func (s *Reactions) ReactionsCreateForIssueComment(ctx context.Context, request operations.ReactionsCreateForIssueCommentRequest) (*operations.ReactionsCreateForIssueCommentResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repos/{owner}/{repo}/issues/comments/{comment_id}/reactions", request.PathParams)

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

	res := &operations.ReactionsCreateForIssueCommentResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Reaction
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Reaction = out
		}
	case httpRes.StatusCode == 201:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Reaction
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Reaction = out
		}
	case httpRes.StatusCode == 415:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.ReactionsCreateForIssueComment415ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ReactionsCreateForIssueComment415ApplicationJSONObject = out
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

// ReactionsCreateForPullRequestReviewComment - Create reaction for a pull request review comment
// Create a reaction to a [pull request review comment](https://docs.github.com/enterprise-server@2.19/rest/reference/pulls#comments). A response with an HTTP `200` status means that you already added the reaction type to this pull request review comment.
// https://docs.github.com/enterprise-server@2.19/rest/reference/reactions#create-reaction-for-a-pull-request-review-comment - API method documentation
func (s *Reactions) ReactionsCreateForPullRequestReviewComment(ctx context.Context, request operations.ReactionsCreateForPullRequestReviewCommentRequest) (*operations.ReactionsCreateForPullRequestReviewCommentResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions", request.PathParams)

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

	res := &operations.ReactionsCreateForPullRequestReviewCommentResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Reaction
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Reaction = out
		}
	case httpRes.StatusCode == 201:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Reaction
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Reaction = out
		}
	case httpRes.StatusCode == 415:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.ReactionsCreateForPullRequestReviewComment415ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ReactionsCreateForPullRequestReviewComment415ApplicationJSONObject = out
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

// ReactionsCreateForTeamDiscussion - Create reaction for a team discussion
// Create a reaction to a [team discussion](https://docs.github.com/enterprise-server@2.19/rest/reference/teams#discussions). OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.19/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/). A response with an HTTP `200` status means that you already added the reaction type to this team discussion.
// https://docs.github.com/enterprise-server@2.19/rest/reference/reactions/#create-reaction-for-a-team-discussion - API method documentation
func (s *Reactions) ReactionsCreateForTeamDiscussion(ctx context.Context, request operations.ReactionsCreateForTeamDiscussionRequest) (*operations.ReactionsCreateForTeamDiscussionResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/teams/{team_id}/discussions/{discussion_number}/reactions", request.PathParams)

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

	res := &operations.ReactionsCreateForTeamDiscussionResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Reaction
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Reaction = out
		}
	}

	return res, nil
}

// ReactionsCreateForTeamDiscussionComment - Create reaction for a team discussion comment
// Create a reaction to a [team discussion comment](https://docs.github.com/enterprise-server@2.19/rest/reference/teams#discussion-comments). OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.19/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/). A response with an HTTP `200` status means that you already added the reaction type to this team discussion comment.
// https://docs.github.com/enterprise-server@2.19/rest/reference/reactions/#create-reaction-for-a-team-discussion-comment - API method documentation
func (s *Reactions) ReactionsCreateForTeamDiscussionComment(ctx context.Context, request operations.ReactionsCreateForTeamDiscussionCommentRequest) (*operations.ReactionsCreateForTeamDiscussionCommentResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/teams/{team_id}/discussions/{discussion_number}/comments/{comment_number}/reactions", request.PathParams)

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

	res := &operations.ReactionsCreateForTeamDiscussionCommentResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Reaction
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Reaction = out
		}
	}

	return res, nil
}

// ReactionsDelete - Delete a reaction
// OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.19/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/), when deleting a [team discussion](https://docs.github.com/enterprise-server@2.19/rest/reference/teams#discussions) or [team discussion comment](https://docs.github.com/enterprise-server@2.19/rest/reference/teams#discussion-comments).
// https://docs.github.com/enterprise-server@2.19/rest/reference/reactions#delete-a-reaction-legacy - API method documentation
func (s *Reactions) ReactionsDelete(ctx context.Context, request operations.ReactionsDeleteRequest) (*operations.ReactionsDeleteResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/reactions/{reaction_id}", request.PathParams)

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

	res := &operations.ReactionsDeleteResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	}

	return res, nil
}

// ReactionsListForCommitComment - List reactions for a commit comment
// List the reactions to a [commit comment](https://docs.github.com/enterprise-server@2.19/rest/reference/repos#comments).
// https://docs.github.com/enterprise-server@2.19/rest/reference/reactions#list-reactions-for-a-commit-comment - API method documentation
func (s *Reactions) ReactionsListForCommitComment(ctx context.Context, request operations.ReactionsListForCommitCommentRequest) (*operations.ReactionsListForCommitCommentResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repos/{owner}/{repo}/comments/{comment_id}/reactions", request.PathParams)

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

	res := &operations.ReactionsListForCommitCommentResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.Reaction
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Reactions = out
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
	case httpRes.StatusCode == 415:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.ReactionsListForCommitComment415ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ReactionsListForCommitComment415ApplicationJSONObject = out
		}
	}

	return res, nil
}

// ReactionsListForIssue - List reactions for an issue
// List the reactions to an [issue](https://docs.github.com/enterprise-server@2.19/rest/reference/issues).
// https://docs.github.com/enterprise-server@2.19/rest/reference/reactions#list-reactions-for-an-issue - API method documentation
func (s *Reactions) ReactionsListForIssue(ctx context.Context, request operations.ReactionsListForIssueRequest) (*operations.ReactionsListForIssueResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repos/{owner}/{repo}/issues/{issue_number}/reactions", request.PathParams)

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

	res := &operations.ReactionsListForIssueResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.Reaction
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Reactions = out
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
	case httpRes.StatusCode == 410:
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
			var out *operations.ReactionsListForIssue415ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ReactionsListForIssue415ApplicationJSONObject = out
		}
	}

	return res, nil
}

// ReactionsListForIssueComment - List reactions for an issue comment
// List the reactions to an [issue comment](https://docs.github.com/enterprise-server@2.19/rest/reference/issues#comments).
// https://docs.github.com/enterprise-server@2.19/rest/reference/reactions#list-reactions-for-an-issue-comment - API method documentation
func (s *Reactions) ReactionsListForIssueComment(ctx context.Context, request operations.ReactionsListForIssueCommentRequest) (*operations.ReactionsListForIssueCommentResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repos/{owner}/{repo}/issues/comments/{comment_id}/reactions", request.PathParams)

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

	res := &operations.ReactionsListForIssueCommentResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.Reaction
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Reactions = out
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
	case httpRes.StatusCode == 415:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.ReactionsListForIssueComment415ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ReactionsListForIssueComment415ApplicationJSONObject = out
		}
	}

	return res, nil
}

// ReactionsListForPullRequestReviewComment - List reactions for a pull request review comment
// List the reactions to a [pull request review comment](https://docs.github.com/enterprise-server@2.19/rest/reference/pulls#review-comments).
// https://docs.github.com/enterprise-server@2.19/rest/reference/reactions#list-reactions-for-a-pull-request-review-comment - API method documentation
func (s *Reactions) ReactionsListForPullRequestReviewComment(ctx context.Context, request operations.ReactionsListForPullRequestReviewCommentRequest) (*operations.ReactionsListForPullRequestReviewCommentResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions", request.PathParams)

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

	res := &operations.ReactionsListForPullRequestReviewCommentResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.Reaction
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Reactions = out
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
	case httpRes.StatusCode == 415:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.ReactionsListForPullRequestReviewComment415ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ReactionsListForPullRequestReviewComment415ApplicationJSONObject = out
		}
	}

	return res, nil
}

// ReactionsListForTeamDiscussion - List reactions for a team discussion
// List the reactions to a [team discussion](https://docs.github.com/enterprise-server@2.19/rest/reference/teams#discussions). OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@2.19/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
// https://docs.github.com/enterprise-server@2.19/rest/reference/reactions/#list-reactions-for-a-team-discussion - API method documentation
func (s *Reactions) ReactionsListForTeamDiscussion(ctx context.Context, request operations.ReactionsListForTeamDiscussionRequest) (*operations.ReactionsListForTeamDiscussionResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/teams/{team_id}/discussions/{discussion_number}/reactions", request.PathParams)

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

	res := &operations.ReactionsListForTeamDiscussionResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.Reaction
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Reactions = out
		}
	}

	return res, nil
}

// ReactionsListForTeamDiscussionComment - List reactions for a team discussion comment
// List the reactions to a [team discussion comment](https://docs.github.com/enterprise-server@2.19/rest/reference/teams#discussion-comments). OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@2.19/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
// https://docs.github.com/enterprise-server@2.19/rest/reference/reactions/#list-reactions-for-a-team-discussion-comment - API method documentation
func (s *Reactions) ReactionsListForTeamDiscussionComment(ctx context.Context, request operations.ReactionsListForTeamDiscussionCommentRequest) (*operations.ReactionsListForTeamDiscussionCommentResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/teams/{team_id}/discussions/{discussion_number}/comments/{comment_number}/reactions", request.PathParams)

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

	res := &operations.ReactionsListForTeamDiscussionCommentResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.Reaction
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Reactions = out
		}
	}

	return res, nil
}
