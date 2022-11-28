

import requests
from typing import List,Optional
from sdk.models import shared, operations
from . import utils




SERVERS = [
	"https://gettyimages.com",
]


class SDK:
    

    _client: requests.Session
    _security_client: requests.Session
    _security: shared.Security
    _server_url: str = SERVERS[0]
    _language: str = "python"
    _sdk_version: str = "0.0.1"
    _gen_version: str = "internal"

    def __init__(self) -> None:
        self._client = requests.Session()
        self._security_client = requests.Session()
        


    def config_server_url(self, server_url: str, params: dict[str, str]):
        if params is not None:
            self._server_url = utils.replace_parameters(server_url, params)
        else:
            self._server_url = server_url

        
    

    def config_client(self, client: requests.Session):
        self._client = client
        
        if self._security is not None:
            self._security_client = utils.configure_security_client(self._client, self._security)
        
    

    def config_security(self, security: shared.Security):
        self._security = security
        self._security_client = utils.configure_security_client(self._client, security)
        
    
    
    
    def delete_v3_asset_changes_change_sets_change_set_id_(self, request: operations.DeleteV3AssetChangesChangeSetsChangeSetIDRequest) -> operations.DeleteV3AssetChangesChangeSetsChangeSetIDResponse:
        r"""Confirm asset change notifications.
        # Delete Asset Changes
        
        Confirm asset changes acknowledges receipt of asset changes (from the PUT asset changes endpoint).
        
        ##  Quickstart
        
        You'll need an API key and an access token to use this resource.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/asset-changes/change-sets/{change-set-id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteV3AssetChangesChangeSetsChangeSetIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def delete_v3_boards_board_id_(self, request: operations.DeleteV3BoardsBoardIDRequest) -> operations.DeleteV3BoardsBoardIDResponse:
        r"""Delete a board
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/boards/{board_id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteV3BoardsBoardIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 204:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def delete_v3_boards_board_id_assets(self, request: operations.DeleteV3BoardsBoardIDAssetsRequest) -> operations.DeleteV3BoardsBoardIDAssetsResponse:
        r"""Remove assets from a board
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/boards/{board_id}/assets", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteV3BoardsBoardIDAssetsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def delete_v3_boards_board_id_assets_asset_id_(self, request: operations.DeleteV3BoardsBoardIDAssetsAssetIDRequest) -> operations.DeleteV3BoardsBoardIDAssetsAssetIDResponse:
        r"""Remove an asset from a board
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/boards/{board_id}/assets/{asset_id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteV3BoardsBoardIDAssetsAssetIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def delete_v3_boards_board_id_comments_comment_id_(self, request: operations.DeleteV3BoardsBoardIDCommentsCommentIDRequest) -> operations.DeleteV3BoardsBoardIDCommentsCommentIDResponse:
        r"""Delete a comment from a board
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/boards/{board_id}/comments/{comment_id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteV3BoardsBoardIDCommentsCommentIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 204:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_v3_affiliates_search_images(self, request: operations.GetV3AffiliatesSearchImagesRequest) -> operations.GetV3AffiliatesSearchImagesResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v3/affiliates/search/images"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetV3AffiliatesSearchImagesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AffiliateImageSearchResponse])
                res.affiliate_image_search_response = out

        return res

    
    def get_v3_affiliates_search_videos(self, request: operations.GetV3AffiliatesSearchVideosRequest) -> operations.GetV3AffiliatesSearchVideosResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v3/affiliates/search/videos"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetV3AffiliatesSearchVideosResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AffiliateVideoSearchResponse])
                res.affiliate_video_search_response = out

        return res

    
    def get_v3_artists_images(self, request: operations.GetV3ArtistsImagesRequest) -> operations.GetV3ArtistsImagesResponse:
        r"""Search for images by a photographer
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v3/artists/images"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetV3ArtistsImagesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    def get_v3_artists_videos(self, request: operations.GetV3ArtistsVideosRequest) -> operations.GetV3ArtistsVideosResponse:
        r"""Search for videos by a photographer
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v3/artists/videos"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetV3ArtistsVideosResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    def get_v3_asset_changes_channels(self) -> operations.GetV3AssetChangesChannelsResponse:
        r"""Get a list of asset change notification channels.
        # Get Partner Channels
        
        Retrieves the channel data for the partner. This data can be used to populate the channel_id parameter in the Put Asset Changes query.
        
        ##  Quickstart
        
        You'll need an API key and an access token to use this resource.
        
        Partners who have a channel that has been removed should contact their sales representative to be set up again.
        
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v3/asset-changes/channels"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetV3AssetChangesChannelsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Channel]])
                res.channels = out
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_v3_boards(self, request: operations.GetV3BoardsRequest) -> operations.GetV3BoardsResponse:
        r"""Get all boards that the user participates in
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v3/boards"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetV3BoardsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BoardList])
                res.board_list = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    def get_v3_boards_board_id_(self, request: operations.GetV3BoardsBoardIDRequest) -> operations.GetV3BoardsBoardIDResponse:
        r"""Get assets and metadata for a specific board
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/boards/{board_id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetV3BoardsBoardIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BoardDetail])
                res.board_detail = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_v3_boards_board_id_comments(self, request: operations.GetV3BoardsBoardIDCommentsRequest) -> operations.GetV3BoardsBoardIDCommentsResponse:
        r"""Get comments from a board
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/boards/{board_id}/comments", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetV3BoardsBoardIDCommentsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CommentsList])
                res.comments_list = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_v3_collections(self, request: operations.GetV3CollectionsRequest) -> operations.GetV3CollectionsResponse:
        r"""Gets collections applicable for the customer.
        Use this endpoint to retrieve collections associated with your Getty Images account. To browse available collections see our [Image collections page]( http://www.gettyimages.com/creative-images/collections).
        
        You'll need an API key and access token to use this resource.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v3/collections"
        
        headers = utils.get_headers(request.headers)
        
        client = self._security_client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetV3CollectionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CollectionsList])
                res.collections_list = out
        elif r.status_code == 401:
            pass

        return res

    
    def get_v3_countries(self, request: operations.GetV3CountriesRequest) -> operations.GetV3CountriesResponse:
        r"""Gets countries codes and names.
        Returns a list of country objects that contains country name, two letter ISO abbreviation and three letter ISO abbreviation.
        
        You'll need an API key and access token to use this resource.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v3/countries"
        
        headers = utils.get_headers(request.headers)
        
        client = self._security_client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetV3CountriesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CountriesList])
                res.countries_list = out
        elif r.status_code == 401:
            pass

        return res

    
    def get_v3_customers_current(self, request: operations.GetV3CustomersCurrentRequest) -> operations.GetV3CustomersCurrentResponse:
        r"""Returns information about the current user.
        Returns the first, middle and last name of the authenticated user.
        
        You'll need an API key and access token to use this resource.
        	
        Please consult our [Authorization FAQ](http://developers.gettyimages.com/en/authorization-faq.html) for more information on authorization tokens.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v3/customers/current"
        
        headers = utils.get_headers(request.headers)
        
        client = self._security_client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetV3CustomersCurrentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CustomerInfoResponse])
                res.customer_info_response = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_v3_downloads(self, request: operations.GetV3DownloadsRequest) -> operations.GetV3DownloadsResponse:
        r"""Returns information about a customer's downloaded assets.
        Returns information about a customer's previously downloaded assets.
        
        You'll need an API key and access token to use this resource.
         
        	
        This endpoint requires being a Getty Images customer to limit your results to only assets that you have a license to use, 
        you need to also include an authorization token in the header of your request. 
        Please consult our [Authorization FAQ](http://developers.gettyimages.com/en/authorization-faq.html) for more information on authorization tokens.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v3/downloads"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetV3DownloadsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetDownloadsResponse])
                res.get_downloads_response = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_v3_events(self, request: operations.GetV3EventsRequest) -> operations.GetV3EventsResponse:
        r"""Get metadata for multiple events
        This endpoint returns the detailed event metadata for all specified events. Getty Images news, sports and entertainment photographers and
        videographers cover editorially relevant events occurring around the world.  All images or video clips produced in association with 
        an event, are assigned the same EventID. EventIDs are part of the meta-data returned in SearchForImages Results. Only content 
        produced under a Getty Images brand name (Getty Images News, Getty Images Sports, Getty Images Entertainment, Film Magic, Wire Image) 
        will be consistently assigned an EventID. The Event framework may also be used to group similar content, such as 
        \"Hats from the Royal Wedding\" or \"Odd-ballOffbeat images of the week\". 
        
        You'll need an API key and access token to use this resource.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v3/events"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetV3EventsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_v3_events_id_(self, request: operations.GetV3EventsIDRequest) -> operations.GetV3EventsIDResponse:
        r"""Get metadata for a single event
        This endpoint returns the detailed event metadata for a specified event. Getty Images news, sports and entertainment 
        photographers and videographers cover editorially relevant events occurring around the world.  
        All images or video clips produced in association with an event, are assigned the same EventID. 
        EventIDs are part of the meta-data returned in SearchForImages Results. Only content produced under a Getty Images 
        brand name (Getty Images News, Getty Images Sports, Getty Images Entertainment, Film Magic, Wire Image) will be 
        consistently assigned an EventID. The Event framework may also be used to group similar content, such as 
        \"Hats from the Royal Wedding\" or \"Odd-ballOffbeat images of the week\". 
        
        You'll need an API key and access token to use this resource.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/events/{id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetV3EventsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_v3_images(self, request: operations.GetV3ImagesRequest) -> operations.GetV3ImagesResponse:
        r"""Get metadata for multiple images by supplying multiple image ids
        This endpoint returns the detailed image metadata for all specified images.
        
        You'll need an API key and access token to use this resource.
        
        ## Working with Fields Sets
        
        Fields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:
        
        #### Summary Fields Set
        
        The **summary_set** query string parameter fields value represents a small batch of metadata fields that are often used to build 
        search response results. The following fields are provided for every image in your result set when you include **summary_set** in your request.
        
        ```
        {
            \"images\":
            [
                \"artist\",
                \"asset_family\",
                \"caption\",
                \"collection_code\",
                \"collection_id\",
                \"collection_name\",
                \"license_model\",
                \"max_dimensions\",
                \"title\"
            ]
        }
        ```
        
        #### Detail Fields Set
        
        The **detail_set** query string parameter fields value represents a large batch of metadata fields that are often used to build a 
        detailed view of images. The following fields are provided for every image in your result set when you include **detail_set** in your request.
        
        ```
        {
            \"images\":
            [
                \"allowed_use\",
                \"artist\", 
                \"artist_title\", 
                \"asset_family\",
                \"call_for_image\",
                \"caption\", 
                \"city\",
                \"collection_code\",
                \"collection_id\", 
                \"collection_name\",
                \"color_type\", 
                \"copyright\", 
                \"country\", 
                \"credit_line\", 
                \"date_created\", 
                \"date_submitted\",
                \"download_sizes\", 
                \"editorial_segments\",
                \"event_ids\",
                \"graphical_style\",
                \"license_model\",
                \"max_dimensions\",
                \"orientation\",
                \"product_types\",
                \"quality_rank\",
                \"referral_destinations\",
                \"state_province\", 
                \"title\"
            ]
        }
        ```
        
        #### Display Fields Set
        
        The **display_set** query string parameter fields value represents the fields that provide you with URLs for the low resolution
        files that are most frequently used to build a UI displaying search results. The following fields are provided for every image 
        in your result set when you include **display_set** in your request.
        
        ```
        {
            \"images\":
            [
                \"display_sizes\": 
                [
                    {
                        \"name\": \"comp\"
                    },
                    {
                        \"name\": \"preview\"
                    },
                    {
                        \"name\": \"thumb\"
                    }
                ]
            ]
        }
        ```
        
        ## Request Usage Considerations
        
        - Specifying the \"entity_details\" response field can have significant performance implications. The field should be used only when necessary.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v3/images"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetV3ImagesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ImagesDetailResults])
                res.images_detail_results = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_v3_images_id_(self, request: operations.GetV3ImagesIDRequest) -> operations.GetV3ImagesIDResponse:
        r"""Get metadata for a single image by supplying one image id
        This endpoint returns the detailed image metadata for a specified image.
        
        You'll need an API key and access token to use this resource. 
         
        ## Working with Fields Sets
        
        Fields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:
        
        #### Summary Fields Set
        
        The **summary_set** query string parameter fields value represents a small batch of metadata fields that
        are often used to build search response results. The following fields are provided for every image in your
        result set when you include **summary_set** in your request.
        
        ```
        {
            \"images\":
            [
                \"artist\",
                \"asset_family\",
                \"caption\",
                \"collection_code\",
                \"collection_id\",
                \"collection_name\",
                \"license_model\",
                \"max_dimensions\",
                \"title\"
            ]
        }
        ```
        
        #### Detail Fields Set
        
        The **detail_set** query string parameter fields value represents a large batch of metadata fields that are 
        often used to build a detailed view of images. The following fields are provided for every image in your 
        result set when you include **detail_set** in your request.
        
        ```
        {
            \"images\":
            [
                \"allowed_use\",
                \"artist\", 
                \"artist_title\", 
                \"asset_family\",
                \"call_for_image\",
                \"caption\", 
                \"city\",
                \"collection_code\",
                \"collection_id\", 
                \"collection_name\",
                \"color_type\", 
                \"copyright\", 
                \"country\", 
                \"credit_line\", 
                \"date_created\", 
                \"date_submitted\",
                \"download_sizes\", 
                \"editorial_segments\",
                \"event_ids\",
                \"graphical_style\",
                \"license_model\",
                \"max_dimensions\",
                \"orientation\",
                \"product_types\",
                \"quality_rank\",
                \"referral_destinations\",
                \"state_province\", 
                \"title\"
            ]
        }
        ```
        
        #### Display Fields Set
        
        The **display_set** query string parameter fields value represents the fields that provide you with URLs for the low
        resolution files that are most frequently used to build a UI displaying search results. The following fields are provided 
        for every image in your result set when you include **display_set** in your request.
        
        ```
        {
            \"images\":
            [
                \"display_sizes\": 
                [
                    {
                        \"name\": \"comp\"
                    },
                    {
                        \"name\": \"preview\"
                    },
                    {
                        \"name\": \"thumb\"
                    }
                ]
            ]
        }
        ```
        
        ## Request Usage Considerations
        
        - Specifying the \"entity_details\" response field can have significant performance implications. The field should be used only when necessary.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/images/{id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetV3ImagesIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ImagesDetailResults])
                res.images_detail_results = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_v3_images_id_downloadhistory(self, request: operations.GetV3ImagesIDDownloadhistoryRequest) -> operations.GetV3ImagesIDDownloadhistoryResponse:
        r"""Returns information about a customer's download history for a specific asset
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/images/{id}/downloadhistory", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetV3ImagesIDDownloadhistoryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AssetDownloadHistoryResults])
                res.asset_download_history_results = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_v3_images_id_same_series(self, request: operations.GetV3ImagesIDSameSeriesRequest) -> operations.GetV3ImagesIDSameSeriesResponse:
        r"""Retrieve creative images from the same series
        This endpoint will provide the list of images, if any exist, from the same series as the specified creative asset id. These images are typically from the same photo shoot. This functionality will not work for editorial assets.
        
        You'll need an API key and access token to use this resource.
        
        ## Working with Fields Sets
        
        Fields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:
        
        #### Summary Fields Set
        
        The **summary_set** query string parameter fields value represents a small batch of metadata fields that are often used to build
        search response results. The following fields are provided for every image in your result set when you include **summary_set** in your request.
        
        ```
        {
            \"images\":
            [
                \"asset_family\",
                \"caption\",
                \"collection_code\",
                \"collection_id\",
                \"collection_name\",
                \"display_sizes\": 
                [
                    {
                        \"name\": \"thumb\"
                    }
                ]
                \"license_model\",
                \"max_dimensions\",
                \"title\"
            ]
        }
        ```
        
        #### Detail Fields Set
        
        The **detail_set** query string parameter fields value represents a large batch of metadata fields that are often used to build a 
        detailed view of images. The following fields are provided for every image in your result set when you include **detail_set** in your request.
        
        ```
        {
            \"images\":
            [
                \"allowed_use\",
                \"artist\",
                \"asset_family\",
                \"call_for_image\",
                \"caption\",
                \"collection_code\",
                \"collection_id\",
                \"collection_name\",
                \"copyright\",
                \"date_created\",
                \"display_sizes\": 
                [
                    {
                        \"name\": \"comp\"
                    },
                    {
                        \"name\": \"preview\"
                    },
                    {
                        \"name\": \"thumb\"
                    }
                ],
                \"editorial_segments\",
                \"event_ids\",
                \"graphical_style\",
                \"license_model\",
                \"max_dimensions\",
                \"orientation\",
                \"product_types\",
                \"quality_rank\",
                \"referral_destinations\",
                \"title\"
            ]
        }
        ```
        
        #### Display Fields Set
        
        The **display_set** query string parameter fields value represents the fields that provide you with URLs for the low resolution files 
        that are most frequently used to build a UI displaying search results. The following fields are provided for every image in your result
        set when you include **display_set** in your request.
        
        ```
        {
            \"images\":
            [
                \"display_sizes\": 
                [
                    {
                        \"name\": \"comp\"
                    },
                    {
                        \"name\": \"preview\"
                    },
                    {
                        \"name\": \"thumb\"
                    }
                ]
            ]
        }
        ```
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/images/{id}/same-series", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetV3ImagesIDSameSeriesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ImageSearchItemSearchResults])
                res.image_search_item_search_results = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_v3_images_id_similar(self, request: operations.GetV3ImagesIDSimilarRequest) -> operations.GetV3ImagesIDSimilarResponse:
        r"""Retrieve similar images
        This endpoint will provide a list of images that are similar to the specified asset id.
        
        You'll need an API key and access token to use this resource.
        
        ## Working with Fields Sets
        
        Fields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:
        
        #### Summary Fields Set
        
        The **summary_set** query string parameter fields value represents a small batch of metadata fields that are often used to build
        search response results. The following fields are provided for every image in your result set when you include **summary_set** in your request.
        
        ```
        {
            \"images\":
            [
                \"asset_family\",
                \"caption\",
                \"collection_code\",
                \"collection_id\",
                \"collection_name\",
                \"display_sizes\": 
                [
                    {
                        \"name\": \"thumb\"
                    }
                ]
                \"license_model\",
                \"max_dimensions\",
                \"title\"
            ]
        }
        ```
        
        #### Detail Fields Set
        
        The **detail_set** query string parameter fields value represents a large batch of metadata fields that are often used to build a 
        detailed view of images. The following fields are provided for every image in your result set when you include **detail_set** in your request.
        
        ```
        {
            \"images\":
            [
                \"allowed_use\",
                \"artist\",
                \"asset_family\",
                \"call_for_image\",
                \"caption\",
                \"collection_code\",
                \"collection_id\",
                \"collection_name\",
                \"copyright\",
                \"date_created\",
                \"display_sizes\": 
                [
                    {
                        \"name\": \"comp\"
                    },
                    {
                        \"name\": \"preview\"
                    },
                    {
                        \"name\": \"thumb\"
                    }
                ],
                \"editorial_segments\",
                \"event_ids\",
                \"graphical_style\",
                \"license_model\",
                \"max_dimensions\",
                \"orientation\",
                \"product_types\",
                \"quality_rank\",
                \"referral_destinations\",
                \"title\"
            ]
        }
        ```
        
        #### Display Fields Set
        
        The **display_set** query string parameter fields value represents the fields that provide you with URLs for the low resolution files 
        that are most frequently used to build a UI displaying search results. The following fields are provided for every image in your result
        set when you include **display_set** in your request.
        
        ```
        {
            \"images\":
            [
                \"display_sizes\": 
                [
                    {
                        \"name\": \"comp\"
                    },
                    {
                        \"name\": \"preview\"
                    },
                    {
                        \"name\": \"thumb\"
                    }
                ]
            ]
        }
        ```
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/images/{id}/similar", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetV3ImagesIDSimilarResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ImageSearchItemSearchResults])
                res.image_search_item_search_results = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_v3_orders_id_(self, request: operations.GetV3OrdersIDRequest) -> operations.GetV3OrdersIDResponse:
        r"""Get order metadata
        This endpoint returns detailed order metadata for a specified order.
        Use of this endpoint requires configuration changes to your API key. 
        
        You'll need an API key and access token to use this resource.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/orders/{id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._security_client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetV3OrdersIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OrderDetail])
                res.order_detail = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_v3_products(self, request: operations.GetV3ProductsRequest) -> operations.GetV3ProductsResponse:
        r"""Get Products
        This endpoint returns all products available to the username used during authentication. As such, this endpoint requires the use of
        a fully authorized access_token. The product data can then be used as search filters, restricting results to images from a specific product.
        
        You'll need an API key and access token to use this resource.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v3/products"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetV3ProductsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProductsResult])
                res.products_result = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_v3_purchased_assets(self, request: operations.GetV3PurchasedAssetsRequest) -> operations.GetV3PurchasedAssetsResponse:
        r"""Get Previously Purchased Images and Video
        This endpoint returns a list of all assets purchased on gettyimages.com by the username used for authentication. 
        Use of this endpoint requires configuration changes to your API key. Please contact your sales representative
        to learn more.
        
        You'll need an API key and access token to use this resource.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v3/purchased-assets"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetV3PurchasedAssetsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PreviousAssetPurchases])
                res.previous_asset_purchases = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_v3_search_events(self, request: operations.GetV3SearchEventsRequest) -> operations.GetV3SearchEventsResponse:
        r"""Search for events
        Use this endpoint to search Getty Images news, sports and entertainment events. Getty Images photographers and videographers cover editorially relevant events occurring around the world.  All images or video clips produced in association with an event, are assigned the same EventID. EventIDs are part of the meta-data returned in Search Results. Only content produced under a Getty Images brand name (Getty Images News, Getty Images Sports, Getty Images Entertainment, Film Magic, Wire Image) will be consistently assigned an EventID. The Event framework may also be used to group similar content, such as \"Hats from the Royal Wedding\" or \"Odd-ballOffbeat images of the week\".   
        
        You'll need an API key and access token to use this resource.
        
        
        You can show different information in the response by specifying values on the \"fields\" parameter (see details below).
        You can search with only an API key, and that will give you search results that are equivalent to doing a search on the GettyImages.com site without being logged in (anonymous search).  If you are a Getty Images API customer and would like to ensure that your API searches return only assets that you have a license to use, you need to also include an authorization token in the header of your request.  Please consult our [Authorization FAQ](http://developers.gettyimages.com/en/authorization-faq.html) for more information on authorization tokens, and our [Authorization Workflows](https://github.com/gettyimages/gettyimages-api/blob/master/OAuth2Workflow.md) for code examples of getting a token.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v3/search/events"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetV3SearchEventsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EventsSearchResult])
                res.events_search_result = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_v3_search_images(self, request: operations.GetV3SearchImagesRequest) -> operations.GetV3SearchImagesResponse:
        r"""Search for both creative and editorial images
        Use this endpoint to search over a blend of our contemporary stock photos, illustrations, archival images, editorial photos, illustrations and archival images. Because this draws from such a large diversity of content, the results will not be as relevant as when the more specific Creative or Editorial endpoints are used. Additionally, the response time for this endpoint is slower compared to that for Creative and Editorial-specific endpoints. For these reasons, it is highly recommended that those endpoints are used instead of this blended endpoint.
        
        You'll need an API key and access token to use this resource.
        
        You can show different information in the response by specifying values on the \"fields\" parameter (see details below).
        You can search with only an API key, and that will give you search results that are equivalent to doing a search on the GettyImages.com site without being logged in (anonymous search).  If you are a Getty Images API customer and would like to ensure that your API searches return only assets that you have a license to use, you need to also include an authorization token in the header of your request.  Please consult our [Authorization FAQ](http://developers.gettyimages.com/en/authorization-faq.html) for more information on authorization tokens, and our [Authorization Workflows](https://github.com/gettyimages/gettyimages-api/blob/master/OAuth2Workflow.md) for code examples of getting a token.<br>
        To include your API token in the search request, add it to the headers as a Bearer token (example in curl):
        
        	-H \"Authorization: Bearer <your-token>\"
        
        ## Working with Fields Sets
        
        Fields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:
        
        #### Summary Fields Set
        
        The **summary_set** query string parameter fields value represents a small batch of metadata fields that are often used to build search response results. The following fields are provided for every image in your result set when you include **summary_set** in your request.
        
        ```
        {
            \"images\": 
            [
                \"asset_family\",
                \"caption\",
                \"collection_code\",
                \"collection_id\",
                \"collection_name\",
                \"display_sizes\": 
                [
                    {
                        \"name\": \"thumb\"
                    }
                ],
                \"license_model\",
                \"max_dimensions\",
                \"title\"
            ]
        }
        ```
        
        #### Detail Fields Set
        
        The **detail_set** query string parameter fields value represents a large batch of metadata fields that are often used to build a detailed view of images. 
        The following fields are provided for every image in your result set when you include **detail_set** in your request.
        
        ```
        {
            \"images\": 
            [
                \"allowed_use\",
                \"artist\",
                \"asset_family\",
                \"call_for_image\",
                \"caption\",
                \"collection_code\",
                \"collection_id\",
                \"collection_name\",
                \"copyright\",
                \"date_created\",
                \"display_sizes\": 
                [
                    {
                        \"name\": \"comp\"
                    },
                    {
                        \"name\": \"preview\"
                    },
                    {
                        \"name\": \"thumb\"
                    }
                ],
                \"editorial_segments\",
                \"event_ids\",
                \"graphical_style\",
                \"license_model\",
                \"max_dimensions\",
                \"orientation\",
                \"product_types\",
                \"quality_rank\",
                \"referral_destinations\",
                \"title\"
            ]
        ]
        ```
        
        #### Display Fields Set
        
        The **display_set** query string parameter fields value represents the fields that provide you with URLs for the low resolution files that are most 
        frequently used to build a UI displaying search results. The following fields are provided for every image in your result set when you include **display_set**
        in your request.
        
        ```
        {
            \"images\": 
            [
                \"display_sizes\": 
                [
                    {
                        \"name\": \"comp\"
                    },
                    {
                        \"name\": \"preview\"
                    },
                    {
                        \"name\": \"thumb\"
                    }
                ]
            ]
        }
        ```
        
        ## Request Usage Considerations
        
        - Specifying the \"entity_details\" response field can have significant performance implications. The field should be used only when necessary.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v3/search/images"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetV3SearchImagesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ImageSearchItemSearchResults])
                res.image_search_item_search_results = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_v3_search_images_creative(self, request: operations.GetV3SearchImagesCreativeRequest) -> operations.GetV3SearchImagesCreativeResponse:
        r"""Search for creative images only
        Use this endpoint to search our contemporary stock photos, illustrations and archival images.
        
        You'll need an API key and access token to use this resource.
         
        You can show different information in the response by specifying values on the \"fields\" parameter (see details below).
        You can search with only an API key, and that will give you search results that are equivalent to doing a search on the GettyImages.com site without being logged in (anonymous search).  If you are a Getty Images API customer and would like to ensure that your API searches return only assets that you have a license to use, you need to also include an authorization token in the header of your request.  Please consult our [Authorization FAQ](http://developers.gettyimages.com/en/authorization-faq.html) for more information on authorization tokens, and our [Authorization Workflows](https://github.com/gettyimages/gettyimages-api/blob/master/OAuth2Workflow.md) for code examples of getting a token.
        
        ## Working with Fields Sets
        
        Fields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:
        
        #### Summary Fields Set
        
        The **summary_set** query string parameter fields value represents a small batch of metadata fields that are often used to 
        build search response results. The following fields are provided for every image in your result set when you include **summary_set** in your request.
        
        ```
        {
            \"images\": 
            [
                \"asset_family\",
                \"caption\",
                \"collection_code\",
                \"collection_id\",
                \"collection_name\",
                \"display_sizes\": 
                [
                    {
                        \"name\": \"thumb\"
                    }
                ],
                \"license_model\",
                \"max_dimensions\",
                \"title\"
            ]
        }
        ```
        
        #### Detail Fields Set
        
        The **detail_set** query string parameter fields value represents a large batch of metadata fields that are often used to 
        build a detailed view of images. The following fields are provided for every image in your result set when you include **detail_set** in your request.
        
        ```
        {
            \"images\": 
            [
                \"allowed_use\",
                \"artist\",
                \"asset_family\",
                \"call_for_image\",
                \"caption\",
                \"collection_code\",
                \"collection_id\",
                \"collection_name\",
                \"copyright\",
                \"date_created\",
                \"display_sizes\": 
                [
                    {
                        \"name\": \"comp\"
                    },
                    {
                        \"name\": \"preview\"
                    },
                    {
                        \"name\": \"thumb\"
                    }
                ],
                \"editorial_segments\",
                \"event_ids\",
                \"graphical_style\",
                \"license_model\",
                \"max_dimensions\",
                \"orientation\",
                \"product_types\",
                \"quality_rank\",
                \"referral_destinations\",
                \"title\"
            ]
        ]
        ```
        
        #### Display Fields Set
        
        The **display_set** query string parameter fields value represents the fields that provide you with URLs for the low resolution
        files that are most frequently used to build a UI displaying search results. The following fields are provided for every image 
        in your result set when you include **display_set** in your request.
        
        ```Go
        {
            \"images\": 
            [
                \"display_sizes\": 
                [
                    {
                        \"name\": \"comp\"
                    },
                    {
                        \"name\": \"preview\"
                    },
                    {
                        \"name\": \"thumb\"
                    }
                ]
            ]
        }
        ```
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v3/search/images/creative"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetV3SearchImagesCreativeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CreativeImageSearchResults])
                res.creative_image_search_results = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_v3_search_images_creative_by_image(self, request: operations.GetV3SearchImagesCreativeByImageRequest) -> operations.GetV3SearchImagesCreativeByImageResponse:
        r"""Search for creative images based on url
        Allows searching for similar creative images by passing the URL to an existing image. All responses will have the exclude_nudity filter automatically applied.
        
        Before calling the search by image endpoint, an image must be uploaded to a specific AWS S3 bucket. The bucket name is `search-by-image.s3.amazonaws.com`.
        For example, using cURL:
        ```sh
        curl -i -X PUT https://search-by-image.s3.amazonaws.com/my-test-image.jpg -H \"Content-Type: image/jpeg\" --data-binary \"@testimage.jpg\"
        ```
        
        Uploads can be overwritten if the names are the same, so using a prefix like the API Key, application name or company name is recommended. Uploads will expire from the bucket after 24 hours.
        
        Once the image has been uploaded, use the full URL in the `image_url` parameter, e.g. `image_url=https://search-by-image.s3.amazonaws.com/my-test-image.jpg`.
        
        <!-- TODO/HACK from https://app.clickup.com/t/8mfmv3 - Uncomment this if image_fingerprint ever comes back to be useful -->
        <!-- Subsequent searches for the same image can be executed using the `image_fingerprint` that is returned by the initial search. -->
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v3/search/images/creative/by-image"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetV3SearchImagesCreativeByImageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SearchByImageResourceResults])
                res.search_by_image_resource_results = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_v3_search_images_editorial(self, request: operations.GetV3SearchImagesEditorialRequest) -> operations.GetV3SearchImagesEditorialResponse:
        r"""Search for editorial images only
        Use this endpoint to search our editorial stock photos, illustrations and archival images.  Editorial images represent newsworthy events or illustrate matters of general interest, such as news, sport and entertainment and are generally intended for editorial use.
        
        You'll need an API key and access token to use this resource.
        
        You can show different information in the response by specifying values on the \"fields\" parameter (see details below).
        You can search with only an API key, and that will give you search results that are equivalent to doing a search on the GettyImages.com site without being logged in (anonymous search).  If you are a Getty Images API customer and would like to ensure that your API searches return only assets that you have a license to use, you need to also include an authorization token in the header of your request.  Please consult our [Authorization FAQ](http://developers.gettyimages.com/en/authorization-faq.html) for more information on authorization tokens, and our [Authorization Workflows](https://github.com/gettyimages/gettyimages-api/blob/master/OAuth2Workflow.md) for code examples of getting a token.
        To include your API token in the search request, add it to the headers as a Bearer token (example in curl):
        
        	-H \"Authorization: Bearer <your-token>\"
        
        ## Working with Fields Sets
        
        Fields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:
        
        #### Summary Fields Set
        
        The **summary_set** query string parameter fields value represents a small batch of metadata fields that are often used to build search response results. The following fields are provided for every image in your result set when you include **summary_set** in your request.
        
        ```
        {
            \"images\": 
            [
                \"asset_family\",
                \"caption\",
                \"collection_code\",
                \"collection_id\",
                \"collection_name\",
                \"display_sizes\": 
                [
                    {
                        \"name\": \"thumb\"
                    }
                ],
                \"license_model\",
                \"max_dimensions\",
                \"title\"
            ]
        }
        ```
        
        #### Detail Fields Set
        
        The **detail_set** query string parameter fields value represents a large batch of metadata fields that are often used to build a detailed view of images. The following fields are provided for every image in your result set when you include **detail_set** in your request.
        
        ```
        {
            \"images\": 
            [
                \"allowed_use\",
                \"artist\",
                \"asset_family\",
                \"call_for_image\",
                \"caption\",
                \"collection_code\",
                \"collection_id\",
                \"collection_name\",
                \"copyright\",
                \"date_created\",
                \"display_sizes\": 
                [
                    {
                        \"name\": \"comp\"
                    },
                    {
                        \"name\": \"preview\"
                    },
                    {
                        \"name\": \"thumb\"
                    }
                ],
                \"editorial_segments\",
                \"event_ids\",
                \"graphical_style\",
                \"license_model\",
                \"max_dimensions\",
                \"orientation\",
                \"product_types\",
                \"quality_rank\",
                \"referral_destinations\",
                \"title\"
            ]
        ]
        ```
        
        #### Display Fields Set
        
        The **display_set** query string parameter fields value represents the fields that provide you with URLs for the low resolution files that are most frequently used to build a UI displaying search results. The following fields are provided for every image in your result set when you include **display_set** in your request.
        
        ```
        {
            \"images\": 
            [
                \"display_sizes\": 
                [
                    {
                        \"name\": \"comp\"
                    },
                    {
                        \"name\": \"preview\"
                    },
                    {
                        \"name\": \"thumb\"
                    }
                ]
            ]
        }
        ```
        
        ## Request Usage Considerations
        
        - Specifying the \"entity_details\" response field can have significant performance implications. The field should be used only when necessary.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v3/search/images/editorial"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetV3SearchImagesEditorialResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EditorialImageSearchResults])
                res.editorial_image_search_results = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_v3_search_videos_creative(self, request: operations.GetV3SearchVideosCreativeRequest) -> operations.GetV3SearchVideosCreativeResponse:
        r"""Search for creative videos
        Use this endpoint to search premium stock video, from archival film to contemporary 4K and HD footage.
        
        You'll need an API key and access token to use this resource.
        
        You can show different information in the response by specifying values on the \"fields\" parameter (see details below).
        You can search with only an API key, and that will give you search results that are equivalent to doing a search on the GettyImages.com site without
        being logged in (anonymous search).  If you are a Getty Images API customer and would like to ensure that your API searches return only 
        assets that you have a license to use, you need to also include an authorization token in the header of your request.
        Please consult our [Authorization FAQ](http://developers.gettyimages.com/en/authorization-faq.html) for more information on authorization tokens.
        
        ## Working with Fields Sets
        
        Fields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:
        
        #### Summary Fields Set
        
        The **summary_set** query string parameter fields value represents a small batch of metadata fields that are often used to build search
        response results. The following fields are provided for every video in your result set when you include **summary_set** in your request.
        
        ```
        {
            \"videos\": 
            [
                \"asset_family\", 
                \"caption\",
                \"collection_code\",
                \"collection_name\",
                \"display_sizes\":
                [
                    {
                        \"name\": \"comp\"
                    },
                    {
                        \"name\": \"preview\"
                    },
                    {
                        \"name\": \"thumb\"
                    }
                ],
                \"license_model\",
                \"title\"
            ]
        }
        ```
        
        #### Detail Fields Set
        
        The **detail_set** query string parameter fields value represents a large batch of metadata fields that are often used to build a 
        detailed view of videos. The following fields are provided for every video in your result set when you include **detail_set** in your request.
        
        ```
        {
            \"videos\": 
            [
                \"allowed_use\",
                \"artist\",
                \"asset_family\", 
        		\"call_for_image\",
                \"caption\", 
                \"clip_length\",
                \"collection_code\",
                \"collection_id\",
                \"collection_name\", 
                \"color_type\",
                \"copyright\",
                \"date_created\",
                \"display_sizes\":
                [
                    {
                        \"name\": \"comp\"
                    },
                    {
                        \"name\": \"preview\"
                    },
                    {
                        \"name\": \"thumb\"
                    }
                ],
                \"era\",
                \"license_model\",
                \"mastered_to\",
                \"originally_shot_on\",
                \"product_types\",
                \"quality_rank\",
                \"shot_speed\",
                \"source\",
                \"title\"
            ]
        }
        ```
        
        #### Display Fields Set
        
        The **display_set** query string parameter fields value represents the fields that provide you with URLs for the low resolution files 
        that are most frequently used to build a UI displaying search results. The following fields are provided for every video in your result 
        set when you include **display_set** in your request.
        
        ```
        {
            \"videos\":
            [
                \"display_sizes\":
                [
                    {
                        \"name\": \"comp\"
                    },
                    {
                        \"name\": \"preview\"
                    },
                    {
                        \"name\": \"thumb\"
                    }
                ]
            ]
        }
        ```
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v3/search/videos/creative"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetV3SearchVideosCreativeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CreativeVideoSearchResults])
                res.creative_video_search_results = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_v3_search_videos_creative_by_image(self, request: operations.GetV3SearchVideosCreativeByImageRequest) -> operations.GetV3SearchVideosCreativeByImageResponse:
        r"""Search for creative videos based on url
        Search for **similar creative videos** by passing an `asset_id` to an asset in our catalog OR `image_url` to any image or a frame grab from a video. All responses will have the exclude_nudity filter automatically applied.
        
        ## Searching by URL
        
        When searching by `image_url`, an image or frame grab in JPEG format must be uploaded to a specific AWS S3 bucket. The bucket name is `search-by-image.s3.amazonaws.com`.
        Example using cURL:
        ```sh
        curl -i -X PUT https://search-by-image.s3.amazonaws.com/my-test-image.jpg -H \"Content-Type: image/jpeg\" --data-binary \"@testimage.jpg\"
        ```
        
        Uploads will be overwritten if the names are the same, so using a prefix like the API Key, application name or company name is recommended. Uploads will expire from the bucket after 24 hours.
        
        Once the JPEG has been uploaded, use the full URL in the `image_url` parameter, e.g. `image_url=https://search-by-image.s3.amazonaws.com/my-test-image.jpg`.
        
        ## Searching by asset id
        
        When searching by `asset_id`, any image or video asset id in the Getty/iStock catalog can be used. 
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v3/search/videos/creative/by-image"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetV3SearchVideosCreativeByImageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CreativeVideoSearchResults])
                res.creative_video_search_results = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_v3_search_videos_editorial(self, request: operations.GetV3SearchVideosEditorialRequest) -> operations.GetV3SearchVideosEditorialResponse:
        r"""Search for editorial videos
        Use this endpoint to search current and archival video clips of celebrities, newsmakers, and events.
        
        You'll need an API key and access token to use this resource.
        
        You can show different information in the response by specifying values on the \"fields\" parameter (see details below).
        You can search with only an API key, and that will give you search results that are equivalent to doing a search on the GettyImages.com site without being logged in (anonymous search).  If you are a Getty Images API customer and would like to ensure that your API searches return only assets that you have a license to use, you need to also include an authorization token in the header of your request.  Please consult our [Authorization FAQ](http://developers.gettyimages.com/en/authorization-faq.html) for more information on authorization tokens, and our [Authorization Workflows](https://github.com/gettyimages/gettyimages-api/blob/master/OAuth2Workflow.md) for code examples of getting a token.
        
        ## Working with Fields Sets
        
        Fields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:
        
        #### Summary Fields Set
        
        The **summary_set** query string parameter fields value represents a small batch of metadata fields that are often used to build search response results. The following fields are provided for every video in your result set when you include **summary_set** in your request.
        
        ```
        {
            \"videos\": 
            [
                \"asset_family\", 
                \"caption\",
                \"collection_code\",
                \"collection_name\",
                \"display_sizes\":
                [
                    {
                        \"name\": \"comp\"
                    },
                    {
                        \"name\": \"preview\"
                    },
                    {
                        \"name\": \"thumb\"
                    }
                ],
                \"license_model\",
                \"title\"
            ]
        }
        ```
        
        #### Detail Fields Set
        
        The **detail_set** query string parameter fields value represents a large batch of metadata fields that are often used to build a detailed view of videos. The following fields are provided for every video in your result set when you include **detail_set** in your request.
        
        ```
        {
            \"videos\": 
            [
                \"allowed_use\",
                \"artist\",
                \"asset_family\", 
        		\"call_for_image\",
                \"caption\", 
                \"clip_length\",
                \"collection_code\",
                \"collection_id\",
                \"collection_name\", 
                \"color_type\",
                \"copyright\",
                \"date_created\",
                \"display_sizes\":
                [
                    {
                        \"name\": \"comp\"
                    },
                    {
                        \"name\": \"preview\"
                    },
                    {
                        \"name\": \"thumb\"
                    }
                ],
                \"era\",
                \"event_ids\",
                \"license_model\",
                \"mastered_to\",
                \"originally_shot_on\",
                \"product_types\",
                \"quality_rank\",
                \"shot_speed\",
                \"source\",
                \"title\"
            ]
        }
        ```
        
        #### Display Fields Set
        
        The **display_set** query string parameter fields value represents the fields that provide you with URLs for the low resolution files that are most frequently used to build a UI displaying search results. The following fields are provided for every video in your result set when you include **display_set** in your request.
        
        ```
        {
            \"videos\":
            [
                \"display_sizes\":
                [
                    {
                        \"name\": \"comp\"
                    },
                    {
                        \"name\": \"preview\"
                    },
                    {
                        \"name\": \"thumb\"
                    }
                ]
            ]
        }
        ```
        
        ## Request Usage Considerations
        
        - Specifying the \"entity_details\" response field can have significant performance implications. The field should be used only when necessary.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v3/search/videos/editorial"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetV3SearchVideosEditorialResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EditorialVideoSearchResults])
                res.editorial_video_search_results = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_v3_videos(self, request: operations.GetV3VideosRequest) -> operations.GetV3VideosResponse:
        r"""Get metadata for multiple videos by supplying multiple video ids
        Use this endpoint to return detailed video metadata for all the specified video ids.
        
        You'll need an API key and access token to use this resource.
        
        You can show different information in the response by specifying values on the \"fields\" parameter (see details below).
        You can search with only an API key, and that will give you search results that are equivalent to doing a search on the GettyImages.com site without being logged in (anonymous search).  If you are a Getty Images API customer and would like to ensure that your API searches return only assets that you have a license to use, you need to also include an authorization token in the header of your request.  Please consult our [Authorization FAQ](http://developers.gettyimages.com/en/authorization-faq.html) for more information on authorization tokens, and our [Authorization Workflows](https://github.com/gettyimages/gettyimages-api/blob/master/OAuth2Workflow.md) for code examples of getting a token.
        
        ## Working with Fields Sets
        
        Fields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:
        
        #### Summary Fields Set
        
        The **summary_set** query string parameter fields value represents a small batch of metadata fields that are often used to build search response results. The following fields are provided for every video in your result set when you include **summary_set** in your request.
        
        ```
        {
            \"videos\": 
            [
                \"asset_family\",
                \"caption\",
                \"collection_code\",
                \"collection_name\",
                \"display_sizes\":
                [
                    {
                        \"name\": \"comp\"
                    },
                    {
                        \"name\": \"preview\"
                    },
                    {
                        \"name\": \"thumb\"
                    }
                ],
                \"license_model\",
                \"title\"
            ]
        }
        ```
        
        #### Detail Fields Set
        
        The **detail_set** query string parameter fields value represents a large batch of metadata fields that are often used to build a detailed view of videos. The following fields are provided for every video in your result set when you include **detail_set** in your request.
        
        ```
        {
            \"videos\": 
            [
                \"allowed_use\",
                \"artist\",
                \"asset_family\",
        		\"call_for_image\",
                \"caption\",
                \"clip_length\",
                \"collection_code\",
                \"collection_id\",
                \"collection_name\",
                \"color_type\",
                \"copyright\",
                \"date_created\",
                \"display_sizes\":
                [
                    {
                        \"name\": \"comp\"
                    },
                    {
                        \"name\": \"preview\"
                    },
                    {
                        \"name\": \"thumb\"
                    }
                ],
                \"download_sizes\",
                \"era\",
                \"event_ids\",
                \"license_model\",
                \"mastered_to\",
                \"originally_shot_on\",
                \"product_types\",
                \"quality_rank\",
                \"shot_speed\",
                \"source\",
                \"title\"
            ]
        }
        ```
        
        #### Display Fields Set
        
        The **display_set** query string parameter fields value represents the fields that provide you with URLs for the low resolution files that are most frequently used to build a UI displaying search results. The following fields are provided for every video in your result set when you include **display_set** in your request.
        
        ```
        {
            \"videos\":
            [
                \"display_sizes\": 
                [
                    {
                        \"name\": \"comp\"
                    },
                    {
                        \"name\": \"preview\"
                    },
                    {
                        \"name\": \"thumb\"
                    }
                ]
            ]
        }
        ```
        
        ## Request Usage Considerations
        
        - Specifying the \"entity_details\" response field can have significant performance implications. The field should be used only when necessary.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v3/videos"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetV3VideosResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_v3_videos_id_(self, request: operations.GetV3VideosIDRequest) -> operations.GetV3VideosIDResponse:
        r"""Get metadata for a single video by supplying one video id
        Use this endpoint to return detailed video metadata for the specified video id.
        
        You'll need an API key and access token to use this resource.
        
        You can show different information in the response by specifying values on the \"fields\" parameter (see details below).
        You can search with only an API key, and that will give you search results that are equivalent to doing a search on the GettyImages.com site without being logged in (anonymous search).  If you are a Getty Images API customer and would like to ensure that your API searches return only assets that you have a license to use, you need to also include an authorization token in the header of your request.  Please consult our [Authorization FAQ](http://developers.gettyimages.com/en/authorization-faq.html) for more information on authorization tokens, and our [Authorization Workflows](https://github.com/gettyimages/gettyimages-api/blob/master/OAuth2Workflow.md) for code examples of getting a token.
        
        ## Working with Fields Sets
        
        Fields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:
        
        #### Summary Fields Set
        
        The **summary_set** query string parameter fields value represents a small batch of metadata fields that are often used to build search response results. The following fields are provided for every video in your result set when you include **summary_set** in your request.
        
        ```
        {
            \"videos\":
            [
                \"asset_family\",
                \"caption\",
                \"collection_code\",
                \"collection_name\",
                \"display_sizes\":
                [
                    {
                        \"name\": \"comp\"
                    },
                    {
                        \"name\": \"preview\"
                    },
                    {
                        \"name\": \"thumb\"
                    }
                ],
                \"license_model\",
                \"title\"
            ]
        }
        ```
        
        #### Detail Fields Set
        
        The **detail_set** query string parameter fields value represents a large batch of metadata fields that are often used to build a detailed view of videos. The following fields are provided for every video in your result set when you include **detail_set** in your request.
        
        ```
        {
            \"videos\":
            [
                \"allowed_use\",
                \"artist\",
                \"asset_family\",
        		\"call_for_image\",
                \"caption\",
                \"clip_length\",
                \"collection_code\",
                \"collection_id\",
                \"collection_name\",
                \"color_type\",
                \"copyright\",
                \"date_created\",
                \"display_sizes\":
                [
                    {
                        \"name\": \"comp\"
                    },
                    {
                        \"name\": \"preview\"
                    },
                    {
                        \"name\": \"thumb\"
                    }
                ],
                \"download_sizes\",
                \"era\",
                \"event_ids\",
                \"license_model\",
                \"mastered_to\",
                \"originally_shot_on\",
                \"product_types\",
                \"quality_rank\",
                \"shot_speed\",
                \"source\",
                \"title\"
            ]
        }
        ```
        
        #### Display Fields Set
        
        The **display_set** query string parameter fields value represents the fields that provide you with URLs for the low resolution files that are most frequently used to build a UI displaying search results. The following fields are provided for every video in your result set when you include **display_set** in your request.
        
        ```
        {
            \"videos\":
            [
                \"display_sizes\":
                [
                    {
                        \"name\": \"comp\"
                    },
                    {
                        \"name\": \"preview\"
                    },
                    {
                        \"name\": \"thumb\"
                    }
                ]
            ]
        }
        ```
        
        ## Request Usage Considerations
        
        - Specifying the \"entity_details\" response field can have significant performance implications. The field should be used only when necessary.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/videos/{id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetV3VideosIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_v3_videos_id_downloadhistory(self, request: operations.GetV3VideosIDDownloadhistoryRequest) -> operations.GetV3VideosIDDownloadhistoryResponse:
        r"""Returns information about a customer's download history for a specific asset
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/videos/{id}/downloadhistory", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetV3VideosIDDownloadhistoryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AssetDownloadHistoryResults])
                res.asset_download_history_results = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_v3_videos_id_same_series(self, request: operations.GetV3VideosIDSameSeriesRequest) -> operations.GetV3VideosIDSameSeriesResponse:
        r"""Retrieve creative videos from the same series
        This endpoint will provide the list of videos, if any exist, from the same series as the specified creative asset id. These images are typically from the same photo shoot. This functionality will not work for editorial assets.
        
        You'll need an API key and access token to use this resource.
        
        ## Working with Fields Sets
        
        Fields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:
        
        #### Summary Fields Set
        
        The **summary_set** query string parameter fields value represents a small batch of metadata fields that are often used to build search response results. The following fields are provided for every video in your result set when you include **summary_set** in your request.
        
        ```
        {
            \"videos\":
            [
                \"asset_family\",
                \"caption\",
                \"collection_code\",
                \"collection_name\",
                \"display_sizes\":
                [
                    {
                        \"name\": \"comp\"
                    },
                    {
                        \"name\": \"preview\"
                    },
                    {
                        \"name\": \"thumb\"
                    }
                ],
                \"license_model\",
                \"title\"
            ]
        }
        ```
        
        #### Detail Fields Set
        
        The **detail_set** query string parameter fields value represents a large batch of metadata fields that are often used to build a detailed view of videos. The following fields are provided for every video in your result set when you include **detail_set** in your request.
        
        ```
        {
            \"videos\":
            [
                \"allowed_use\",
                \"artist\",
                \"asset_family\",
        		\"call_for_image\",
                \"caption\",
                \"clip_length\",
                \"collection_code\",
                \"collection_id\",
                \"collection_name\",
                \"color_type\",
                \"copyright\",
                \"date_created\",
                \"display_sizes\":
                [
                    {
                        \"name\": \"comp\"
                    },
                    {
                        \"name\": \"preview\"
                    },
                    {
                        \"name\": \"thumb\"
                    }
                ],
                \"download_sizes\",
                \"era\",
                \"license_model\",
                \"mastered_to\",
                \"originally_shot_on\",
                \"product_types\",
                \"quality_rank\",
                \"shot_speed\",
                \"source\",
                \"title\"
            ]
        }
        ```
        
        #### Display Fields Set
        
        The **display_set** query string parameter fields value represents the fields that provide you with URLs for the low resolution files that are most frequently used to build a UI displaying search results. The following fields are provided for every video in your result set when you include **display_set** in your request.
        
        ```
        {
            \"videos\":
            [
                \"display_sizes\":
                [
                    {
                        \"name\": \"comp\"
                    },
                    {
                        \"name\": \"preview\"
                    },
                    {
                        \"name\": \"thumb\"
                    }
                ]
            ]
        }
        ```
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/videos/{id}/same-series", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetV3VideosIDSameSeriesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_v3_videos_id_similar(self, request: operations.GetV3VideosIDSimilarRequest) -> operations.GetV3VideosIDSimilarResponse:
        r"""Retrieve similar videos
        This endpoint will provide a list of videos that are similar to the specified asset id.
        
        You'll need an API key and access token to use this resource.
        
        ## Working with Fields Sets
        
        Fields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:
        
        #### Summary Fields Set
        
        The **summary_set** query string parameter fields value represents a small batch of metadata fields that are often used to build search response results. The following fields are provided for every video in your result set when you include **summary_set** in your request.
        
        ```
        {
            \"videos\": 
            [
                \"asset_family\",
                \"caption\",
                \"collection_code\",
                \"collection_name\",
                \"display_sizes\":
                [
                    {
                        \"name\": \"comp\"
                    },
                    {
                        \"name\": \"preview\"
                    },
                    {
                        \"name\": \"thumb\"
                    }
                ],
                \"license_model\",
                \"title\"
            ]
        }
        ```
        
        #### Detail Fields Set
        
        The **detail_set** query string parameter fields value represents a large batch of metadata fields that are often used to build a detailed view of videos. The following fields are provided for every video in your result set when you include **detail_set** in your request.
        
        ```
        {
            \"videos\": 
            [
                \"allowed_use\",
                \"artist\",
                \"asset_family\",
        		\"call_for_image\",
                \"caption\",
                \"clip_length\",
                \"collection_code\",
                \"collection_id\",
                \"collection_name\",
                \"color_type\",
                \"copyright\",
                \"date_created\",
                \"display_sizes\":
                [
                    {
                        \"name\": \"comp\"
                    },
                    {
                        \"name\": \"preview\"
                    },
                    {
                        \"name\": \"thumb\"
                    }
                ],
                \"download_sizes\",
                \"era\",
                \"event_ids\",
                \"license_model\",
                \"mastered_to\",
                \"originally_shot_on\",
                \"product_types\",
                \"quality_rank\",
                \"shot_speed\",
                \"source\",
                \"title\"
            ]
        }
        ```
        
        #### Display Fields Set
        
        The **display_set** query string parameter fields value represents the fields that provide you with URLs for the low resolution files that are most frequently used to build a UI displaying search results. The following fields are provided for every video in your result set when you include **display_set** in your request.
        
        ```
        {
            \"videos\":
            [
                \"display_sizes\": 
                [
                    {
                        \"name\": \"comp\"
                    },
                    {
                        \"name\": \"preview\"
                    },
                    {
                        \"name\": \"thumb\"
                    }
                ]
            ]
        }
        ```
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/videos/{id}/similar", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetV3VideosIDSimilarResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def post_v3_asset_licensing_asset_id_(self, request: operations.PostV3AssetLicensingAssetIDRequest) -> operations.PostV3AssetLicensingAssetIDResponse:
        r"""Endpoint for acquiring extended licenses with iStock credits for an asset.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/asset-licensing/{assetId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostV3AssetLicensingAssetIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AssetLicensingResponse])
                res.asset_licensing_response = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def post_v3_boards(self, request: operations.PostV3BoardsRequest) -> operations.PostV3BoardsResponse:
        r"""Create a new board
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v3/boards"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostV3BoardsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BoardCreated])
                res.board_created = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    def post_v3_boards_board_id_comments(self, request: operations.PostV3BoardsBoardIDCommentsRequest) -> operations.PostV3BoardsBoardIDCommentsResponse:
        r"""Add a comment to a board
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/boards/{board_id}/comments", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostV3BoardsBoardIDCommentsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CommentCreated])
                res.comment_created = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def post_v3_downloads_images_id_(self, request: operations.PostV3DownloadsImagesIDRequest) -> operations.PostV3DownloadsImagesIDResponse:
        r"""Download an image
        Use this endpoint to generate download URLs and related data for images you are authorized to download.
        
        Most product offerings have enforced periodic download limits such as monthly, weekly, and daily. When this operation executes, the count of allowed downloads is decremented by one for the product offering. Once the download limit is reached for a given product offering, no further downloads may be requested for that product offering until the next download period.
        
        The download limit for a given download period is covered in your product agreement established with Getty Images.
        
        You'll need an API key and a [Resource Owner Grant or Implicit Grant](http://developers.gettyimages.com/en/authorization-faq.html) access token to use this resource.
        
        ## Auto Downloads
        The `auto_download` request query parameter specifies whether to automatically download the image.
        
        If the `auto_download` request query parameter is set to _true_, the API will return an HTTP status code 303 *See Other*. Your client code will need to process this response and redirect to the URI specified in the *Location* header to enable you to automatically download the file. The redirection workflow follows the [HTTP 1.1 protocol](https://tools.ietf.org/html/rfc7231#section-6.4.4).
        
        Client Request:
        
        ```
        https://api.gettyimages.com/v3/downloads/images/[asset_id]?auto_download=true
        ```
        
        Server Response:
        
        ```
        HTTP/1.1 303 See Other
        Location: https://delivery.gettyimages.com/...
        ```
        
        If the `auto_download` request query parameter is set to false, the API will return a HTTP status code 200, along with the URI in the response body which can be used to download the image. 
        
        Client Request:
        
        ```
        https://api.gettyimages.com/v3/downloads/images/[asset_id]?auto_download=false
        ```
        
        Server Response:
        
        ```
        HTTP/1.1 200 OK
        {
        	\"uri\": \"https://delivery.gettyimages.com/...\"
        }
        ```
        ## Downloading Via the Returned URI
        
        The URI returned by this call should be considered opaque and the format could change at any time.
        In order to get the filename, length or file type, the response headers must be inspected. An example
        response follows:
        
        ```
        content-length: 33959979
        content-type: image/jpeg
        content-disposition: attachment; filename=GettyImages-1167612765.jpg
        ```
        
        The `content-disposition` header must be parsed to get a usable filename.
        
        ## Download URI expiration
        
        Download URIs are _**only valid for 24 hours**_, starting from the moment they are returned from this call.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/downloads/images/{id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostV3DownloadsImagesIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 303:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def post_v3_downloads_videos_id_(self, request: operations.PostV3DownloadsVideosIDRequest) -> operations.PostV3DownloadsVideosIDResponse:
        r"""Download a video
        Use this endpoint to generate download URLs and related data for videos you are authorized to download.
        
        Most product offerings have enforced periodic download limits such as monthly, weekly, and daily. When this operation executes, the count of allowed downloads is decremented by one for the product offering. Once the download limit is reached for a given product offering, no further downloads may be requested for that product offering until the next download period.
        
        The download limit for a given download period is covered in your product agreement established with Getty Images.
        
        You'll need an API key and a [Resource Owner Grant or Implicit Grant](http://developers.gettyimages.com/en/authorization-faq.html) access token to use this resource.
        
        ## Auto Downloads
        The `auto_download` request query parameter specifies whether to automatically download the video.
        
        If the `auto_download` request query parameter is set to _true_, the API will return an HTTP status code 303 *See Other*. Your client code will need to process this response and redirect to the URI specified in the *Location* header to enable you to automatically download the file. The redirection workflow follows the [HTTP 1.1 protocol](https://tools.ietf.org/html/rfc7231#section-6.4.4).
        
        Client Request:
        
        ```
        https://api.gettyimages.com/v3/downloads/videos/[asset_id]?auto_download=true
        ```
        
        Server Response:
        
        ```
        HTTP/1.1 303 See Other
        Location: https://delivery.gettyimages.com/...
        ```
        
        If the `auto_download` request query parameter is set to false, the API will return a HTTP status code 200, along with the URI in the response body which can be used to download the video. 
        
        Client Request:
        
        ```
        https://api.gettyimages.com/v3/downloads/videos/[asset_id]?auto_download=false
        ```
        
        Server Response:
        
        ```
        HTTP/1.1 200 OK
        {
        	\"uri\": \"https://delivery.gettyimages.com/...\"
        }
        ```
        
        ## Downloading Via the Returned URI
        
        The URI returned by this call should be considered opaque and the format could change at any time.
        In order to get the filename, length or file type, the response headers must be inspected. An example
        response follows:
        
        ```
        content-length: 283925783
        content-type: video/quicktime
        content-disposition: attachment; filename=GettyImages-690773579.mov
        ```
        
        The `content-disposition` header must be parsed to get a usable filename.
        
        ## Download URI expiration
        
        Download URIs are _**only valid for 24 hours**_, starting from the moment they are returned from this call.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/downloads/videos/{id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostV3DownloadsVideosIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 303:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def put_v3_asset_changes_change_sets(self, request: operations.PutV3AssetChangesChangeSetsRequest) -> operations.PutV3AssetChangesChangeSetsResponse:
        r"""Get asset change notifications.
        # Asset Changes
        
        Get notifications about new, updated or deleted assets.
        
        ##  Quickstart
        
        You'll need an API key and an access token to use this resource. 
        
        Notifications older than 60 days will be removed from partner channels.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v3/asset-changes/change-sets"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("PUT", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PutV3AssetChangesChangeSetsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AssetChanges])
                res.asset_changes = out
        elif r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AssetChanges])
                res.asset_changes = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def put_v3_boards_board_id_(self, request: operations.PutV3BoardsBoardIDRequest) -> operations.PutV3BoardsBoardIDResponse:
        r"""Update a board
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/boards/{board_id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutV3BoardsBoardIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 204:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def put_v3_boards_board_id_assets(self, request: operations.PutV3BoardsBoardIDAssetsRequest) -> operations.PutV3BoardsBoardIDAssetsResponse:
        r"""Add assets to a board
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/boards/{board_id}/assets", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutV3BoardsBoardIDAssetsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AddBoardAssetsResult])
                res.add_board_assets_result = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def put_v3_boards_board_id_assets_asset_id_(self, request: operations.PutV3BoardsBoardIDAssetsAssetIDRequest) -> operations.PutV3BoardsBoardIDAssetsAssetIDResponse:
        r"""Add an asset to a board
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/boards/{board_id}/assets/{asset_id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PutV3BoardsBoardIDAssetsAssetIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def put_v3_usage_batches_id_(self, request: operations.PutV3UsageBatchesIDRequest) -> operations.PutV3UsageBatchesIDResponse:
        r"""Report usage of assets via a batch format.
        # Report Usage
        
        Use this endpoint to report the usages of a set of assets. The count of assets submitted in a single batch to this endpoint is limited to 1000. Note that all asset Ids specified must be valid or the operation will fail causing no usages to be recorded. In this case, you will need to remove the invalid asset Ids from the query request and re-submit the query.
        
        ##  Quickstart
        
        You'll need an API key and a [Resource Owner Grant](http://developers.gettyimages.com/en/authorization-faq.html) access token to use this resource.
        Please see our [Getting Started](http://developers.gettyimages.com/en/getting-started.html) page for more information on how to sign up for an API key. 
        
        _Note_: Date of use can be in any unambiguous date format.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/usage-batches/{id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutV3UsageBatchesIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ReportUsageBatchResponse])
                res.report_usage_batch_response = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 409:
            pass

        return res

    