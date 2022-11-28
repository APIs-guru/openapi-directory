package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

type Typeahead struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewTypeahead(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Typeahead {
	return &Typeahead{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// TypeaheadForWorkspace - Get objects via typeahead
// Retrieves objects in the workspace based via an auto-completion/typeahead
// search algorithm. This feature is meant to provide results quickly, so do
// not rely on this API to provide extremely accurate search results. The
// result set is limited to a single page of results with a maximum size, so
// you won’t be able to fetch large numbers of results.
//
// The typeahead search API provides search for objects from a single
// workspace. This endpoint should be used to query for objects when
// creating an auto-completion/typeahead search feature. This API is meant
// to provide results quickly and should not be relied upon for accurate or
// exhaustive search results. The results sets are limited in size and
// cannot be paginated.
//
// Queries return a compact representation of each object which is typically
// the gid and name fields. Interested in a specific set of fields or all of
// the fields?! Of course you are. Use field selectors to manipulate what
// data is included in a response.
//
// Resources with type `user` are returned in order of most contacted to
// least contacted. This is determined by task assignments, adding the user
// to projects, and adding the user as a follower to tasks, messages,
// etc.
//
// Resources with type `project` are returned in order of recency. This is
// determined when the user visits the project, is added to the project, and
// completes tasks in the project.
//
// Resources with type `task` are returned with priority placed on tasks
// the user is following, but no guarantee on the order of those tasks.
//
// Leaving the `query` string empty or omitted will give you results, still
// following the resource ordering above. This could be used to list users or
// projects that are relevant for the requesting user's api token.
func (s *Typeahead) TypeaheadForWorkspace(ctx context.Context, request operations.TypeaheadForWorkspaceRequest) (*operations.TypeaheadForWorkspaceResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/workspaces/{workspace_gid}/typeahead", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.TypeaheadForWorkspaceResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.TypeaheadForWorkspace200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.TypeaheadForWorkspace200ApplicationJSONObject = out
		}
	case httpRes.StatusCode == 400:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ErrorResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorResponse = out
		}
	case httpRes.StatusCode == 401:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ErrorResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorResponse = out
		}
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ErrorResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorResponse = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ErrorResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorResponse = out
		}
	case httpRes.StatusCode == 500:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ErrorResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorResponse = out
		}
	}

	return res, nil
}
