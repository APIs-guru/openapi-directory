import warnings
import requests
from typing import Any,List,Optional
from sdk.models import operations
from . import utils


SERVERS = [
	"https://api.flickr.com/services",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
            
    

    
    def get_rest_method_equal_flickr_groups_pools_get_context(self, request: operations.GetRestMethodEqualFlickrGroupsPoolsGetContextRequest) -> operations.GetRestMethodEqualFlickrGroupsPoolsGetContextResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/rest?method=flickr.groups.pools.getContext"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRestMethodEqualFlickrGroupsPoolsGetContextResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetRestMethodEqualFlickrGroupsPoolsGetContext200ApplicationJSON])
                res.get_rest_method_equal_flickr_groups_pools_get_context_200_application_json_object = out

        return res

    
    def echo(self, request: operations.EchoRequest) -> operations.EchoResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/rest?method=flickr.test.echo"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.EchoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Echo200ApplicationJSON])
                res.echo_200_application_json_object = out

        return res

    
    def get_access_token(self, request: operations.GetAccessTokenRequest) -> operations.GetAccessTokenResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/oauth/access_token"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAccessTokenResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.get_access_token_200_application_json_string = r.content

        return res

    
    def get_album_by_id(self, request: operations.GetAlbumByIDRequest) -> operations.GetAlbumByIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/rest?method=flickr.photosets.getPhotos"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAlbumByIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAlbumByID200ApplicationJSON])
                res.get_album_by_id_200_application_json_object = out

        return res

    
    def get_album_context_by_id(self, request: operations.GetAlbumContextByIDRequest) -> operations.GetAlbumContextByIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/rest?method=flickr.photosets.getContext"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAlbumContextByIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAlbumContextByID200ApplicationJSON])
                res.get_album_context_by_id_200_application_json_object = out

        return res

    
    def get_albums_by_person_id(self, request: operations.GetAlbumsByPersonIDRequest) -> operations.GetAlbumsByPersonIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/rest?method=flickr.photosets.getList"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAlbumsByPersonIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAlbumsByPersonID200ApplicationJSON])
                res.get_albums_by_person_id_200_application_json_object = out

        return res

    
    def get_favorites_by_person_id(self, request: operations.GetFavoritesByPersonIDRequest) -> operations.GetFavoritesByPersonIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/rest?method=flickr.favorites.getList"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetFavoritesByPersonIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetFavoritesByPersonID200ApplicationJSON])
                res.get_favorites_by_person_id_200_application_json_object = out

        return res

    
    def get_favorites_context_by_id(self, request: operations.GetFavoritesContextByIDRequest) -> operations.GetFavoritesContextByIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/rest?method=flickr.favorites.getContext"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetFavoritesContextByIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetFavoritesContextByID200ApplicationJSON])
                res.get_favorites_context_by_id_200_application_json_object = out

        return res

    
    def get_gallery_photos_by_id(self, request: operations.GetGalleryPhotosByIDRequest) -> operations.GetGalleryPhotosByIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/rest?method=flickr.galleries.getPhotos"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGalleryPhotosByIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetGalleryPhotosByID200ApplicationJSON])
                res.get_gallery_photos_by_id_200_application_json_object = out

        return res

    
    def get_group_by_id(self, request: operations.GetGroupByIDRequest) -> operations.GetGroupByIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/rest?method=flickr.groups.getInfo"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGroupByIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetGroupByID200ApplicationJSON])
                res.get_group_by_id_200_application_json_object = out

        return res

    
    def get_group_discussions_by_id(self, request: operations.GetGroupDiscussionsByIDRequest) -> operations.GetGroupDiscussionsByIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/rest?method=flickr.groups.discuss.topics.getList"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGroupDiscussionsByIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetGroupDiscussionsByID200ApplicationJSON])
                res.get_group_discussions_by_id_200_application_json_object = out

        return res

    
    def get_group_photos_by_id(self, request: operations.GetGroupPhotosByIDRequest) -> operations.GetGroupPhotosByIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/rest?method=flickr.groups.pools.getPhotos"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGroupPhotosByIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetGroupPhotosByID200ApplicationJSON])
                res.get_group_photos_by_id_200_application_json_object = out

        return res

    
    def get_group_topic_by_id(self, request: operations.GetGroupTopicByIDRequest) -> operations.GetGroupTopicByIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/rest?method=flickr.groups.discuss.topics.getInfo"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGroupTopicByIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetGroupTopicByID200ApplicationJSON])
                res.get_group_topic_by_id_200_application_json_object = out

        return res

    
    def get_group_topic_replies_by_id(self, request: operations.GetGroupTopicRepliesByIDRequest) -> operations.GetGroupTopicRepliesByIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/rest?method=flickr.groups.discuss.replies.getInfo"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGroupTopicRepliesByIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetGroupTopicRepliesByID200ApplicationJSON])
                res.get_group_topic_replies_by_id_200_application_json_object = out

        return res

    
    def get_license_by_id(self, request: operations.GetLicenseByIDRequest) -> operations.GetLicenseByIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/rest?method=flickr.photos.licenses.getInfo"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetLicenseByIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetLicenseByID200ApplicationJSON])
                res.get_license_by_id_200_application_json_object = out

        return res

    
    def get_media_by_person_id(self, request: operations.GetMediaByPersonIDRequest) -> operations.GetMediaByPersonIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/rest?method=flickr.people.getPhotos"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMediaByPersonIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetMediaByPersonID200ApplicationJSON])
                res.get_media_by_person_id_200_application_json_object = out

        return res

    
    def get_media_by_search(self, request: operations.GetMediaBySearchRequest) -> operations.GetMediaBySearchResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/rest?method=flickr.photos.search"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMediaBySearchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetMediaBySearch200ApplicationJSON])
                res.get_media_by_search_200_application_json_object = out

        return res

    
    def get_person_by_id(self, request: operations.GetPersonByIDRequest) -> operations.GetPersonByIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/rest?method=flickr.people.getInfo"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPersonByIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetPersonByID200ApplicationJSON])
                res.get_person_by_id_200_application_json_object = out

        return res

    
    def get_photo_by_id(self, request: operations.GetPhotoByIDRequest) -> operations.GetPhotoByIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/rest?method=flickr.photos.getInfo"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPhotoByIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetPhotoByID200ApplicationJSON])
                res.get_photo_by_id_200_application_json_object = out

        return res

    
    def get_photo_exif_by_id(self, request: operations.GetPhotoExifByIDRequest) -> operations.GetPhotoExifByIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/rest?method=flickr.photos.getExif"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPhotoExifByIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetPhotoExifByID200ApplicationJSON])
                res.get_photo_exif_by_id_200_application_json_object = out

        return res

    
    def get_photo_sizes_by_id(self, request: operations.GetPhotoSizesByIDRequest) -> operations.GetPhotoSizesByIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/rest?method=flickr.photos.getSizes"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPhotoSizesByIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetPhotoSizesByID200ApplicationJSON])
                res.get_photo_sizes_by_id_200_application_json_object = out

        return res

    
    def get_photolist_context_by_id(self, request: operations.GetPhotolistContextByIDRequest) -> operations.GetPhotolistContextByIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/rest?method=flickr.photolist.getContext"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPhotolistContextByIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetPhotolistContextByID200ApplicationJSON])
                res.get_photolist_context_by_id_200_application_json_object = out

        return res

    
    def get_photostream_context_by_id(self, request: operations.GetPhotostreamContextByIDRequest) -> operations.GetPhotostreamContextByIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/rest?method=flickr.photos.getContext"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPhotostreamContextByIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetPhotostreamContextByID200ApplicationJSON])
                res.get_photostream_context_by_id_200_application_json_object = out

        return res

    
    def get_request_token(self, request: operations.GetRequestTokenRequest) -> operations.GetRequestTokenResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/oauth/request_token"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRequestTokenResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.get_request_token_200_application_json_string = r.content

        return res

    
    def upload_photo(self, request: operations.UploadPhotoRequest) -> operations.UploadPhotoResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/upload"

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        if data is None and form is None:
           raise Exception('request body is required')

        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UploadPhotoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.upload_photo_200_application_json_object = out

        return res

    