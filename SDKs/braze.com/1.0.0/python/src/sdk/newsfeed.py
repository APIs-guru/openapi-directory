import requests
from sdk.models import operations
from . import utils

class NewsFeed:
    _client: requests.Session
    _security_client: requests.Session
    _server_url: str
    _language: str
    _sdk_version: str
    _gen_version: str

    def __init__(self, client: requests.Session, security_client: requests.Session, server_url: str, language: str, sdk_version: str, gen_version: str) -> None:
        self._client = client
        self._security_client = security_client
        self._server_url = server_url
        self._language = language
        self._sdk_version = sdk_version
        self._gen_version = gen_version

    
    def news_feed_card_analytics(self, request: operations.NewsFeedCardAnalyticsRequest) -> operations.NewsFeedCardAnalyticsResponse:
        r"""News Feed Card Analytics
        This endpoint allows you to retrieve a daily series of engagement stats for a card over time.
        
        ### Components Used
        - [Card ID](https://www.braze.com/docs/api/identifier_types/)
        - [News Feed List](https://www.braze.com/docs/api/endpoints/export/news_feed/get_news_feed_cards/)
        
        ## Response
        
        ```json
        Content-Type: application/json
        Authorization: Bearer YOUR-REST-API-KEY
        {
            \"message\": (required, string) the status of the export, returns 'success' when completed without errors,
            \"data\" : [
                {
                    \"time\" : (string) point in time - as ISO 8601 extended when unit is \"hour\" and as ISO 8601 date when unit is \"day\",
                    \"clicks\" : (int) ,
                    \"impressions\" : (int),
                    \"unique_clicks\" : (int),
                    \"unique_impressions\" : (int)
                },
                ...
            ]
        }
        ```
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/feed/data_series"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.NewsFeedCardAnalyticsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def news_feed_cards_details(self, request: operations.NewsFeedCardsDetailsRequest) -> operations.NewsFeedCardsDetailsResponse:
        r"""News Feed Cards Details
        This endpoint allows you to retrieve relevant information on the card, which can be identified by the `card_id`.
        
        ### Components Used
        - [Card ID](https://www.braze.com/docs/api/identifier_types/)
        - [News Feed List](https://www.braze.com/docs/api/endpoints/export/news_feed/get_news_feed_cards/)
        
        
        ## Response
        
        ```json
        Content-Type: application/json
        Authorization: Bearer YOUR-REST-API-KEY
        {
            \"message\": (required, string) The status of the export, returns 'success' when completed without errors,
            \"created_at\" : (string) Date created as ISO 8601 date,
            \"updated_at\" : (string) Date last updated as ISO 8601 date,
            \"name\" : (string) Card name,
            \"publish_at\" : (string) Date card was published as ISO 8601 date,
            \"end_at\" : (string) Date card will stop displaying for users as ISO 8601 date,
            \"tags\" : (array) Tag names associated with the card,
            \"title\" : (string) Title of the card,
            \"image_url\" : (string) Image URL used by this card,
            \"extras\" : (dictionary) Dictionary containing key-value pair data attached to this card,
            \"description\" : (string) Description text used by this card,
            \"archived\": (boolean) whether this Card is archived,
            \"draft\": (boolean) whether this Card is a draft,
        }
        ```
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/feed/details"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.NewsFeedCardsDetailsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def news_feed_cards_list(self, request: operations.NewsFeedCardsListRequest) -> operations.NewsFeedCardsListResponse:
        r"""News Feed Cards List
        This endpoint allows you to export a list of News Feed cards, each of which will include its name and Card API Identifier. The cards are returned in groups of 100 sorted by time of creation (oldest to newest by default).
        
        
        ## Response
        
        ```json
        Content-Type: application/json
        Authorization: Bearer YOUR-REST-API-KEY
        {
            \"message\": (required, string) the status of the export, returns 'success' when completed without errors,
            \"cards\" : [
                {
                    \"id\" : (string) Card API Identifier,
                    \"type\" : (string) type of the card - NewsItem (classic cards), CaptionedImage, Banner or DevPick (cross-promotional cards),
                    \"title\" : (string) title of the card,
                    \"tags\" : (array) tag names associated with the card
                },
                ...
            ]
        }
        ```
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/feed/list"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.NewsFeedCardsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    