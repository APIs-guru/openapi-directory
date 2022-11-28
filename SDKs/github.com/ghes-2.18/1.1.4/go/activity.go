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

type Activity struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewActivity(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Activity {
	return &Activity{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// ActivityCheckRepoIsStarredByAuthenticatedUser - Check if a repository is starred by the authenticated user
// https://docs.github.com/enterprise-server@2.18/rest/reference/activity#check-if-a-repository-is-starred-by-the-authenticated-user - API method documentation
func (s *Activity) ActivityCheckRepoIsStarredByAuthenticatedUser(ctx context.Context, request operations.ActivityCheckRepoIsStarredByAuthenticatedUserRequest) (*operations.ActivityCheckRepoIsStarredByAuthenticatedUserResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/user/starred/{owner}/{repo}", request.PathParams)

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

	res := &operations.ActivityCheckRepoIsStarredByAuthenticatedUserResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
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

// ActivityDeleteRepoSubscription - Delete a repository subscription
// This endpoint should only be used to stop watching a repository. To control whether or not you wish to receive notifications from a repository, [set the repository's subscription manually](https://docs.github.com/enterprise-server@2.18/rest/reference/activity#set-a-repository-subscription).
// https://docs.github.com/enterprise-server@2.18/rest/reference/activity#delete-a-repository-subscription - API method documentation
func (s *Activity) ActivityDeleteRepoSubscription(ctx context.Context, request operations.ActivityDeleteRepoSubscriptionRequest) (*operations.ActivityDeleteRepoSubscriptionResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repos/{owner}/{repo}/subscription", request.PathParams)

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

	res := &operations.ActivityDeleteRepoSubscriptionResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	}

	return res, nil
}

// ActivityDeleteThreadSubscription - Delete a thread subscription
// Mutes all future notifications for a conversation until you comment on the thread or get an **@mention**. If you are watching the repository of the thread, you will still receive notifications. To ignore future notifications for a repository you are watching, use the [Set a thread subscription](https://docs.github.com/enterprise-server@2.18/rest/reference/activity#set-a-thread-subscription) endpoint and set `ignore` to `true`.
// https://docs.github.com/enterprise-server@2.18/rest/reference/activity#delete-a-thread-subscription - API method documentation
func (s *Activity) ActivityDeleteThreadSubscription(ctx context.Context, request operations.ActivityDeleteThreadSubscriptionRequest) (*operations.ActivityDeleteThreadSubscriptionResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/notifications/threads/{thread_id}/subscription", request.PathParams)

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

	res := &operations.ActivityDeleteThreadSubscriptionResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
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

// ActivityGetFeeds - Get feeds
// GitHub Enterprise Server provides several timeline resources in [Atom](http://en.wikipedia.org/wiki/Atom_(standard)) format. The Feeds API lists all the feeds available to the authenticated user:
//
// *   **Timeline**: The GitHub Enterprise Server global public timeline
// *   **User**: The public timeline for any user, using [URI template](https://docs.github.com/enterprise-server@2.18/rest/overview/resources-in-the-rest-api#hypermedia)
// *   **Current user public**: The public timeline for the authenticated user
// *   **Current user**: The private timeline for the authenticated user
// *   **Current user actor**: The private timeline for activity created by the authenticated user
// *   **Current user organizations**: The private timeline for the organizations the authenticated user is a member of.
// *   **Security advisories**: A collection of public announcements that provide information about security-related vulnerabilities in software on GitHub Enterprise Server.
//
// **Note**: Private feeds are only returned when [authenticating via Basic Auth](https://docs.github.com/enterprise-server@2.18/rest/overview/other-authentication-methods#basic-authentication) since current feed URIs use the older, non revocable auth tokens.
// https://docs.github.com/enterprise-server@2.18/rest/reference/activity#get-feeds - API method documentation
func (s *Activity) ActivityGetFeeds(ctx context.Context) (*operations.ActivityGetFeedsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/feeds"

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

	res := &operations.ActivityGetFeedsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Feed
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Feed = out
		}
	}

	return res, nil
}

// ActivityGetRepoSubscription - Get a repository subscription
// https://docs.github.com/enterprise-server@2.18/rest/reference/activity#get-a-repository-subscription - API method documentation
func (s *Activity) ActivityGetRepoSubscription(ctx context.Context, request operations.ActivityGetRepoSubscriptionRequest) (*operations.ActivityGetRepoSubscriptionResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repos/{owner}/{repo}/subscription", request.PathParams)

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

	res := &operations.ActivityGetRepoSubscriptionResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.RepositorySubscription
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.RepositorySubscription = out
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
	}

	return res, nil
}

// ActivityGetThread - Get a thread
// https://docs.github.com/enterprise-server@2.18/rest/reference/activity#get-a-thread - API method documentation
func (s *Activity) ActivityGetThread(ctx context.Context, request operations.ActivityGetThreadRequest) (*operations.ActivityGetThreadResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/notifications/threads/{thread_id}", request.PathParams)

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

	res := &operations.ActivityGetThreadResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Thread
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Thread = out
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

// ActivityGetThreadSubscriptionForAuthenticatedUser - Get a thread subscription for the authenticated user
// This checks to see if the current user is subscribed to a thread. You can also [get a repository subscription](https://docs.github.com/enterprise-server@2.18/rest/reference/activity#get-a-repository-subscription).
//
// Note that subscriptions are only generated if a user is participating in a conversation--for example, they've replied to the thread, were **@mentioned**, or manually subscribe to a thread.
// https://docs.github.com/enterprise-server@2.18/rest/reference/activity#get-a-thread-subscription-for-the-authenticated-user - API method documentation
func (s *Activity) ActivityGetThreadSubscriptionForAuthenticatedUser(ctx context.Context, request operations.ActivityGetThreadSubscriptionForAuthenticatedUserRequest) (*operations.ActivityGetThreadSubscriptionForAuthenticatedUserResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/notifications/threads/{thread_id}/subscription", request.PathParams)

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

	res := &operations.ActivityGetThreadSubscriptionForAuthenticatedUserResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ThreadSubscription
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ThreadSubscription = out
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

// ActivityListEventsForAuthenticatedUser - List events for the authenticated user
// If you are authenticated as the given user, you will see your private events. Otherwise, you'll only see public events.
// https://docs.github.com/enterprise-server@2.18/rest/reference/activity#list-events-for-the-authenticated-user - API method documentation
func (s *Activity) ActivityListEventsForAuthenticatedUser(ctx context.Context, request operations.ActivityListEventsForAuthenticatedUserRequest) (*operations.ActivityListEventsForAuthenticatedUserResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/users/{username}/events", request.PathParams)

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

	res := &operations.ActivityListEventsForAuthenticatedUserResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.Event
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Events = out
		}
	}

	return res, nil
}

// ActivityListNotificationsForAuthenticatedUser - List notifications for the authenticated user
// List all notifications for the current user, sorted by most recently updated.
// https://docs.github.com/enterprise-server@2.18/rest/reference/activity#list-notifications-for-the-authenticated-user - API method documentation
func (s *Activity) ActivityListNotificationsForAuthenticatedUser(ctx context.Context, request operations.ActivityListNotificationsForAuthenticatedUserRequest) (*operations.ActivityListNotificationsForAuthenticatedUserResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/notifications"

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

	res := &operations.ActivityListNotificationsForAuthenticatedUserResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.Thread
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Threads = out
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

// ActivityListOrgEventsForAuthenticatedUser - List organization events for the authenticated user
// This is the user's organization dashboard. You must be authenticated as the user to view this.
// https://docs.github.com/enterprise-server@2.18/rest/reference/activity#list-organization-events-for-the-authenticated-user - API method documentation
func (s *Activity) ActivityListOrgEventsForAuthenticatedUser(ctx context.Context, request operations.ActivityListOrgEventsForAuthenticatedUserRequest) (*operations.ActivityListOrgEventsForAuthenticatedUserResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/users/{username}/events/orgs/{org}", request.PathParams)

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

	res := &operations.ActivityListOrgEventsForAuthenticatedUserResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.Event
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Events = out
		}
	}

	return res, nil
}

// ActivityListPublicEvents - List public events
// We delay the public events feed by five minutes, which means the most recent event returned by the public events API actually occurred at least five minutes ago.
// https://docs.github.com/enterprise-server@2.18/rest/reference/activity#list-public-events - API method documentation
func (s *Activity) ActivityListPublicEvents(ctx context.Context, request operations.ActivityListPublicEventsRequest) (*operations.ActivityListPublicEventsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/events"

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

	res := &operations.ActivityListPublicEventsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.Event
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Events = out
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
	case httpRes.StatusCode == 503:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.ActivityListPublicEvents503ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ActivityListPublicEvents503ApplicationJSONObject = out
		}
	}

	return res, nil
}

// ActivityListPublicEventsForRepoNetwork - List public events for a network of repositories
// https://docs.github.com/enterprise-server@2.18/rest/reference/activity#list-public-events-for-a-network-of-repositories - API method documentation
func (s *Activity) ActivityListPublicEventsForRepoNetwork(ctx context.Context, request operations.ActivityListPublicEventsForRepoNetworkRequest) (*operations.ActivityListPublicEventsForRepoNetworkResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/networks/{owner}/{repo}/events", request.PathParams)

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

	res := &operations.ActivityListPublicEventsForRepoNetworkResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.Event
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Events = out
		}
	case httpRes.StatusCode == 301:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.BasicError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BasicError = out
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

// ActivityListPublicEventsForUser - List public events for a user
// https://docs.github.com/enterprise-server@2.18/rest/reference/activity#list-public-events-for-a-user - API method documentation
func (s *Activity) ActivityListPublicEventsForUser(ctx context.Context, request operations.ActivityListPublicEventsForUserRequest) (*operations.ActivityListPublicEventsForUserResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/users/{username}/events/public", request.PathParams)

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

	res := &operations.ActivityListPublicEventsForUserResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.Event
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Events = out
		}
	}

	return res, nil
}

// ActivityListPublicOrgEvents - List public organization events
// https://docs.github.com/enterprise-server@2.18/rest/reference/activity#list-public-organization-events - API method documentation
func (s *Activity) ActivityListPublicOrgEvents(ctx context.Context, request operations.ActivityListPublicOrgEventsRequest) (*operations.ActivityListPublicOrgEventsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/orgs/{org}/events", request.PathParams)

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

	res := &operations.ActivityListPublicOrgEventsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.Event
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Events = out
		}
	}

	return res, nil
}

// ActivityListReceivedEventsForUser - List events received by the authenticated user
// These are events that you've received by watching repos and following users. If you are authenticated as the given user, you will see private events. Otherwise, you'll only see public events.
// https://docs.github.com/enterprise-server@2.18/rest/reference/activity#list-events-received-by-the-authenticated-user - API method documentation
func (s *Activity) ActivityListReceivedEventsForUser(ctx context.Context, request operations.ActivityListReceivedEventsForUserRequest) (*operations.ActivityListReceivedEventsForUserResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/users/{username}/received_events", request.PathParams)

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

	res := &operations.ActivityListReceivedEventsForUserResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.Event
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Events = out
		}
	}

	return res, nil
}

// ActivityListReceivedPublicEventsForUser - List public events received by a user
// https://docs.github.com/enterprise-server@2.18/rest/reference/activity#list-public-events-received-by-a-user - API method documentation
func (s *Activity) ActivityListReceivedPublicEventsForUser(ctx context.Context, request operations.ActivityListReceivedPublicEventsForUserRequest) (*operations.ActivityListReceivedPublicEventsForUserResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/users/{username}/received_events/public", request.PathParams)

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

	res := &operations.ActivityListReceivedPublicEventsForUserResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.Event
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Events = out
		}
	}

	return res, nil
}

// ActivityListRepoEvents - List repository events
// https://docs.github.com/enterprise-server@2.18/rest/reference/activity#list-repository-events - API method documentation
func (s *Activity) ActivityListRepoEvents(ctx context.Context, request operations.ActivityListRepoEventsRequest) (*operations.ActivityListRepoEventsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repos/{owner}/{repo}/events", request.PathParams)

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

	res := &operations.ActivityListRepoEventsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.Event
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Events = out
		}
	}

	return res, nil
}

// ActivityListRepoNotificationsForAuthenticatedUser - List repository notifications for the authenticated user
// List all notifications for the current user.
// https://docs.github.com/enterprise-server@2.18/rest/reference/activity#list-repository-notifications-for-the-authenticated-user - API method documentation
func (s *Activity) ActivityListRepoNotificationsForAuthenticatedUser(ctx context.Context, request operations.ActivityListRepoNotificationsForAuthenticatedUserRequest) (*operations.ActivityListRepoNotificationsForAuthenticatedUserResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repos/{owner}/{repo}/notifications", request.PathParams)

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

	res := &operations.ActivityListRepoNotificationsForAuthenticatedUserResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.Thread
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Threads = out
		}
	}

	return res, nil
}

// ActivityListReposStarredByAuthenticatedUser - List repositories starred by the authenticated user
// Lists repositories the authenticated user has starred.
//
// You can also find out _when_ stars were created by passing the following custom [media type](https://docs.github.com/enterprise-server@2.18/rest/overview/media-types/) via the `Accept` header:
// https://docs.github.com/enterprise-server@2.18/rest/reference/activity#list-repositories-starred-by-the-authenticated-user - API method documentation
func (s *Activity) ActivityListReposStarredByAuthenticatedUser(ctx context.Context, request operations.ActivityListReposStarredByAuthenticatedUserRequest) (*operations.ActivityListReposStarredByAuthenticatedUserResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/user/starred"

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

	res := &operations.ActivityListReposStarredByAuthenticatedUserResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.Repository
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Repositories = out
		case utils.MatchContentType(contentType, `application/vnd.github.v3.star+json`):
			var out []shared.StarredRepository
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.StarredRepositories = out
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

// ActivityListReposStarredByUser - List repositories starred by a user
// Lists repositories a user has starred.
//
// You can also find out _when_ stars were created by passing the following custom [media type](https://docs.github.com/enterprise-server@2.18/rest/overview/media-types/) via the `Accept` header:
// https://docs.github.com/enterprise-server@2.18/rest/reference/activity#list-repositories-starred-by-a-user - API method documentation
func (s *Activity) ActivityListReposStarredByUser(ctx context.Context, request operations.ActivityListReposStarredByUserRequest) (*operations.ActivityListReposStarredByUserResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/users/{username}/starred", request.PathParams)

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

	res := &operations.ActivityListReposStarredByUserResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ActivityListReposStarredByUser200ApplicationJSONAnyOf = out
		}
	}

	return res, nil
}

// ActivityListReposWatchedByUser - List repositories watched by a user
// Lists repositories a user is watching.
// https://docs.github.com/enterprise-server@2.18/rest/reference/activity#list-repositories-watched-by-a-user - API method documentation
func (s *Activity) ActivityListReposWatchedByUser(ctx context.Context, request operations.ActivityListReposWatchedByUserRequest) (*operations.ActivityListReposWatchedByUserResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/users/{username}/subscriptions", request.PathParams)

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

	res := &operations.ActivityListReposWatchedByUserResponse{
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

// ActivityListStargazersForRepo - List stargazers
// Lists the people that have starred the repository.
//
// You can also find out _when_ stars were created by passing the following custom [media type](https://docs.github.com/enterprise-server@2.18/rest/overview/media-types/) via the `Accept` header:
// https://docs.github.com/enterprise-server@2.18/rest/reference/activity#list-stargazers - API method documentation
func (s *Activity) ActivityListStargazersForRepo(ctx context.Context, request operations.ActivityListStargazersForRepoRequest) (*operations.ActivityListStargazersForRepoResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repos/{owner}/{repo}/stargazers", request.PathParams)

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

	res := &operations.ActivityListStargazersForRepoResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ActivityListStargazersForRepo200ApplicationJSONAnyOf = out
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

// ActivityListWatchedReposForAuthenticatedUser - List repositories watched by the authenticated user
// Lists repositories the authenticated user is watching.
// https://docs.github.com/enterprise-server@2.18/rest/reference/activity#list-repositories-watched-by-the-authenticated-user - API method documentation
func (s *Activity) ActivityListWatchedReposForAuthenticatedUser(ctx context.Context, request operations.ActivityListWatchedReposForAuthenticatedUserRequest) (*operations.ActivityListWatchedReposForAuthenticatedUserResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/user/subscriptions"

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

	res := &operations.ActivityListWatchedReposForAuthenticatedUserResponse{
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

// ActivityListWatchersForRepo - List watchers
// Lists the people watching the specified repository.
// https://docs.github.com/enterprise-server@2.18/rest/reference/activity#list-watchers - API method documentation
func (s *Activity) ActivityListWatchersForRepo(ctx context.Context, request operations.ActivityListWatchersForRepoRequest) (*operations.ActivityListWatchersForRepoResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repos/{owner}/{repo}/subscribers", request.PathParams)

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

	res := &operations.ActivityListWatchersForRepoResponse{
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

// ActivityMarkNotificationsAsRead - Mark notifications as read
// Marks all notifications as "read" removes it from the [default view on GitHub Enterprise Server](https://github.com/notifications). If the number of notifications is too large to complete in one request, you will receive a `202 Accepted` status and GitHub Enterprise Server will run an asynchronous process to mark notifications as "read." To check whether any "unread" notifications remain, you can use the [List notifications for the authenticated user](https://docs.github.com/enterprise-server@2.18/rest/reference/activity#list-notifications-for-the-authenticated-user) endpoint and pass the query parameter `all=false`.
// https://docs.github.com/enterprise-server@2.18/rest/reference/activity#mark-notifications-as-read - API method documentation
func (s *Activity) ActivityMarkNotificationsAsRead(ctx context.Context, request operations.ActivityMarkNotificationsAsReadRequest) (*operations.ActivityMarkNotificationsAsReadResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/notifications"

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

	res := &operations.ActivityMarkNotificationsAsReadResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 202:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.ActivityMarkNotificationsAsRead202ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ActivityMarkNotificationsAsRead202ApplicationJSONObject = out
		}
	case httpRes.StatusCode == 205:
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

// ActivityMarkRepoNotificationsAsRead - Mark repository notifications as read
// Marks all notifications in a repository as "read" removes them from the [default view on GitHub Enterprise Server](https://github.com/notifications). If the number of notifications is too large to complete in one request, you will receive a `202 Accepted` status and GitHub Enterprise Server will run an asynchronous process to mark notifications as "read." To check whether any "unread" notifications remain, you can use the [List repository notifications for the authenticated user](https://docs.github.com/enterprise-server@2.18/rest/reference/activity#list-repository-notifications-for-the-authenticated-user) endpoint and pass the query parameter `all=false`.
// https://docs.github.com/enterprise-server@2.18/rest/reference/activity#mark-repository-notifications-as-read - API method documentation
func (s *Activity) ActivityMarkRepoNotificationsAsRead(ctx context.Context, request operations.ActivityMarkRepoNotificationsAsReadRequest) (*operations.ActivityMarkRepoNotificationsAsReadResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repos/{owner}/{repo}/notifications", request.PathParams)

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

	res := &operations.ActivityMarkRepoNotificationsAsReadResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 202:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.ActivityMarkRepoNotificationsAsRead202ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ActivityMarkRepoNotificationsAsRead202ApplicationJSONObject = out
		}
	case httpRes.StatusCode == 205:
	}

	return res, nil
}

// ActivityMarkThreadAsRead - Mark a thread as read
// https://docs.github.com/enterprise-server@2.18/rest/reference/activity#mark-a-thread-as-read - API method documentation
func (s *Activity) ActivityMarkThreadAsRead(ctx context.Context, request operations.ActivityMarkThreadAsReadRequest) (*operations.ActivityMarkThreadAsReadResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/notifications/threads/{thread_id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PATCH", url, nil)
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

	res := &operations.ActivityMarkThreadAsReadResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 205:
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
	}

	return res, nil
}

// ActivitySetRepoSubscription - Set a repository subscription
// If you would like to watch a repository, set `subscribed` to `true`. If you would like to ignore notifications made within a repository, set `ignored` to `true`. If you would like to stop watching a repository, [delete the repository's subscription](https://docs.github.com/enterprise-server@2.18/rest/reference/activity#delete-a-repository-subscription) completely.
// https://docs.github.com/enterprise-server@2.18/rest/reference/activity#set-a-repository-subscription - API method documentation
func (s *Activity) ActivitySetRepoSubscription(ctx context.Context, request operations.ActivitySetRepoSubscriptionRequest) (*operations.ActivitySetRepoSubscriptionResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repos/{owner}/{repo}/subscription", request.PathParams)

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

	res := &operations.ActivitySetRepoSubscriptionResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.RepositorySubscription
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.RepositorySubscription = out
		}
	}

	return res, nil
}

// ActivitySetThreadSubscription - Set a thread subscription
// If you are watching a repository, you receive notifications for all threads by default. Use this endpoint to ignore future notifications for threads until you comment on the thread or get an **@mention**.
//
// You can also use this endpoint to subscribe to threads that you are currently not receiving notifications for or to subscribed to threads that you have previously ignored.
//
// Unsubscribing from a conversation in a repository that you are not watching is functionally equivalent to the [Delete a thread subscription](https://docs.github.com/enterprise-server@2.18/rest/reference/activity#delete-a-thread-subscription) endpoint.
// https://docs.github.com/enterprise-server@2.18/rest/reference/activity#set-a-thread-subscription - API method documentation
func (s *Activity) ActivitySetThreadSubscription(ctx context.Context, request operations.ActivitySetThreadSubscriptionRequest) (*operations.ActivitySetThreadSubscriptionResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/notifications/threads/{thread_id}/subscription", request.PathParams)

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

	res := &operations.ActivitySetThreadSubscriptionResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ThreadSubscription
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ThreadSubscription = out
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

// ActivityStarRepoForAuthenticatedUser - Star a repository for the authenticated user
// Note that you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/enterprise-server@2.18/rest/overview/resources-in-the-rest-api#http-verbs)."
// https://docs.github.com/enterprise-server@2.18/rest/reference/activity#star-a-repository-for-the-authenticated-user - API method documentation
func (s *Activity) ActivityStarRepoForAuthenticatedUser(ctx context.Context, request operations.ActivityStarRepoForAuthenticatedUserRequest) (*operations.ActivityStarRepoForAuthenticatedUserResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/user/starred/{owner}/{repo}", request.PathParams)

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

	res := &operations.ActivityStarRepoForAuthenticatedUserResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
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

// ActivityUnstarRepoForAuthenticatedUser - Unstar a repository for the authenticated user
// https://docs.github.com/enterprise-server@2.18/rest/reference/activity#unstar-a-repository-for-the-authenticated-user - API method documentation
func (s *Activity) ActivityUnstarRepoForAuthenticatedUser(ctx context.Context, request operations.ActivityUnstarRepoForAuthenticatedUserRequest) (*operations.ActivityUnstarRepoForAuthenticatedUserResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/user/starred/{owner}/{repo}", request.PathParams)

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

	res := &operations.ActivityUnstarRepoForAuthenticatedUserResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
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
