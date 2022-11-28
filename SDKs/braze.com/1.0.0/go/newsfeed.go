package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
	"strings"
)

type NewsFeed struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewNewsFeed(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *NewsFeed {
	return &NewsFeed{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// NewsFeedCardAnalytics - News Feed Card Analytics
// This endpoint allows you to retrieve a daily series of engagement stats for a card over time.
//
// ### Components Used
// - [Card ID](https://www.braze.com/docs/api/identifier_types/)
// - [News Feed List](https://www.braze.com/docs/api/endpoints/export/news_feed/get_news_feed_cards/)
//
// ## Response
//
// ```json
// Content-Type: application/json
// Authorization: Bearer YOUR-REST-API-KEY
//
//	{
//	    "message": (required, string) the status of the export, returns 'success' when completed without errors,
//	    "data" : [
//	        {
//	            "time" : (string) point in time - as ISO 8601 extended when unit is "hour" and as ISO 8601 date when unit is "day",
//	            "clicks" : (int) ,
//	            "impressions" : (int),
//	            "unique_clicks" : (int),
//	            "unique_impressions" : (int)
//	        },
//	        ...
//	    ]
//	}
//
// ```
func (s *NewsFeed) NewsFeedCardAnalytics(ctx context.Context, request operations.NewsFeedCardAnalyticsRequest) (*operations.NewsFeedCardAnalyticsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/feed/data_series"

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

	res := &operations.NewsFeedCardAnalyticsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// NewsFeedCardsDetails - News Feed Cards Details
// This endpoint allows you to retrieve relevant information on the card, which can be identified by the `card_id`.
//
// ### Components Used
// - [Card ID](https://www.braze.com/docs/api/identifier_types/)
// - [News Feed List](https://www.braze.com/docs/api/endpoints/export/news_feed/get_news_feed_cards/)
//
// ## Response
//
// ```json
// Content-Type: application/json
// Authorization: Bearer YOUR-REST-API-KEY
//
//	{
//	    "message": (required, string) The status of the export, returns 'success' when completed without errors,
//	    "created_at" : (string) Date created as ISO 8601 date,
//	    "updated_at" : (string) Date last updated as ISO 8601 date,
//	    "name" : (string) Card name,
//	    "publish_at" : (string) Date card was published as ISO 8601 date,
//	    "end_at" : (string) Date card will stop displaying for users as ISO 8601 date,
//	    "tags" : (array) Tag names associated with the card,
//	    "title" : (string) Title of the card,
//	    "image_url" : (string) Image URL used by this card,
//	    "extras" : (dictionary) Dictionary containing key-value pair data attached to this card,
//	    "description" : (string) Description text used by this card,
//	    "archived": (boolean) whether this Card is archived,
//	    "draft": (boolean) whether this Card is a draft,
//	}
//
// ```
func (s *NewsFeed) NewsFeedCardsDetails(ctx context.Context, request operations.NewsFeedCardsDetailsRequest) (*operations.NewsFeedCardsDetailsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/feed/details"

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

	res := &operations.NewsFeedCardsDetailsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// NewsFeedCardsList - News Feed Cards List
// This endpoint allows you to export a list of News Feed cards, each of which will include its name and Card API Identifier. The cards are returned in groups of 100 sorted by time of creation (oldest to newest by default).
//
// ## Response
//
// ```json
// Content-Type: application/json
// Authorization: Bearer YOUR-REST-API-KEY
//
//	{
//	    "message": (required, string) the status of the export, returns 'success' when completed without errors,
//	    "cards" : [
//	        {
//	            "id" : (string) Card API Identifier,
//	            "type" : (string) type of the card - NewsItem (classic cards), CaptionedImage, Banner or DevPick (cross-promotional cards),
//	            "title" : (string) title of the card,
//	            "tags" : (array) tag names associated with the card
//	        },
//	        ...
//	    ]
//	}
//
// ```
func (s *NewsFeed) NewsFeedCardsList(ctx context.Context, request operations.NewsFeedCardsListRequest) (*operations.NewsFeedCardsListResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/feed/list"

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

	res := &operations.NewsFeedCardsListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}
