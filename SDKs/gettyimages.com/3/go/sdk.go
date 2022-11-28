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

var ServerList = []string{
	"https://gettyimages.com",
}

type HTTPClient interface {
	Do(req *http.Request) (*http.Response, error)
}

type SDK struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_security       *shared.Security
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

type SDKOption func(*SDK)

func WithServerURL(serverURL string, params map[string]string) SDKOption {
	return func(sdk *SDK) {
		if params != nil {
			serverURL = utils.ReplaceParameters(serverURL, params)
		}

		sdk._serverURL = serverURL
	}
}

func WithClient(client HTTPClient) SDKOption {
	return func(sdk *SDK) {
		sdk._defaultClient = client
	}
}

func WithSecurity(security shared.Security) SDKOption {
	return func(sdk *SDK) {
		sdk._security = &security
	}
}

func New(opts ...SDKOption) *SDK {
	sdk := &SDK{
		_language:   "go",
		_sdkVersion: "",
		_genVersion: "internal",
	}
	for _, opt := range opts {
		opt(sdk)
	}

	if sdk._defaultClient == nil {
		sdk._defaultClient = http.DefaultClient
	}
	if sdk._securityClient == nil {

		if sdk._security != nil {
			sdk._securityClient = utils.ConfigureSecurityClient(sdk._defaultClient, sdk._security)
		} else {
			sdk._securityClient = sdk._defaultClient
		}

	}

	if sdk._serverURL == "" {
		sdk._serverURL = ServerList[0]
	}

	return sdk
}

// DeleteV3AssetChangesChangeSetsChangeSetID - Confirm asset change notifications.
// # Delete Asset Changes
//
// Confirm asset changes acknowledges receipt of asset changes (from the PUT asset changes endpoint).
//
// ##  Quickstart
//
// You'll need an API key and an access token to use this resource.
func (s *SDK) DeleteV3AssetChangesChangeSetsChangeSetID(ctx context.Context, request operations.DeleteV3AssetChangesChangeSetsChangeSetIDRequest) (*operations.DeleteV3AssetChangesChangeSetsChangeSetIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v3/asset-changes/change-sets/{change-set-id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DeleteV3AssetChangesChangeSetsChangeSetIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	}

	return res, nil
}

// DeleteV3BoardsBoardID - Delete a board
func (s *SDK) DeleteV3BoardsBoardID(ctx context.Context, request operations.DeleteV3BoardsBoardIDRequest) (*operations.DeleteV3BoardsBoardIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v3/boards/{board_id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DeleteV3BoardsBoardIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 204:
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	}

	return res, nil
}

// DeleteV3BoardsBoardIDAssets - Remove assets from a board
func (s *SDK) DeleteV3BoardsBoardIDAssets(ctx context.Context, request operations.DeleteV3BoardsBoardIDAssetsRequest) (*operations.DeleteV3BoardsBoardIDAssetsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v3/boards/{board_id}/assets", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
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

	res := &operations.DeleteV3BoardsBoardIDAssetsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	}

	return res, nil
}

// DeleteV3BoardsBoardIDAssetsAssetID - Remove an asset from a board
func (s *SDK) DeleteV3BoardsBoardIDAssetsAssetID(ctx context.Context, request operations.DeleteV3BoardsBoardIDAssetsAssetIDRequest) (*operations.DeleteV3BoardsBoardIDAssetsAssetIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v3/boards/{board_id}/assets/{asset_id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DeleteV3BoardsBoardIDAssetsAssetIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	}

	return res, nil
}

// DeleteV3BoardsBoardIDCommentsCommentID - Delete a comment from a board
func (s *SDK) DeleteV3BoardsBoardIDCommentsCommentID(ctx context.Context, request operations.DeleteV3BoardsBoardIDCommentsCommentIDRequest) (*operations.DeleteV3BoardsBoardIDCommentsCommentIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v3/boards/{board_id}/comments/{comment_id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DeleteV3BoardsBoardIDCommentsCommentIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 204:
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	}

	return res, nil
}

func (s *SDK) GetV3AffiliatesSearchImages(ctx context.Context, request operations.GetV3AffiliatesSearchImagesRequest) (*operations.GetV3AffiliatesSearchImagesResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v3/affiliates/search/images"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetV3AffiliatesSearchImagesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.AffiliateImageSearchResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.AffiliateImageSearchResponse = out
		}
	}

	return res, nil
}

func (s *SDK) GetV3AffiliatesSearchVideos(ctx context.Context, request operations.GetV3AffiliatesSearchVideosRequest) (*operations.GetV3AffiliatesSearchVideosResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v3/affiliates/search/videos"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetV3AffiliatesSearchVideosResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.AffiliateVideoSearchResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.AffiliateVideoSearchResponse = out
		}
	}

	return res, nil
}

// GetV3ArtistsImages - Search for images by a photographer
func (s *SDK) GetV3ArtistsImages(ctx context.Context, request operations.GetV3ArtistsImagesRequest) (*operations.GetV3ArtistsImagesResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v3/artists/images"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetV3ArtistsImagesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	}

	return res, nil
}

// GetV3ArtistsVideos - Search for videos by a photographer
func (s *SDK) GetV3ArtistsVideos(ctx context.Context, request operations.GetV3ArtistsVideosRequest) (*operations.GetV3ArtistsVideosResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v3/artists/videos"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetV3ArtistsVideosResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	}

	return res, nil
}

// GetV3AssetChangesChannels - Get a list of asset change notification channels.
// # Get Partner Channels
//
// Retrieves the channel data for the partner. This data can be used to populate the channel_id parameter in the Put Asset Changes query.
//
// ##  Quickstart
//
// You'll need an API key and an access token to use this resource.
//
// Partners who have a channel that has been removed should contact their sales representative to be set up again.
func (s *SDK) GetV3AssetChangesChannels(ctx context.Context) (*operations.GetV3AssetChangesChannelsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v3/asset-changes/channels"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetV3AssetChangesChannelsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.Channel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Channels = out
		}
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	}

	return res, nil
}

// GetV3Boards - Get all boards that the user participates in
func (s *SDK) GetV3Boards(ctx context.Context, request operations.GetV3BoardsRequest) (*operations.GetV3BoardsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v3/boards"

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

	res := &operations.GetV3BoardsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.BoardList
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BoardList = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	}

	return res, nil
}

// GetV3BoardsBoardID - Get assets and metadata for a specific board
func (s *SDK) GetV3BoardsBoardID(ctx context.Context, request operations.GetV3BoardsBoardIDRequest) (*operations.GetV3BoardsBoardIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v3/boards/{board_id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetV3BoardsBoardIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.BoardDetail
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BoardDetail = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 404:
	}

	return res, nil
}

// GetV3BoardsBoardIDComments - Get comments from a board
func (s *SDK) GetV3BoardsBoardIDComments(ctx context.Context, request operations.GetV3BoardsBoardIDCommentsRequest) (*operations.GetV3BoardsBoardIDCommentsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v3/boards/{board_id}/comments", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetV3BoardsBoardIDCommentsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CommentsList
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CommentsList = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 404:
	}

	return res, nil
}

// GetV3Collections - Gets collections applicable for the customer.
// Use this endpoint to retrieve collections associated with your Getty Images account. To browse available collections see our [Image collections page]( http://www.gettyimages.com/creative-images/collections).
//
// You'll need an API key and access token to use this resource.
func (s *SDK) GetV3Collections(ctx context.Context, request operations.GetV3CollectionsRequest) (*operations.GetV3CollectionsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v3/collections"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetV3CollectionsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CollectionsList
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CollectionsList = out
		}
	case httpRes.StatusCode == 401:
	}

	return res, nil
}

// GetV3Countries - Gets countries codes and names.
// Returns a list of country objects that contains country name, two letter ISO abbreviation and three letter ISO abbreviation.
//
// You'll need an API key and access token to use this resource.
func (s *SDK) GetV3Countries(ctx context.Context, request operations.GetV3CountriesRequest) (*operations.GetV3CountriesResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v3/countries"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetV3CountriesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CountriesList
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CountriesList = out
		}
	case httpRes.StatusCode == 401:
	}

	return res, nil
}

// GetV3CustomersCurrent - Returns information about the current user.
// Returns the first, middle and last name of the authenticated user.
//
// You'll need an API key and access token to use this resource.
//
// Please consult our [Authorization FAQ](http://developers.gettyimages.com/en/authorization-faq.html) for more information on authorization tokens.
func (s *SDK) GetV3CustomersCurrent(ctx context.Context, request operations.GetV3CustomersCurrentRequest) (*operations.GetV3CustomersCurrentResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v3/customers/current"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetV3CustomersCurrentResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CustomerInfoResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CustomerInfoResponse = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 503:
	}

	return res, nil
}

// GetV3Downloads - Returns information about a customer's downloaded assets.
// Returns information about a customer's previously downloaded assets.
//
// You'll need an API key and access token to use this resource.
//
// This endpoint requires being a Getty Images customer to limit your results to only assets that you have a license to use,
// you need to also include an authorization token in the header of your request.
// Please consult our [Authorization FAQ](http://developers.gettyimages.com/en/authorization-faq.html) for more information on authorization tokens.
func (s *SDK) GetV3Downloads(ctx context.Context, request operations.GetV3DownloadsRequest) (*operations.GetV3DownloadsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v3/downloads"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetV3DownloadsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GetDownloadsResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetDownloadsResponse = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 403:
	}

	return res, nil
}

// GetV3Events - Get metadata for multiple events
// This endpoint returns the detailed event metadata for all specified events. Getty Images news, sports and entertainment photographers and
// videographers cover editorially relevant events occurring around the world.  All images or video clips produced in association with
// an event, are assigned the same EventID. EventIDs are part of the meta-data returned in SearchForImages Results. Only content
// produced under a Getty Images brand name (Getty Images News, Getty Images Sports, Getty Images Entertainment, Film Magic, Wire Image)
// will be consistently assigned an EventID. The Event framework may also be used to group similar content, such as
// "Hats from the Royal Wedding" or "Odd-ballOffbeat images of the week".
//
// You'll need an API key and access token to use this resource.
func (s *SDK) GetV3Events(ctx context.Context, request operations.GetV3EventsRequest) (*operations.GetV3EventsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v3/events"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetV3EventsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 404:
	}

	return res, nil
}

// GetV3EventsID - Get metadata for a single event
// This endpoint returns the detailed event metadata for a specified event. Getty Images news, sports and entertainment
// photographers and videographers cover editorially relevant events occurring around the world.
// All images or video clips produced in association with an event, are assigned the same EventID.
// EventIDs are part of the meta-data returned in SearchForImages Results. Only content produced under a Getty Images
// brand name (Getty Images News, Getty Images Sports, Getty Images Entertainment, Film Magic, Wire Image) will be
// consistently assigned an EventID. The Event framework may also be used to group similar content, such as
// "Hats from the Royal Wedding" or "Odd-ballOffbeat images of the week".
//
// You'll need an API key and access token to use this resource.
func (s *SDK) GetV3EventsID(ctx context.Context, request operations.GetV3EventsIDRequest) (*operations.GetV3EventsIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v3/events/{id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetV3EventsIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 404:
	}

	return res, nil
}

// GetV3Images - Get metadata for multiple images by supplying multiple image ids
// This endpoint returns the detailed image metadata for all specified images.
//
// You'll need an API key and access token to use this resource.
//
// ## Working with Fields Sets
//
// Fields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:
//
// #### Summary Fields Set
//
// The **summary_set** query string parameter fields value represents a small batch of metadata fields that are often used to build
// search response results. The following fields are provided for every image in your result set when you include **summary_set** in your request.
//
// ```
//
//	{
//	    "images":
//	    [
//	        "artist",
//	        "asset_family",
//	        "caption",
//	        "collection_code",
//	        "collection_id",
//	        "collection_name",
//	        "license_model",
//	        "max_dimensions",
//	        "title"
//	    ]
//	}
//
// ```
//
// #### Detail Fields Set
//
// The **detail_set** query string parameter fields value represents a large batch of metadata fields that are often used to build a
// detailed view of images. The following fields are provided for every image in your result set when you include **detail_set** in your request.
//
// ```
//
//	{
//	    "images":
//	    [
//	        "allowed_use",
//	        "artist",
//	        "artist_title",
//	        "asset_family",
//	        "call_for_image",
//	        "caption",
//	        "city",
//	        "collection_code",
//	        "collection_id",
//	        "collection_name",
//	        "color_type",
//	        "copyright",
//	        "country",
//	        "credit_line",
//	        "date_created",
//	        "date_submitted",
//	        "download_sizes",
//	        "editorial_segments",
//	        "event_ids",
//	        "graphical_style",
//	        "license_model",
//	        "max_dimensions",
//	        "orientation",
//	        "product_types",
//	        "quality_rank",
//	        "referral_destinations",
//	        "state_province",
//	        "title"
//	    ]
//	}
//
// ```
//
// #### Display Fields Set
//
// The **display_set** query string parameter fields value represents the fields that provide you with URLs for the low resolution
// files that are most frequently used to build a UI displaying search results. The following fields are provided for every image
// in your result set when you include **display_set** in your request.
//
// ```
//
//	{
//	    "images":
//	    [
//	        "display_sizes":
//	        [
//	            {
//	                "name": "comp"
//	            },
//	            {
//	                "name": "preview"
//	            },
//	            {
//	                "name": "thumb"
//	            }
//	        ]
//	    ]
//	}
//
// ```
//
// ## Request Usage Considerations
//
// - Specifying the "entity_details" response field can have significant performance implications. The field should be used only when necessary.
func (s *SDK) GetV3Images(ctx context.Context, request operations.GetV3ImagesRequest) (*operations.GetV3ImagesResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v3/images"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetV3ImagesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ImagesDetailResults
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ImagesDetailResults = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 500:
	}

	return res, nil
}

// GetV3ImagesID - Get metadata for a single image by supplying one image id
// This endpoint returns the detailed image metadata for a specified image.
//
// You'll need an API key and access token to use this resource.
//
// ## Working with Fields Sets
//
// Fields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:
//
// #### Summary Fields Set
//
// The **summary_set** query string parameter fields value represents a small batch of metadata fields that
// are often used to build search response results. The following fields are provided for every image in your
// result set when you include **summary_set** in your request.
//
// ```
//
//	{
//	    "images":
//	    [
//	        "artist",
//	        "asset_family",
//	        "caption",
//	        "collection_code",
//	        "collection_id",
//	        "collection_name",
//	        "license_model",
//	        "max_dimensions",
//	        "title"
//	    ]
//	}
//
// ```
//
// #### Detail Fields Set
//
// The **detail_set** query string parameter fields value represents a large batch of metadata fields that are
// often used to build a detailed view of images. The following fields are provided for every image in your
// result set when you include **detail_set** in your request.
//
// ```
//
//	{
//	    "images":
//	    [
//	        "allowed_use",
//	        "artist",
//	        "artist_title",
//	        "asset_family",
//	        "call_for_image",
//	        "caption",
//	        "city",
//	        "collection_code",
//	        "collection_id",
//	        "collection_name",
//	        "color_type",
//	        "copyright",
//	        "country",
//	        "credit_line",
//	        "date_created",
//	        "date_submitted",
//	        "download_sizes",
//	        "editorial_segments",
//	        "event_ids",
//	        "graphical_style",
//	        "license_model",
//	        "max_dimensions",
//	        "orientation",
//	        "product_types",
//	        "quality_rank",
//	        "referral_destinations",
//	        "state_province",
//	        "title"
//	    ]
//	}
//
// ```
//
// #### Display Fields Set
//
// The **display_set** query string parameter fields value represents the fields that provide you with URLs for the low
// resolution files that are most frequently used to build a UI displaying search results. The following fields are provided
// for every image in your result set when you include **display_set** in your request.
//
// ```
//
//	{
//	    "images":
//	    [
//	        "display_sizes":
//	        [
//	            {
//	                "name": "comp"
//	            },
//	            {
//	                "name": "preview"
//	            },
//	            {
//	                "name": "thumb"
//	            }
//	        ]
//	    ]
//	}
//
// ```
//
// ## Request Usage Considerations
//
// - Specifying the "entity_details" response field can have significant performance implications. The field should be used only when necessary.
func (s *SDK) GetV3ImagesID(ctx context.Context, request operations.GetV3ImagesIDRequest) (*operations.GetV3ImagesIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v3/images/{id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetV3ImagesIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ImagesDetailResults
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ImagesDetailResults = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 500:
	}

	return res, nil
}

// GetV3ImagesIDDownloadhistory - Returns information about a customer's download history for a specific asset
func (s *SDK) GetV3ImagesIDDownloadhistory(ctx context.Context, request operations.GetV3ImagesIDDownloadhistoryRequest) (*operations.GetV3ImagesIDDownloadhistoryResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v3/images/{id}/downloadhistory", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetV3ImagesIDDownloadhistoryResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.AssetDownloadHistoryResults
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.AssetDownloadHistoryResults = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 500:
	}

	return res, nil
}

// GetV3ImagesIDSameSeries - Retrieve creative images from the same series
// This endpoint will provide the list of images, if any exist, from the same series as the specified creative asset id. These images are typically from the same photo shoot. This functionality will not work for editorial assets.
//
// You'll need an API key and access token to use this resource.
//
// ## Working with Fields Sets
//
// Fields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:
//
// #### Summary Fields Set
//
// The **summary_set** query string parameter fields value represents a small batch of metadata fields that are often used to build
// search response results. The following fields are provided for every image in your result set when you include **summary_set** in your request.
//
// ```
//
//	{
//	    "images":
//	    [
//	        "asset_family",
//	        "caption",
//	        "collection_code",
//	        "collection_id",
//	        "collection_name",
//	        "display_sizes":
//	        [
//	            {
//	                "name": "thumb"
//	            }
//	        ]
//	        "license_model",
//	        "max_dimensions",
//	        "title"
//	    ]
//	}
//
// ```
//
// #### Detail Fields Set
//
// The **detail_set** query string parameter fields value represents a large batch of metadata fields that are often used to build a
// detailed view of images. The following fields are provided for every image in your result set when you include **detail_set** in your request.
//
// ```
//
//	{
//	    "images":
//	    [
//	        "allowed_use",
//	        "artist",
//	        "asset_family",
//	        "call_for_image",
//	        "caption",
//	        "collection_code",
//	        "collection_id",
//	        "collection_name",
//	        "copyright",
//	        "date_created",
//	        "display_sizes":
//	        [
//	            {
//	                "name": "comp"
//	            },
//	            {
//	                "name": "preview"
//	            },
//	            {
//	                "name": "thumb"
//	            }
//	        ],
//	        "editorial_segments",
//	        "event_ids",
//	        "graphical_style",
//	        "license_model",
//	        "max_dimensions",
//	        "orientation",
//	        "product_types",
//	        "quality_rank",
//	        "referral_destinations",
//	        "title"
//	    ]
//	}
//
// ```
//
// #### Display Fields Set
//
// The **display_set** query string parameter fields value represents the fields that provide you with URLs for the low resolution files
// that are most frequently used to build a UI displaying search results. The following fields are provided for every image in your result
// set when you include **display_set** in your request.
//
// ```
//
//	{
//	    "images":
//	    [
//	        "display_sizes":
//	        [
//	            {
//	                "name": "comp"
//	            },
//	            {
//	                "name": "preview"
//	            },
//	            {
//	                "name": "thumb"
//	            }
//	        ]
//	    ]
//	}
//
// ```
func (s *SDK) GetV3ImagesIDSameSeries(ctx context.Context, request operations.GetV3ImagesIDSameSeriesRequest) (*operations.GetV3ImagesIDSameSeriesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v3/images/{id}/same-series", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetV3ImagesIDSameSeriesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ImageSearchItemSearchResults
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ImageSearchItemSearchResults = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 500:
	}

	return res, nil
}

// GetV3ImagesIDSimilar - Retrieve similar images
// This endpoint will provide a list of images that are similar to the specified asset id.
//
// You'll need an API key and access token to use this resource.
//
// ## Working with Fields Sets
//
// Fields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:
//
// #### Summary Fields Set
//
// The **summary_set** query string parameter fields value represents a small batch of metadata fields that are often used to build
// search response results. The following fields are provided for every image in your result set when you include **summary_set** in your request.
//
// ```
//
//	{
//	    "images":
//	    [
//	        "asset_family",
//	        "caption",
//	        "collection_code",
//	        "collection_id",
//	        "collection_name",
//	        "display_sizes":
//	        [
//	            {
//	                "name": "thumb"
//	            }
//	        ]
//	        "license_model",
//	        "max_dimensions",
//	        "title"
//	    ]
//	}
//
// ```
//
// #### Detail Fields Set
//
// The **detail_set** query string parameter fields value represents a large batch of metadata fields that are often used to build a
// detailed view of images. The following fields are provided for every image in your result set when you include **detail_set** in your request.
//
// ```
//
//	{
//	    "images":
//	    [
//	        "allowed_use",
//	        "artist",
//	        "asset_family",
//	        "call_for_image",
//	        "caption",
//	        "collection_code",
//	        "collection_id",
//	        "collection_name",
//	        "copyright",
//	        "date_created",
//	        "display_sizes":
//	        [
//	            {
//	                "name": "comp"
//	            },
//	            {
//	                "name": "preview"
//	            },
//	            {
//	                "name": "thumb"
//	            }
//	        ],
//	        "editorial_segments",
//	        "event_ids",
//	        "graphical_style",
//	        "license_model",
//	        "max_dimensions",
//	        "orientation",
//	        "product_types",
//	        "quality_rank",
//	        "referral_destinations",
//	        "title"
//	    ]
//	}
//
// ```
//
// #### Display Fields Set
//
// The **display_set** query string parameter fields value represents the fields that provide you with URLs for the low resolution files
// that are most frequently used to build a UI displaying search results. The following fields are provided for every image in your result
// set when you include **display_set** in your request.
//
// ```
//
//	{
//	    "images":
//	    [
//	        "display_sizes":
//	        [
//	            {
//	                "name": "comp"
//	            },
//	            {
//	                "name": "preview"
//	            },
//	            {
//	                "name": "thumb"
//	            }
//	        ]
//	    ]
//	}
//
// ```
func (s *SDK) GetV3ImagesIDSimilar(ctx context.Context, request operations.GetV3ImagesIDSimilarRequest) (*operations.GetV3ImagesIDSimilarResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v3/images/{id}/similar", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetV3ImagesIDSimilarResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ImageSearchItemSearchResults
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ImageSearchItemSearchResults = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 500:
	}

	return res, nil
}

// GetV3OrdersID - Get order metadata
// This endpoint returns detailed order metadata for a specified order.
// Use of this endpoint requires configuration changes to your API key.
//
// You'll need an API key and access token to use this resource.
func (s *SDK) GetV3OrdersID(ctx context.Context, request operations.GetV3OrdersIDRequest) (*operations.GetV3OrdersIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v3/orders/{id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetV3OrdersIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.OrderDetail
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.OrderDetail = out
		}
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	}

	return res, nil
}

// GetV3Products - Get Products
// This endpoint returns all products available to the username used during authentication. As such, this endpoint requires the use of
// a fully authorized access_token. The product data can then be used as search filters, restricting results to images from a specific product.
//
// You'll need an API key and access token to use this resource.
func (s *SDK) GetV3Products(ctx context.Context, request operations.GetV3ProductsRequest) (*operations.GetV3ProductsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v3/products"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetV3ProductsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ProductsResult
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ProductsResult = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 500:
	}

	return res, nil
}

// GetV3PurchasedAssets - Get Previously Purchased Images and Video
// This endpoint returns a list of all assets purchased on gettyimages.com by the username used for authentication.
// Use of this endpoint requires configuration changes to your API key. Please contact your sales representative
// to learn more.
//
// You'll need an API key and access token to use this resource.
func (s *SDK) GetV3PurchasedAssets(ctx context.Context, request operations.GetV3PurchasedAssetsRequest) (*operations.GetV3PurchasedAssetsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v3/purchased-assets"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetV3PurchasedAssetsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.PreviousAssetPurchases
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PreviousAssetPurchases = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 403:
	}

	return res, nil
}

// GetV3SearchEvents - Search for events
// Use this endpoint to search Getty Images news, sports and entertainment events. Getty Images photographers and videographers cover editorially relevant events occurring around the world.  All images or video clips produced in association with an event, are assigned the same EventID. EventIDs are part of the meta-data returned in Search Results. Only content produced under a Getty Images brand name (Getty Images News, Getty Images Sports, Getty Images Entertainment, Film Magic, Wire Image) will be consistently assigned an EventID. The Event framework may also be used to group similar content, such as "Hats from the Royal Wedding" or "Odd-ballOffbeat images of the week".
//
// You'll need an API key and access token to use this resource.
//
// You can show different information in the response by specifying values on the "fields" parameter (see details below).
// You can search with only an API key, and that will give you search results that are equivalent to doing a search on the GettyImages.com site without being logged in (anonymous search).  If you are a Getty Images API customer and would like to ensure that your API searches return only assets that you have a license to use, you need to also include an authorization token in the header of your request.  Please consult our [Authorization FAQ](http://developers.gettyimages.com/en/authorization-faq.html) for more information on authorization tokens, and our [Authorization Workflows](https://github.com/gettyimages/gettyimages-api/blob/master/OAuth2Workflow.md) for code examples of getting a token.
func (s *SDK) GetV3SearchEvents(ctx context.Context, request operations.GetV3SearchEventsRequest) (*operations.GetV3SearchEventsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v3/search/events"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetV3SearchEventsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.EventsSearchResult
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.EventsSearchResult = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 403:
	}

	return res, nil
}

// GetV3SearchImages - Search for both creative and editorial images
// Use this endpoint to search over a blend of our contemporary stock photos, illustrations, archival images, editorial photos, illustrations and archival images. Because this draws from such a large diversity of content, the results will not be as relevant as when the more specific Creative or Editorial endpoints are used. Additionally, the response time for this endpoint is slower compared to that for Creative and Editorial-specific endpoints. For these reasons, it is highly recommended that those endpoints are used instead of this blended endpoint.
//
// You'll need an API key and access token to use this resource.
//
// You can show different information in the response by specifying values on the "fields" parameter (see details below).
// You can search with only an API key, and that will give you search results that are equivalent to doing a search on the GettyImages.com site without being logged in (anonymous search).  If you are a Getty Images API customer and would like to ensure that your API searches return only assets that you have a license to use, you need to also include an authorization token in the header of your request.  Please consult our [Authorization FAQ](http://developers.gettyimages.com/en/authorization-faq.html) for more information on authorization tokens, and our [Authorization Workflows](https://github.com/gettyimages/gettyimages-api/blob/master/OAuth2Workflow.md) for code examples of getting a token.<br>
// To include your API token in the search request, add it to the headers as a Bearer token (example in curl):
//
//	-H "Authorization: Bearer <your-token>"
//
// ## Working with Fields Sets
//
// Fields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:
//
// #### Summary Fields Set
//
// The **summary_set** query string parameter fields value represents a small batch of metadata fields that are often used to build search response results. The following fields are provided for every image in your result set when you include **summary_set** in your request.
//
// ```
//
//	{
//	    "images":
//	    [
//	        "asset_family",
//	        "caption",
//	        "collection_code",
//	        "collection_id",
//	        "collection_name",
//	        "display_sizes":
//	        [
//	            {
//	                "name": "thumb"
//	            }
//	        ],
//	        "license_model",
//	        "max_dimensions",
//	        "title"
//	    ]
//	}
//
// ```
//
// #### Detail Fields Set
//
// The **detail_set** query string parameter fields value represents a large batch of metadata fields that are often used to build a detailed view of images.
// The following fields are provided for every image in your result set when you include **detail_set** in your request.
//
// ```
//
//	{
//	    "images":
//	    [
//	        "allowed_use",
//	        "artist",
//	        "asset_family",
//	        "call_for_image",
//	        "caption",
//	        "collection_code",
//	        "collection_id",
//	        "collection_name",
//	        "copyright",
//	        "date_created",
//	        "display_sizes":
//	        [
//	            {
//	                "name": "comp"
//	            },
//	            {
//	                "name": "preview"
//	            },
//	            {
//	                "name": "thumb"
//	            }
//	        ],
//	        "editorial_segments",
//	        "event_ids",
//	        "graphical_style",
//	        "license_model",
//	        "max_dimensions",
//	        "orientation",
//	        "product_types",
//	        "quality_rank",
//	        "referral_destinations",
//	        "title"
//	    ]
//
// ]
// ```
//
// #### Display Fields Set
//
// The **display_set** query string parameter fields value represents the fields that provide you with URLs for the low resolution files that are most
// frequently used to build a UI displaying search results. The following fields are provided for every image in your result set when you include **display_set**
// in your request.
//
// ```
//
//	{
//	    "images":
//	    [
//	        "display_sizes":
//	        [
//	            {
//	                "name": "comp"
//	            },
//	            {
//	                "name": "preview"
//	            },
//	            {
//	                "name": "thumb"
//	            }
//	        ]
//	    ]
//	}
//
// ```
//
// ## Request Usage Considerations
//
// - Specifying the "entity_details" response field can have significant performance implications. The field should be used only when necessary.
func (s *SDK) GetV3SearchImages(ctx context.Context, request operations.GetV3SearchImagesRequest) (*operations.GetV3SearchImagesResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v3/search/images"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetV3SearchImagesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ImageSearchItemSearchResults
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ImageSearchItemSearchResults = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 403:
	}

	return res, nil
}

// GetV3SearchImagesCreative - Search for creative images only
// Use this endpoint to search our contemporary stock photos, illustrations and archival images.
//
// You'll need an API key and access token to use this resource.
//
// You can show different information in the response by specifying values on the "fields" parameter (see details below).
// You can search with only an API key, and that will give you search results that are equivalent to doing a search on the GettyImages.com site without being logged in (anonymous search).  If you are a Getty Images API customer and would like to ensure that your API searches return only assets that you have a license to use, you need to also include an authorization token in the header of your request.  Please consult our [Authorization FAQ](http://developers.gettyimages.com/en/authorization-faq.html) for more information on authorization tokens, and our [Authorization Workflows](https://github.com/gettyimages/gettyimages-api/blob/master/OAuth2Workflow.md) for code examples of getting a token.
//
// ## Working with Fields Sets
//
// Fields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:
//
// #### Summary Fields Set
//
// The **summary_set** query string parameter fields value represents a small batch of metadata fields that are often used to
// build search response results. The following fields are provided for every image in your result set when you include **summary_set** in your request.
//
// ```
//
//	{
//	    "images":
//	    [
//	        "asset_family",
//	        "caption",
//	        "collection_code",
//	        "collection_id",
//	        "collection_name",
//	        "display_sizes":
//	        [
//	            {
//	                "name": "thumb"
//	            }
//	        ],
//	        "license_model",
//	        "max_dimensions",
//	        "title"
//	    ]
//	}
//
// ```
//
// #### Detail Fields Set
//
// The **detail_set** query string parameter fields value represents a large batch of metadata fields that are often used to
// build a detailed view of images. The following fields are provided for every image in your result set when you include **detail_set** in your request.
//
// ```
//
//	{
//	    "images":
//	    [
//	        "allowed_use",
//	        "artist",
//	        "asset_family",
//	        "call_for_image",
//	        "caption",
//	        "collection_code",
//	        "collection_id",
//	        "collection_name",
//	        "copyright",
//	        "date_created",
//	        "display_sizes":
//	        [
//	            {
//	                "name": "comp"
//	            },
//	            {
//	                "name": "preview"
//	            },
//	            {
//	                "name": "thumb"
//	            }
//	        ],
//	        "editorial_segments",
//	        "event_ids",
//	        "graphical_style",
//	        "license_model",
//	        "max_dimensions",
//	        "orientation",
//	        "product_types",
//	        "quality_rank",
//	        "referral_destinations",
//	        "title"
//	    ]
//
// ]
// ```
//
// #### Display Fields Set
//
// The **display_set** query string parameter fields value represents the fields that provide you with URLs for the low resolution
// files that are most frequently used to build a UI displaying search results. The following fields are provided for every image
// in your result set when you include **display_set** in your request.
//
// ```Go
//
//	{
//	    "images":
//	    [
//	        "display_sizes":
//	        [
//	            {
//	                "name": "comp"
//	            },
//	            {
//	                "name": "preview"
//	            },
//	            {
//	                "name": "thumb"
//	            }
//	        ]
//	    ]
//	}
//
// ```
func (s *SDK) GetV3SearchImagesCreative(ctx context.Context, request operations.GetV3SearchImagesCreativeRequest) (*operations.GetV3SearchImagesCreativeResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v3/search/images/creative"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetV3SearchImagesCreativeResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CreativeImageSearchResults
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CreativeImageSearchResults = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 500:
	}

	return res, nil
}

// GetV3SearchImagesCreativeByImage - Search for creative images based on url
// Allows searching for similar creative images by passing the URL to an existing image. All responses will have the exclude_nudity filter automatically applied.
//
// Before calling the search by image endpoint, an image must be uploaded to a specific AWS S3 bucket. The bucket name is `search-by-image.s3.amazonaws.com`.
// For example, using cURL:
// ```sh
// curl -i -X PUT https://search-by-image.s3.amazonaws.com/my-test-image.jpg -H "Content-Type: image/jpeg" --data-binary "@testimage.jpg"
// ```
//
// Uploads can be overwritten if the names are the same, so using a prefix like the API Key, application name or company name is recommended. Uploads will expire from the bucket after 24 hours.
//
// Once the image has been uploaded, use the full URL in the `image_url` parameter, e.g. `image_url=https://search-by-image.s3.amazonaws.com/my-test-image.jpg`.
//
// <!-- TODO/HACK from https://app.clickup.com/t/8mfmv3 - Uncomment this if image_fingerprint ever comes back to be useful -->
// <!-- Subsequent searches for the same image can be executed using the `image_fingerprint` that is returned by the initial search. -->
func (s *SDK) GetV3SearchImagesCreativeByImage(ctx context.Context, request operations.GetV3SearchImagesCreativeByImageRequest) (*operations.GetV3SearchImagesCreativeByImageResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v3/search/images/creative/by-image"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetV3SearchImagesCreativeByImageResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.SearchByImageResourceResults
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.SearchByImageResourceResults = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 500:
	}

	return res, nil
}

// GetV3SearchImagesEditorial - Search for editorial images only
// Use this endpoint to search our editorial stock photos, illustrations and archival images.  Editorial images represent newsworthy events or illustrate matters of general interest, such as news, sport and entertainment and are generally intended for editorial use.
//
// You'll need an API key and access token to use this resource.
//
// You can show different information in the response by specifying values on the "fields" parameter (see details below).
// You can search with only an API key, and that will give you search results that are equivalent to doing a search on the GettyImages.com site without being logged in (anonymous search).  If you are a Getty Images API customer and would like to ensure that your API searches return only assets that you have a license to use, you need to also include an authorization token in the header of your request.  Please consult our [Authorization FAQ](http://developers.gettyimages.com/en/authorization-faq.html) for more information on authorization tokens, and our [Authorization Workflows](https://github.com/gettyimages/gettyimages-api/blob/master/OAuth2Workflow.md) for code examples of getting a token.
// To include your API token in the search request, add it to the headers as a Bearer token (example in curl):
//
//	-H "Authorization: Bearer <your-token>"
//
// ## Working with Fields Sets
//
// Fields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:
//
// #### Summary Fields Set
//
// The **summary_set** query string parameter fields value represents a small batch of metadata fields that are often used to build search response results. The following fields are provided for every image in your result set when you include **summary_set** in your request.
//
// ```
//
//	{
//	    "images":
//	    [
//	        "asset_family",
//	        "caption",
//	        "collection_code",
//	        "collection_id",
//	        "collection_name",
//	        "display_sizes":
//	        [
//	            {
//	                "name": "thumb"
//	            }
//	        ],
//	        "license_model",
//	        "max_dimensions",
//	        "title"
//	    ]
//	}
//
// ```
//
// #### Detail Fields Set
//
// The **detail_set** query string parameter fields value represents a large batch of metadata fields that are often used to build a detailed view of images. The following fields are provided for every image in your result set when you include **detail_set** in your request.
//
// ```
//
//	{
//	    "images":
//	    [
//	        "allowed_use",
//	        "artist",
//	        "asset_family",
//	        "call_for_image",
//	        "caption",
//	        "collection_code",
//	        "collection_id",
//	        "collection_name",
//	        "copyright",
//	        "date_created",
//	        "display_sizes":
//	        [
//	            {
//	                "name": "comp"
//	            },
//	            {
//	                "name": "preview"
//	            },
//	            {
//	                "name": "thumb"
//	            }
//	        ],
//	        "editorial_segments",
//	        "event_ids",
//	        "graphical_style",
//	        "license_model",
//	        "max_dimensions",
//	        "orientation",
//	        "product_types",
//	        "quality_rank",
//	        "referral_destinations",
//	        "title"
//	    ]
//
// ]
// ```
//
// #### Display Fields Set
//
// The **display_set** query string parameter fields value represents the fields that provide you with URLs for the low resolution files that are most frequently used to build a UI displaying search results. The following fields are provided for every image in your result set when you include **display_set** in your request.
//
// ```
//
//	{
//	    "images":
//	    [
//	        "display_sizes":
//	        [
//	            {
//	                "name": "comp"
//	            },
//	            {
//	                "name": "preview"
//	            },
//	            {
//	                "name": "thumb"
//	            }
//	        ]
//	    ]
//	}
//
// ```
//
// ## Request Usage Considerations
//
// - Specifying the "entity_details" response field can have significant performance implications. The field should be used only when necessary.
func (s *SDK) GetV3SearchImagesEditorial(ctx context.Context, request operations.GetV3SearchImagesEditorialRequest) (*operations.GetV3SearchImagesEditorialResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v3/search/images/editorial"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetV3SearchImagesEditorialResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.EditorialImageSearchResults
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.EditorialImageSearchResults = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 403:
	}

	return res, nil
}

// GetV3SearchVideosCreative - Search for creative videos
// Use this endpoint to search premium stock video, from archival film to contemporary 4K and HD footage.
//
// You'll need an API key and access token to use this resource.
//
// You can show different information in the response by specifying values on the "fields" parameter (see details below).
// You can search with only an API key, and that will give you search results that are equivalent to doing a search on the GettyImages.com site without
// being logged in (anonymous search).  If you are a Getty Images API customer and would like to ensure that your API searches return only
// assets that you have a license to use, you need to also include an authorization token in the header of your request.
// Please consult our [Authorization FAQ](http://developers.gettyimages.com/en/authorization-faq.html) for more information on authorization tokens.
//
// ## Working with Fields Sets
//
// Fields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:
//
// #### Summary Fields Set
//
// The **summary_set** query string parameter fields value represents a small batch of metadata fields that are often used to build search
// response results. The following fields are provided for every video in your result set when you include **summary_set** in your request.
//
// ```
//
//	{
//	    "videos":
//	    [
//	        "asset_family",
//	        "caption",
//	        "collection_code",
//	        "collection_name",
//	        "display_sizes":
//	        [
//	            {
//	                "name": "comp"
//	            },
//	            {
//	                "name": "preview"
//	            },
//	            {
//	                "name": "thumb"
//	            }
//	        ],
//	        "license_model",
//	        "title"
//	    ]
//	}
//
// ```
//
// #### Detail Fields Set
//
// The **detail_set** query string parameter fields value represents a large batch of metadata fields that are often used to build a
// detailed view of videos. The following fields are provided for every video in your result set when you include **detail_set** in your request.
//
// ```
//
//	{
//	    "videos":
//	    [
//	        "allowed_use",
//	        "artist",
//	        "asset_family",
//			"call_for_image",
//	        "caption",
//	        "clip_length",
//	        "collection_code",
//	        "collection_id",
//	        "collection_name",
//	        "color_type",
//	        "copyright",
//	        "date_created",
//	        "display_sizes":
//	        [
//	            {
//	                "name": "comp"
//	            },
//	            {
//	                "name": "preview"
//	            },
//	            {
//	                "name": "thumb"
//	            }
//	        ],
//	        "era",
//	        "license_model",
//	        "mastered_to",
//	        "originally_shot_on",
//	        "product_types",
//	        "quality_rank",
//	        "shot_speed",
//	        "source",
//	        "title"
//	    ]
//	}
//
// ```
//
// #### Display Fields Set
//
// The **display_set** query string parameter fields value represents the fields that provide you with URLs for the low resolution files
// that are most frequently used to build a UI displaying search results. The following fields are provided for every video in your result
// set when you include **display_set** in your request.
//
// ```
//
//	{
//	    "videos":
//	    [
//	        "display_sizes":
//	        [
//	            {
//	                "name": "comp"
//	            },
//	            {
//	                "name": "preview"
//	            },
//	            {
//	                "name": "thumb"
//	            }
//	        ]
//	    ]
//	}
//
// ```
func (s *SDK) GetV3SearchVideosCreative(ctx context.Context, request operations.GetV3SearchVideosCreativeRequest) (*operations.GetV3SearchVideosCreativeResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v3/search/videos/creative"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetV3SearchVideosCreativeResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CreativeVideoSearchResults
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CreativeVideoSearchResults = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 500:
	}

	return res, nil
}

// GetV3SearchVideosCreativeByImage - Search for creative videos based on url
// Search for **similar creative videos** by passing an `asset_id` to an asset in our catalog OR `image_url` to any image or a frame grab from a video. All responses will have the exclude_nudity filter automatically applied.
//
// ## Searching by URL
//
// When searching by `image_url`, an image or frame grab in JPEG format must be uploaded to a specific AWS S3 bucket. The bucket name is `search-by-image.s3.amazonaws.com`.
// Example using cURL:
// ```sh
// curl -i -X PUT https://search-by-image.s3.amazonaws.com/my-test-image.jpg -H "Content-Type: image/jpeg" --data-binary "@testimage.jpg"
// ```
//
// Uploads will be overwritten if the names are the same, so using a prefix like the API Key, application name or company name is recommended. Uploads will expire from the bucket after 24 hours.
//
// Once the JPEG has been uploaded, use the full URL in the `image_url` parameter, e.g. `image_url=https://search-by-image.s3.amazonaws.com/my-test-image.jpg`.
//
// ## Searching by asset id
//
// When searching by `asset_id`, any image or video asset id in the Getty/iStock catalog can be used.
func (s *SDK) GetV3SearchVideosCreativeByImage(ctx context.Context, request operations.GetV3SearchVideosCreativeByImageRequest) (*operations.GetV3SearchVideosCreativeByImageResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v3/search/videos/creative/by-image"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetV3SearchVideosCreativeByImageResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CreativeVideoSearchResults
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CreativeVideoSearchResults = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 500:
	}

	return res, nil
}

// GetV3SearchVideosEditorial - Search for editorial videos
// Use this endpoint to search current and archival video clips of celebrities, newsmakers, and events.
//
// You'll need an API key and access token to use this resource.
//
// You can show different information in the response by specifying values on the "fields" parameter (see details below).
// You can search with only an API key, and that will give you search results that are equivalent to doing a search on the GettyImages.com site without being logged in (anonymous search).  If you are a Getty Images API customer and would like to ensure that your API searches return only assets that you have a license to use, you need to also include an authorization token in the header of your request.  Please consult our [Authorization FAQ](http://developers.gettyimages.com/en/authorization-faq.html) for more information on authorization tokens, and our [Authorization Workflows](https://github.com/gettyimages/gettyimages-api/blob/master/OAuth2Workflow.md) for code examples of getting a token.
//
// ## Working with Fields Sets
//
// Fields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:
//
// #### Summary Fields Set
//
// The **summary_set** query string parameter fields value represents a small batch of metadata fields that are often used to build search response results. The following fields are provided for every video in your result set when you include **summary_set** in your request.
//
// ```
//
//	{
//	    "videos":
//	    [
//	        "asset_family",
//	        "caption",
//	        "collection_code",
//	        "collection_name",
//	        "display_sizes":
//	        [
//	            {
//	                "name": "comp"
//	            },
//	            {
//	                "name": "preview"
//	            },
//	            {
//	                "name": "thumb"
//	            }
//	        ],
//	        "license_model",
//	        "title"
//	    ]
//	}
//
// ```
//
// #### Detail Fields Set
//
// The **detail_set** query string parameter fields value represents a large batch of metadata fields that are often used to build a detailed view of videos. The following fields are provided for every video in your result set when you include **detail_set** in your request.
//
// ```
//
//	{
//	    "videos":
//	    [
//	        "allowed_use",
//	        "artist",
//	        "asset_family",
//			"call_for_image",
//	        "caption",
//	        "clip_length",
//	        "collection_code",
//	        "collection_id",
//	        "collection_name",
//	        "color_type",
//	        "copyright",
//	        "date_created",
//	        "display_sizes":
//	        [
//	            {
//	                "name": "comp"
//	            },
//	            {
//	                "name": "preview"
//	            },
//	            {
//	                "name": "thumb"
//	            }
//	        ],
//	        "era",
//	        "event_ids",
//	        "license_model",
//	        "mastered_to",
//	        "originally_shot_on",
//	        "product_types",
//	        "quality_rank",
//	        "shot_speed",
//	        "source",
//	        "title"
//	    ]
//	}
//
// ```
//
// #### Display Fields Set
//
// The **display_set** query string parameter fields value represents the fields that provide you with URLs for the low resolution files that are most frequently used to build a UI displaying search results. The following fields are provided for every video in your result set when you include **display_set** in your request.
//
// ```
//
//	{
//	    "videos":
//	    [
//	        "display_sizes":
//	        [
//	            {
//	                "name": "comp"
//	            },
//	            {
//	                "name": "preview"
//	            },
//	            {
//	                "name": "thumb"
//	            }
//	        ]
//	    ]
//	}
//
// ```
//
// ## Request Usage Considerations
//
// - Specifying the "entity_details" response field can have significant performance implications. The field should be used only when necessary.
func (s *SDK) GetV3SearchVideosEditorial(ctx context.Context, request operations.GetV3SearchVideosEditorialRequest) (*operations.GetV3SearchVideosEditorialResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v3/search/videos/editorial"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetV3SearchVideosEditorialResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.EditorialVideoSearchResults
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.EditorialVideoSearchResults = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 403:
	}

	return res, nil
}

// GetV3Videos - Get metadata for multiple videos by supplying multiple video ids
// Use this endpoint to return detailed video metadata for all the specified video ids.
//
// You'll need an API key and access token to use this resource.
//
// You can show different information in the response by specifying values on the "fields" parameter (see details below).
// You can search with only an API key, and that will give you search results that are equivalent to doing a search on the GettyImages.com site without being logged in (anonymous search).  If you are a Getty Images API customer and would like to ensure that your API searches return only assets that you have a license to use, you need to also include an authorization token in the header of your request.  Please consult our [Authorization FAQ](http://developers.gettyimages.com/en/authorization-faq.html) for more information on authorization tokens, and our [Authorization Workflows](https://github.com/gettyimages/gettyimages-api/blob/master/OAuth2Workflow.md) for code examples of getting a token.
//
// ## Working with Fields Sets
//
// Fields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:
//
// #### Summary Fields Set
//
// The **summary_set** query string parameter fields value represents a small batch of metadata fields that are often used to build search response results. The following fields are provided for every video in your result set when you include **summary_set** in your request.
//
// ```
//
//	{
//	    "videos":
//	    [
//	        "asset_family",
//	        "caption",
//	        "collection_code",
//	        "collection_name",
//	        "display_sizes":
//	        [
//	            {
//	                "name": "comp"
//	            },
//	            {
//	                "name": "preview"
//	            },
//	            {
//	                "name": "thumb"
//	            }
//	        ],
//	        "license_model",
//	        "title"
//	    ]
//	}
//
// ```
//
// #### Detail Fields Set
//
// The **detail_set** query string parameter fields value represents a large batch of metadata fields that are often used to build a detailed view of videos. The following fields are provided for every video in your result set when you include **detail_set** in your request.
//
// ```
//
//	{
//	    "videos":
//	    [
//	        "allowed_use",
//	        "artist",
//	        "asset_family",
//			"call_for_image",
//	        "caption",
//	        "clip_length",
//	        "collection_code",
//	        "collection_id",
//	        "collection_name",
//	        "color_type",
//	        "copyright",
//	        "date_created",
//	        "display_sizes":
//	        [
//	            {
//	                "name": "comp"
//	            },
//	            {
//	                "name": "preview"
//	            },
//	            {
//	                "name": "thumb"
//	            }
//	        ],
//	        "download_sizes",
//	        "era",
//	        "event_ids",
//	        "license_model",
//	        "mastered_to",
//	        "originally_shot_on",
//	        "product_types",
//	        "quality_rank",
//	        "shot_speed",
//	        "source",
//	        "title"
//	    ]
//	}
//
// ```
//
// #### Display Fields Set
//
// The **display_set** query string parameter fields value represents the fields that provide you with URLs for the low resolution files that are most frequently used to build a UI displaying search results. The following fields are provided for every video in your result set when you include **display_set** in your request.
//
// ```
//
//	{
//	    "videos":
//	    [
//	        "display_sizes":
//	        [
//	            {
//	                "name": "comp"
//	            },
//	            {
//	                "name": "preview"
//	            },
//	            {
//	                "name": "thumb"
//	            }
//	        ]
//	    ]
//	}
//
// ```
//
// ## Request Usage Considerations
//
// - Specifying the "entity_details" response field can have significant performance implications. The field should be used only when necessary.
func (s *SDK) GetV3Videos(ctx context.Context, request operations.GetV3VideosRequest) (*operations.GetV3VideosResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v3/videos"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetV3VideosResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 500:
	}

	return res, nil
}

// GetV3VideosID - Get metadata for a single video by supplying one video id
// Use this endpoint to return detailed video metadata for the specified video id.
//
// You'll need an API key and access token to use this resource.
//
// You can show different information in the response by specifying values on the "fields" parameter (see details below).
// You can search with only an API key, and that will give you search results that are equivalent to doing a search on the GettyImages.com site without being logged in (anonymous search).  If you are a Getty Images API customer and would like to ensure that your API searches return only assets that you have a license to use, you need to also include an authorization token in the header of your request.  Please consult our [Authorization FAQ](http://developers.gettyimages.com/en/authorization-faq.html) for more information on authorization tokens, and our [Authorization Workflows](https://github.com/gettyimages/gettyimages-api/blob/master/OAuth2Workflow.md) for code examples of getting a token.
//
// ## Working with Fields Sets
//
// Fields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:
//
// #### Summary Fields Set
//
// The **summary_set** query string parameter fields value represents a small batch of metadata fields that are often used to build search response results. The following fields are provided for every video in your result set when you include **summary_set** in your request.
//
// ```
//
//	{
//	    "videos":
//	    [
//	        "asset_family",
//	        "caption",
//	        "collection_code",
//	        "collection_name",
//	        "display_sizes":
//	        [
//	            {
//	                "name": "comp"
//	            },
//	            {
//	                "name": "preview"
//	            },
//	            {
//	                "name": "thumb"
//	            }
//	        ],
//	        "license_model",
//	        "title"
//	    ]
//	}
//
// ```
//
// #### Detail Fields Set
//
// The **detail_set** query string parameter fields value represents a large batch of metadata fields that are often used to build a detailed view of videos. The following fields are provided for every video in your result set when you include **detail_set** in your request.
//
// ```
//
//	{
//	    "videos":
//	    [
//	        "allowed_use",
//	        "artist",
//	        "asset_family",
//			"call_for_image",
//	        "caption",
//	        "clip_length",
//	        "collection_code",
//	        "collection_id",
//	        "collection_name",
//	        "color_type",
//	        "copyright",
//	        "date_created",
//	        "display_sizes":
//	        [
//	            {
//	                "name": "comp"
//	            },
//	            {
//	                "name": "preview"
//	            },
//	            {
//	                "name": "thumb"
//	            }
//	        ],
//	        "download_sizes",
//	        "era",
//	        "event_ids",
//	        "license_model",
//	        "mastered_to",
//	        "originally_shot_on",
//	        "product_types",
//	        "quality_rank",
//	        "shot_speed",
//	        "source",
//	        "title"
//	    ]
//	}
//
// ```
//
// #### Display Fields Set
//
// The **display_set** query string parameter fields value represents the fields that provide you with URLs for the low resolution files that are most frequently used to build a UI displaying search results. The following fields are provided for every video in your result set when you include **display_set** in your request.
//
// ```
//
//	{
//	    "videos":
//	    [
//	        "display_sizes":
//	        [
//	            {
//	                "name": "comp"
//	            },
//	            {
//	                "name": "preview"
//	            },
//	            {
//	                "name": "thumb"
//	            }
//	        ]
//	    ]
//	}
//
// ```
//
// ## Request Usage Considerations
//
// - Specifying the "entity_details" response field can have significant performance implications. The field should be used only when necessary.
func (s *SDK) GetV3VideosID(ctx context.Context, request operations.GetV3VideosIDRequest) (*operations.GetV3VideosIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v3/videos/{id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetV3VideosIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 500:
	}

	return res, nil
}

// GetV3VideosIDDownloadhistory - Returns information about a customer's download history for a specific asset
func (s *SDK) GetV3VideosIDDownloadhistory(ctx context.Context, request operations.GetV3VideosIDDownloadhistoryRequest) (*operations.GetV3VideosIDDownloadhistoryResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v3/videos/{id}/downloadhistory", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetV3VideosIDDownloadhistoryResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.AssetDownloadHistoryResults
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.AssetDownloadHistoryResults = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 500:
	}

	return res, nil
}

// GetV3VideosIDSameSeries - Retrieve creative videos from the same series
// This endpoint will provide the list of videos, if any exist, from the same series as the specified creative asset id. These images are typically from the same photo shoot. This functionality will not work for editorial assets.
//
// You'll need an API key and access token to use this resource.
//
// ## Working with Fields Sets
//
// Fields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:
//
// #### Summary Fields Set
//
// The **summary_set** query string parameter fields value represents a small batch of metadata fields that are often used to build search response results. The following fields are provided for every video in your result set when you include **summary_set** in your request.
//
// ```
//
//	{
//	    "videos":
//	    [
//	        "asset_family",
//	        "caption",
//	        "collection_code",
//	        "collection_name",
//	        "display_sizes":
//	        [
//	            {
//	                "name": "comp"
//	            },
//	            {
//	                "name": "preview"
//	            },
//	            {
//	                "name": "thumb"
//	            }
//	        ],
//	        "license_model",
//	        "title"
//	    ]
//	}
//
// ```
//
// #### Detail Fields Set
//
// The **detail_set** query string parameter fields value represents a large batch of metadata fields that are often used to build a detailed view of videos. The following fields are provided for every video in your result set when you include **detail_set** in your request.
//
// ```
//
//	{
//	    "videos":
//	    [
//	        "allowed_use",
//	        "artist",
//	        "asset_family",
//			"call_for_image",
//	        "caption",
//	        "clip_length",
//	        "collection_code",
//	        "collection_id",
//	        "collection_name",
//	        "color_type",
//	        "copyright",
//	        "date_created",
//	        "display_sizes":
//	        [
//	            {
//	                "name": "comp"
//	            },
//	            {
//	                "name": "preview"
//	            },
//	            {
//	                "name": "thumb"
//	            }
//	        ],
//	        "download_sizes",
//	        "era",
//	        "license_model",
//	        "mastered_to",
//	        "originally_shot_on",
//	        "product_types",
//	        "quality_rank",
//	        "shot_speed",
//	        "source",
//	        "title"
//	    ]
//	}
//
// ```
//
// #### Display Fields Set
//
// The **display_set** query string parameter fields value represents the fields that provide you with URLs for the low resolution files that are most frequently used to build a UI displaying search results. The following fields are provided for every video in your result set when you include **display_set** in your request.
//
// ```
//
//	{
//	    "videos":
//	    [
//	        "display_sizes":
//	        [
//	            {
//	                "name": "comp"
//	            },
//	            {
//	                "name": "preview"
//	            },
//	            {
//	                "name": "thumb"
//	            }
//	        ]
//	    ]
//	}
//
// ```
func (s *SDK) GetV3VideosIDSameSeries(ctx context.Context, request operations.GetV3VideosIDSameSeriesRequest) (*operations.GetV3VideosIDSameSeriesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v3/videos/{id}/same-series", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetV3VideosIDSameSeriesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 500:
	}

	return res, nil
}

// GetV3VideosIDSimilar - Retrieve similar videos
// This endpoint will provide a list of videos that are similar to the specified asset id.
//
// You'll need an API key and access token to use this resource.
//
// ## Working with Fields Sets
//
// Fields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:
//
// #### Summary Fields Set
//
// The **summary_set** query string parameter fields value represents a small batch of metadata fields that are often used to build search response results. The following fields are provided for every video in your result set when you include **summary_set** in your request.
//
// ```
//
//	{
//	    "videos":
//	    [
//	        "asset_family",
//	        "caption",
//	        "collection_code",
//	        "collection_name",
//	        "display_sizes":
//	        [
//	            {
//	                "name": "comp"
//	            },
//	            {
//	                "name": "preview"
//	            },
//	            {
//	                "name": "thumb"
//	            }
//	        ],
//	        "license_model",
//	        "title"
//	    ]
//	}
//
// ```
//
// #### Detail Fields Set
//
// The **detail_set** query string parameter fields value represents a large batch of metadata fields that are often used to build a detailed view of videos. The following fields are provided for every video in your result set when you include **detail_set** in your request.
//
// ```
//
//	{
//	    "videos":
//	    [
//	        "allowed_use",
//	        "artist",
//	        "asset_family",
//			"call_for_image",
//	        "caption",
//	        "clip_length",
//	        "collection_code",
//	        "collection_id",
//	        "collection_name",
//	        "color_type",
//	        "copyright",
//	        "date_created",
//	        "display_sizes":
//	        [
//	            {
//	                "name": "comp"
//	            },
//	            {
//	                "name": "preview"
//	            },
//	            {
//	                "name": "thumb"
//	            }
//	        ],
//	        "download_sizes",
//	        "era",
//	        "event_ids",
//	        "license_model",
//	        "mastered_to",
//	        "originally_shot_on",
//	        "product_types",
//	        "quality_rank",
//	        "shot_speed",
//	        "source",
//	        "title"
//	    ]
//	}
//
// ```
//
// #### Display Fields Set
//
// The **display_set** query string parameter fields value represents the fields that provide you with URLs for the low resolution files that are most frequently used to build a UI displaying search results. The following fields are provided for every video in your result set when you include **display_set** in your request.
//
// ```
//
//	{
//	    "videos":
//	    [
//	        "display_sizes":
//	        [
//	            {
//	                "name": "comp"
//	            },
//	            {
//	                "name": "preview"
//	            },
//	            {
//	                "name": "thumb"
//	            }
//	        ]
//	    ]
//	}
//
// ```
func (s *SDK) GetV3VideosIDSimilar(ctx context.Context, request operations.GetV3VideosIDSimilarRequest) (*operations.GetV3VideosIDSimilarResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v3/videos/{id}/similar", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetV3VideosIDSimilarResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 500:
	}

	return res, nil
}

// PostV3AssetLicensingAssetID - Endpoint for acquiring extended licenses with iStock credits for an asset.
func (s *SDK) PostV3AssetLicensingAssetID(ctx context.Context, request operations.PostV3AssetLicensingAssetIDRequest) (*operations.PostV3AssetLicensingAssetIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v3/asset-licensing/{assetId}", request.PathParams)

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

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostV3AssetLicensingAssetIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.AssetLicensingResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.AssetLicensingResponse = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 402:
	case httpRes.StatusCode == 404:
	}

	return res, nil
}

// PostV3Boards - Create a new board
func (s *SDK) PostV3Boards(ctx context.Context, request operations.PostV3BoardsRequest) (*operations.PostV3BoardsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v3/boards"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostV3BoardsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.BoardCreated
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BoardCreated = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	}

	return res, nil
}

// PostV3BoardsBoardIDComments - Add a comment to a board
func (s *SDK) PostV3BoardsBoardIDComments(ctx context.Context, request operations.PostV3BoardsBoardIDCommentsRequest) (*operations.PostV3BoardsBoardIDCommentsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v3/boards/{board_id}/comments", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostV3BoardsBoardIDCommentsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CommentCreated
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CommentCreated = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	}

	return res, nil
}

// PostV3DownloadsImagesID - Download an image
// Use this endpoint to generate download URLs and related data for images you are authorized to download.
//
// Most product offerings have enforced periodic download limits such as monthly, weekly, and daily. When this operation executes, the count of allowed downloads is decremented by one for the product offering. Once the download limit is reached for a given product offering, no further downloads may be requested for that product offering until the next download period.
//
// The download limit for a given download period is covered in your product agreement established with Getty Images.
//
// You'll need an API key and a [Resource Owner Grant or Implicit Grant](http://developers.gettyimages.com/en/authorization-faq.html) access token to use this resource.
//
// ## Auto Downloads
// The `auto_download` request query parameter specifies whether to automatically download the image.
//
// If the `auto_download` request query parameter is set to _true_, the API will return an HTTP status code 303 *See Other*. Your client code will need to process this response and redirect to the URI specified in the *Location* header to enable you to automatically download the file. The redirection workflow follows the [HTTP 1.1 protocol](https://tools.ietf.org/html/rfc7231#section-6.4.4).
//
// Client Request:
//
// ```
// https://api.gettyimages.com/v3/downloads/images/[asset_id]?auto_download=true
// ```
//
// Server Response:
//
// ```
// HTTP/1.1 303 See Other
// Location: https://delivery.gettyimages.com/...
// ```
//
// If the `auto_download` request query parameter is set to false, the API will return a HTTP status code 200, along with the URI in the response body which can be used to download the image.
//
// Client Request:
//
// ```
// https://api.gettyimages.com/v3/downloads/images/[asset_id]?auto_download=false
// ```
//
// Server Response:
//
// ```
// HTTP/1.1 200 OK
//
//	{
//		"uri": "https://delivery.gettyimages.com/..."
//	}
//
// ```
// ## Downloading Via the Returned URI
//
// The URI returned by this call should be considered opaque and the format could change at any time.
// In order to get the filename, length or file type, the response headers must be inspected. An example
// response follows:
//
// ```
// content-length: 33959979
// content-type: image/jpeg
// content-disposition: attachment; filename=GettyImages-1167612765.jpg
// ```
//
// The `content-disposition` header must be parsed to get a usable filename.
//
// ## Download URI expiration
//
// Download URIs are _**only valid for 24 hours**_, starting from the moment they are returned from this call.
func (s *SDK) PostV3DownloadsImagesID(ctx context.Context, request operations.PostV3DownloadsImagesIDRequest) (*operations.PostV3DownloadsImagesIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v3/downloads/images/{id}", request.PathParams)

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

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostV3DownloadsImagesIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 303:
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 404:
	}

	return res, nil
}

// PostV3DownloadsVideosID - Download a video
// Use this endpoint to generate download URLs and related data for videos you are authorized to download.
//
// Most product offerings have enforced periodic download limits such as monthly, weekly, and daily. When this operation executes, the count of allowed downloads is decremented by one for the product offering. Once the download limit is reached for a given product offering, no further downloads may be requested for that product offering until the next download period.
//
// The download limit for a given download period is covered in your product agreement established with Getty Images.
//
// You'll need an API key and a [Resource Owner Grant or Implicit Grant](http://developers.gettyimages.com/en/authorization-faq.html) access token to use this resource.
//
// ## Auto Downloads
// The `auto_download` request query parameter specifies whether to automatically download the video.
//
// If the `auto_download` request query parameter is set to _true_, the API will return an HTTP status code 303 *See Other*. Your client code will need to process this response and redirect to the URI specified in the *Location* header to enable you to automatically download the file. The redirection workflow follows the [HTTP 1.1 protocol](https://tools.ietf.org/html/rfc7231#section-6.4.4).
//
// Client Request:
//
// ```
// https://api.gettyimages.com/v3/downloads/videos/[asset_id]?auto_download=true
// ```
//
// Server Response:
//
// ```
// HTTP/1.1 303 See Other
// Location: https://delivery.gettyimages.com/...
// ```
//
// If the `auto_download` request query parameter is set to false, the API will return a HTTP status code 200, along with the URI in the response body which can be used to download the video.
//
// Client Request:
//
// ```
// https://api.gettyimages.com/v3/downloads/videos/[asset_id]?auto_download=false
// ```
//
// Server Response:
//
// ```
// HTTP/1.1 200 OK
//
//	{
//		"uri": "https://delivery.gettyimages.com/..."
//	}
//
// ```
//
// ## Downloading Via the Returned URI
//
// The URI returned by this call should be considered opaque and the format could change at any time.
// In order to get the filename, length or file type, the response headers must be inspected. An example
// response follows:
//
// ```
// content-length: 283925783
// content-type: video/quicktime
// content-disposition: attachment; filename=GettyImages-690773579.mov
// ```
//
// The `content-disposition` header must be parsed to get a usable filename.
//
// ## Download URI expiration
//
// Download URIs are _**only valid for 24 hours**_, starting from the moment they are returned from this call.
func (s *SDK) PostV3DownloadsVideosID(ctx context.Context, request operations.PostV3DownloadsVideosIDRequest) (*operations.PostV3DownloadsVideosIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v3/downloads/videos/{id}", request.PathParams)

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

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostV3DownloadsVideosIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 303:
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 404:
	}

	return res, nil
}

// PutV3AssetChangesChangeSets - Get asset change notifications.
// # Asset Changes
//
// Get notifications about new, updated or deleted assets.
//
// ##  Quickstart
//
// You'll need an API key and an access token to use this resource.
//
// Notifications older than 60 days will be removed from partner channels.
func (s *SDK) PutV3AssetChangesChangeSets(ctx context.Context, request operations.PutV3AssetChangesChangeSetsRequest) (*operations.PutV3AssetChangesChangeSetsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v3/asset-changes/change-sets"

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
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

	res := &operations.PutV3AssetChangesChangeSetsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.AssetChanges
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.AssetChanges = out
		}
	case httpRes.StatusCode == 201:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.AssetChanges
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.AssetChanges = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	}

	return res, nil
}

// PutV3BoardsBoardID - Update a board
func (s *SDK) PutV3BoardsBoardID(ctx context.Context, request operations.PutV3BoardsBoardIDRequest) (*operations.PutV3BoardsBoardIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v3/boards/{board_id}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "PUT", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PutV3BoardsBoardIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 204:
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	}

	return res, nil
}

// PutV3BoardsBoardIDAssets - Add assets to a board
func (s *SDK) PutV3BoardsBoardIDAssets(ctx context.Context, request operations.PutV3BoardsBoardIDAssetsRequest) (*operations.PutV3BoardsBoardIDAssetsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v3/boards/{board_id}/assets", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "PUT", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PutV3BoardsBoardIDAssetsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.AddBoardAssetsResult
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.AddBoardAssetsResult = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	}

	return res, nil
}

// PutV3BoardsBoardIDAssetsAssetID - Add an asset to a board
func (s *SDK) PutV3BoardsBoardIDAssetsAssetID(ctx context.Context, request operations.PutV3BoardsBoardIDAssetsAssetIDRequest) (*operations.PutV3BoardsBoardIDAssetsAssetIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v3/boards/{board_id}/assets/{asset_id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PutV3BoardsBoardIDAssetsAssetIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	}

	return res, nil
}

// PutV3UsageBatchesID - Report usage of assets via a batch format.
// # Report Usage
//
// Use this endpoint to report the usages of a set of assets. The count of assets submitted in a single batch to this endpoint is limited to 1000. Note that all asset Ids specified must be valid or the operation will fail causing no usages to be recorded. In this case, you will need to remove the invalid asset Ids from the query request and re-submit the query.
//
// ##  Quickstart
//
// You'll need an API key and a [Resource Owner Grant](http://developers.gettyimages.com/en/authorization-faq.html) access token to use this resource.
// Please see our [Getting Started](http://developers.gettyimages.com/en/getting-started.html) page for more information on how to sign up for an API key.
//
// _Note_: Date of use can be in any unambiguous date format.
func (s *SDK) PutV3UsageBatchesID(ctx context.Context, request operations.PutV3UsageBatchesIDRequest) (*operations.PutV3UsageBatchesIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v3/usage-batches/{id}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "PUT", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PutV3UsageBatchesIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ReportUsageBatchResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ReportUsageBatchResponse = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 409:
	}

	return res, nil
}
