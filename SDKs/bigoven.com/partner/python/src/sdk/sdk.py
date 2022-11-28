
__doc__ = """ SDK Documentation: http://api2.bigoven.com/web/documentation"""
import requests
from typing import Any,List,Optional
from sdk.models import shared, operations
from . import utils




SERVERS = [
	"https://api2.bigoven.com",
]


class SDK:
    r"""SDK Documentation: http://api2.bigoven.com/web/documentation"""

    _client: requests.Session
    _security_client: requests.Session
    
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
        
    
    
    
    def article_get(self, request: operations.ArticleGetRequest) -> operations.ArticleGetResponse:
        r"""Get a food article
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/article/{uniqueKeyword}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ArticleGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def collection_collections(self, request: operations.CollectionCollectionsRequest) -> operations.CollectionCollectionsResponse:
        r"""Get the list of current, seasonal recipe collections. From here, you can use the /collection/{id} endpoint to retrieve the recipes in those collections.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/collections"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CollectionCollectionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.BigOvenModelApi2CollectionInfo]])
                res.big_oven_model_api2_collection_infos = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.BigOvenModelApi2CollectionInfo]])
                res.big_oven_model_api2_collection_infos = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def collection_get_collection(self, request: operations.CollectionGetCollectionRequest) -> operations.CollectionGetCollectionResponse:
        r"""Gets a recipe collection. A recipe collection is a curated set of recipes.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/collection/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CollectionGetCollectionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BigOvenModelApi2RecipeSearchResult])
                res.big_oven_model_api2_recipe_search_result = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BigOvenModelApi2RecipeSearchResult])
                res.big_oven_model_api2_recipe_search_result = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def collection_get_collection_meta(self, request: operations.CollectionGetCollectionMetaRequest) -> operations.CollectionGetCollectionMetaResponse:
        r"""Gets a recipe collection metadata. A recipe collection is a curated set of recipes.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/collection/{id}/meta", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CollectionGetCollectionMetaResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BigOvenModelApi2CollectionInfo])
                res.big_oven_model_api2_collection_info = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BigOvenModelApi2CollectionInfo])
                res.big_oven_model_api2_collection_info = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_recipe_recipe_id_review(self, request: operations.GetRecipeRecipeIDReviewRequest) -> operations.GetRecipeRecipeIDReviewResponse:
        r"""Get *my* review for the recipe {recipeId}, where \"me\" is determined by standard authentication headers
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/recipe/{recipeId}/review", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRecipeRecipeIDReviewResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BigOvenModelAPIReview])
                res.big_oven_model_api_review = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BigOvenModelAPIReview])
                res.big_oven_model_api_review = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_recipe_review_review_id_(self, request: operations.GetRecipeReviewReviewIDRequest) -> operations.GetRecipeReviewReviewIDResponse:
        r"""Get a given review by string-style ID. This will return a payload with FeaturedReply, ReplyCount.
                    Recommended display is to list top-level reviews with one featured reply underneath. 
                    Currently, the FeaturedReply is the most recent one for that rating.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/recipe/review/{reviewId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRecipeReviewReviewIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BigOvenModelAPIReview])
                res.big_oven_model_api_review = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BigOvenModelAPIReview])
                res.big_oven_model_api_review = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def grocery_list_add_recipe(self, request: operations.GroceryListAddRecipeRequest) -> operations.GroceryListAddRecipeResponse:
        r"""Add a Recipe to the grocery list.  In the request data, pass in recipeId, scale (scale=1.0 says to keep the recipe the same size as originally posted), markAsPending (true/false) to indicate that
                    the lines in the recipe should be marked in a \"pending\" (unconfirmed by user) state.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/grocerylist/recipe"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GroceryListAddRecipeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.system_object = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.system_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def grocery_list_delete(self) -> operations.GroceryListDeleteResponse:
        r"""Delete all the items on a grocery list; faster operation than a sync with deleted items.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/grocerylist"
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GroceryListDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.system_object = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.system_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def grocery_list_delete_item_by_guid(self, request: operations.GroceryListDeleteItemByGUIDRequest) -> operations.GroceryListDeleteItemByGUIDResponse:
        r"""/grocerylist/item/{guid}  DELETE will delete this item assuming you own it.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/grocerylist/item/{guid}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GroceryListDeleteItemByGUIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.system_object = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.system_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def grocery_list_department(self, request: operations.GroceryListDepartmentRequest) -> operations.GroceryListDepartmentResponse:
        r"""Departmentalize a list of strings -- used for ad-hoc grocery list item addition
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/grocerylist/department"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GroceryListDepartmentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Api2GroceryListDepartmentResult]])
                res.api2_grocery_list_department_results = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Api2GroceryListDepartmentResult]])
                res.api2_grocery_list_department_results = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def grocery_list_get(self) -> operations.GroceryListGetResponse:
        r"""Get the user's grocery list.  User is determined by Basic Authentication.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/grocerylist"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GroceryListGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BigOvenModelApi2GroceryList])
                res.big_oven_model_api2_grocery_list = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BigOvenModelApi2GroceryList])
                res.big_oven_model_api2_grocery_list = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def grocery_list_grocery_list_item_guid(self, request: operations.GroceryListGroceryListItemGUIDRequest) -> operations.GroceryListGroceryListItemGUIDResponse:
        r"""Update a grocery item by GUID
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/grocerylist/item/{guid}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GroceryListGroceryListItemGUIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.system_object = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.system_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def grocery_list_grocery_list_remove_marked_items(self) -> operations.GroceryListGroceryListRemoveMarkedItemsResponse:
        r"""Clears the checked lines.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/grocerylist/clearcheckedlines"
        
        
        client = self._client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GroceryListGroceryListRemoveMarkedItemsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BigOvenModelApi2GroceryList])
                res.big_oven_model_api2_grocery_list = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BigOvenModelApi2GroceryList])
                res.big_oven_model_api2_grocery_list = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def grocery_list_post(self, request: operations.GroceryListPostRequest) -> operations.GroceryListPostResponse:
        r"""Add a single line item to the grocery list
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/grocerylist/line"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GroceryListPostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BigOvenModelShoppingListLine])
                res.big_oven_model_shopping_list_line = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BigOvenModelShoppingListLine])
                res.big_oven_model_shopping_list_line = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def images_get(self, request: operations.ImagesGetRequest) -> operations.ImagesGetResponse:
        r"""Get all the images for a recipe. DEPRECATED. Please use /recipe/{recipeId}/photos.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/recipe/{recipeId}/images", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ImagesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.BigOvenModelAPIImage]])
                res.big_oven_model_api_images = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.BigOvenModelAPIImage]])
                res.big_oven_model_api_images = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def images_get_pending_by_user(self) -> operations.ImagesGetPendingByUserResponse:
        r"""Gets the pending by user.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/recipe/photos/pending"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ImagesGetPendingByUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Api2ControllersWebAPIImagesControllerRecipePhotosResponse])
                res.api2_controllers_web_api_images_controller_recipe_photos_response = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Api2ControllersWebAPIImagesControllerRecipePhotosResponse])
                res.api2_controllers_web_api_images_controller_recipe_photos_response = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def images_get_recipe_photos(self, request: operations.ImagesGetRecipePhotosRequest) -> operations.ImagesGetRecipePhotosResponse:
        r"""Get all the photos for a recipe
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/recipe/{recipeId}/photos", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ImagesGetRecipePhotosResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Api2ControllersWebAPIImagesControllerRecipePhotosResponse])
                res.api2_controllers_web_api_images_controller_recipe_photos_response = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Api2ControllersWebAPIImagesControllerRecipePhotosResponse])
                res.api2_controllers_web_api_images_controller_recipe_photos_response = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def images_get_scan_images(self, request: operations.ImagesGetScanImagesRequest) -> operations.ImagesGetScanImagesResponse:
        r"""Gets a list of RecipeScan images for the recipe. There will be at most 3 per recipe.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/recipe/{recipeId}/scans", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ImagesGetScanImagesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.BigOvenModelAPIImage]])
                res.big_oven_model_api_images = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.BigOvenModelAPIImage]])
                res.big_oven_model_api_images = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def images_upload_recipe_image(self, request: operations.ImagesUploadRecipeImageRequest) -> operations.ImagesUploadRecipeImageResponse:
        r"""POST: /recipe/{recipeId}/image?lat=42&amp;lng=21&amp;caption=this%20is%20my%20caption
                     
                     Note that caption, lng and lat are all optional, but must go on the request URI as params because this endpoint
                     needs a multipart/mime content header and will not parse JSON in the body along with it.
                    
                     Testing with Postman (validated 11/20/2015):
                     1) Remove the Content-Type header; add authentication information
                     2) On the request, click Body and choose \"form-data\", then add a line item with \"key\" column set to \"file\" and on the right,
                     change the type of the input from Text to File.  Browse and choose a JPG.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/recipe/{recipeId}/image", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ImagesUploadRecipeImageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.system_object = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.system_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 415:
            pass

        return res

    
    def images_upload_user_avatar(self) -> operations.ImagesUploadUserAvatarResponse:
        r"""POST: /image/avatar
                     
                    Testing with Postman (validated 11/20/2015):
                    1) Remove the Content-Type header; add authentication information
                    2) On the request, click Body and choose \"form-data\", then add a line item with \"key\" column set to \"file\" and on the right,
                    change the type of the input from Text to File.  Browse and choose a JPG.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/image/avatar"
        
        
        client = self._client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ImagesUploadUserAvatarResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.system_object = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.system_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 415:
            pass

        return res

    
    def me_get_options(self) -> operations.MeGetOptionsResponse:
        r"""Gets the options.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/me/preferences/options"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.MeGetOptionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Api2ControllersWebAPIMeControllerPreferenceOptions])
                res.api2_controllers_web_api_me_controller_preference_options = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Api2ControllersWebAPIMeControllerPreferenceOptions])
                res.api2_controllers_web_api_me_controller_preference_options = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def me_index(self) -> operations.MeIndexResponse:
        r"""Indexes this instance.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/me"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.MeIndexResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Api2ModelsBigOvenUser])
                res.api2_models_big_oven_user = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Api2ModelsBigOvenUser])
                res.api2_models_big_oven_user = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def me_put_me(self, request: operations.MePutMeRequest) -> operations.MePutMeResponse:
        r"""Puts me.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/me"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.MePutMeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Api2ModelsBigOvenUser])
                res.api2_models_big_oven_user = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Api2ModelsBigOvenUser])
                res.api2_models_big_oven_user = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def me_put_me_personal(self, request: operations.MePutMePersonalRequest) -> operations.MePutMePersonalResponse:
        r"""Puts me personal.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/me/personal"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.MePutMePersonalResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Api2ModelsBigOvenUser])
                res.api2_models_big_oven_user = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Api2ModelsBigOvenUser])
                res.api2_models_big_oven_user = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def me_put_me_preferences(self, request: operations.MePutMePreferencesRequest) -> operations.MePutMePreferencesResponse:
        r"""Puts me preferences.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/me/preferences"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.MePutMePreferencesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Api2ModelsBigOvenUser])
                res.api2_models_big_oven_user = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Api2ModelsBigOvenUser])
                res.api2_models_big_oven_user = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def me_skinny(self) -> operations.MeSkinnyResponse:
        r"""Skinnies this instance.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/me/skinny"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.MeSkinnyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Api2ModelsBigOvenUser])
                res.api2_models_big_oven_user = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Api2ModelsBigOvenUser])
                res.api2_models_big_oven_user = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def note_delete(self, request: operations.NoteDeleteRequest) -> operations.NoteDeleteResponse:
        r"""Delete a review
                        do a DELETE Http request of /note/{ID}
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/recipe/{recipeId}/note/{noteId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.NoteDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.system_object = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.system_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def note_get(self, request: operations.NoteGetRequest) -> operations.NoteGetResponse:
        r"""Get a given note. Make sure you're passing authentication information in the header for the user who owns the note.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/recipe/{recipeId}/note/{noteId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.NoteGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BigOvenModelAPIRecipeNote])
                res.big_oven_model_api_recipe_note = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BigOvenModelAPIRecipeNote])
                res.big_oven_model_api_recipe_note = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def note_get_notes(self, request: operations.NoteGetNotesRequest) -> operations.NoteGetNotesResponse:
        r"""recipe/100/notes
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/recipe/{recipeId}/notes", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.NoteGetNotesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BigOvenModelAPIRecipeNoteList])
                res.big_oven_model_api_recipe_note_list = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BigOvenModelAPIRecipeNoteList])
                res.big_oven_model_api_recipe_note_list = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def note_post(self, request: operations.NotePostRequest) -> operations.NotePostResponse:
        r"""HTTP POST a new note into the system.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/recipe/{recipeId}/note", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.NotePostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BigOvenModelApi2RecipeNote])
                res.big_oven_model_api2_recipe_note = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BigOvenModelApi2RecipeNote])
                res.big_oven_model_api2_recipe_note = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def note_put(self, request: operations.NotePutRequest) -> operations.NotePutResponse:
        r"""HTTP PUT (update) a Recipe note (RecipeNote).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/recipe/{recipeId}/note/{noteId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.NotePutResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BigOvenModelAPIRecipeNote])
                res.big_oven_model_api_recipe_note = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BigOvenModelAPIRecipeNote])
                res.big_oven_model_api_recipe_note = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_grocerylist_item(self, request: operations.PostGrocerylistItemRequest) -> operations.PostGrocerylistItemResponse:
        r"""Add a single line item to the grocery list
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/grocerylist/item"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostGrocerylistItemResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BigOvenModelShoppingListLine])
                res.big_oven_model_shopping_list_line = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BigOvenModelShoppingListLine])
                res.big_oven_model_shopping_list_line = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def put_me_profile(self, request: operations.PutMeProfileRequest) -> operations.PutMeProfileResponse:
        r"""Puts me.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/me/profile"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutMeProfileResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Api2ModelsBigOvenUser])
                res.api2_models_big_oven_user = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Api2ModelsBigOvenUser])
                res.api2_models_big_oven_user = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def recipe_auto_complete(self, request: operations.RecipeAutoCompleteRequest) -> operations.RecipeAutoCompleteResponse:
        r"""Given a query, return recipe titles starting with query. Query must be at least 3 chars in length.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/recipe/autocomplete"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RecipeAutoCompleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[str]])
                res.recipe_auto_complete_200_application_json_strings = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[str]])
                res.recipe_auto_complete_200_text_json_strings = out

        return res

    
    def recipe_auto_complete_all_recipes(self, request: operations.RecipeAutoCompleteAllRecipesRequest) -> operations.RecipeAutoCompleteAllRecipesResponse:
        r"""Automatics the complete all recipes.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/recipe/autocomplete/all"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RecipeAutoCompleteAllRecipesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.BigOvenModelRecipeInfoTiny]])
                res.big_oven_model_recipe_info_tinies = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.BigOvenModelRecipeInfoTiny]])
                res.big_oven_model_recipe_info_tinies = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def recipe_auto_complete_my_recipes(self, request: operations.RecipeAutoCompleteMyRecipesRequest) -> operations.RecipeAutoCompleteMyRecipesResponse:
        r"""Automatics the complete my recipes.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/recipe/autocomplete/mine"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RecipeAutoCompleteMyRecipesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.BigOvenModelRecipeInfoTiny]])
                res.big_oven_model_recipe_info_tinies = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.BigOvenModelRecipeInfoTiny]])
                res.big_oven_model_recipe_info_tinies = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def recipe_categories(self) -> operations.RecipeCategoriesResponse:
        r"""Get a list of recipe categories (the ID field can be used for include_cat in search parameters)
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/recipe/categories"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.RecipeCategoriesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.BigOvenModelRecipeCategory]])
                res.big_oven_model_recipe_categories = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.BigOvenModelRecipeCategory]])
                res.big_oven_model_recipe_categories = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def recipe_delete(self, request: operations.RecipeDeleteRequest) -> operations.RecipeDeleteResponse:
        r"""Delete a Recipe (you must be authenticated as an owner of the recipe)
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/recipe/{id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.RecipeDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.system_object = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.system_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def recipe_feedback(self, request: operations.RecipeFeedbackRequest) -> operations.RecipeFeedbackResponse:
        r"""Feedback on a Recipe -- for internal BigOven editors
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/recipe/{recipeId}/feedback", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RecipeFeedbackResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.system_object = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.system_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def recipe_get(self, request: operations.RecipeGetRequest) -> operations.RecipeGetResponse:
        r"""Return full Recipe detail. Returns 403 if the recipe is owned by someone else.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/recipe/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RecipeGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BigOvenModelApi2Recipe])
                res.big_oven_model_api2_recipe = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BigOvenModelApi2Recipe])
                res.big_oven_model_api2_recipe = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def recipe_get_active_recipe(self, request: operations.RecipeGetActiveRecipeRequest) -> operations.RecipeGetActiveRecipeResponse:
        r"""Returns last active recipe for the user
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/recipe/get/active/recipe"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RecipeGetActiveRecipeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BigOvenResult])
                res.big_oven_result = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BigOvenResult])
                res.big_oven_result = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def recipe_get_random_recipe(self) -> operations.RecipeGetRandomRecipeResponse:
        r"""Get a random, home-page-quality Recipe.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/recipes/random"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.RecipeGetRandomRecipeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BigOvenModelAPIRecipe])
                res.big_oven_model_api_recipe = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BigOvenModelAPIRecipe])
                res.big_oven_model_api_recipe = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def recipe_get_recipe_with_steps(self, request: operations.RecipeGetRecipeWithStepsRequest) -> operations.RecipeGetRecipeWithStepsResponse:
        r"""Return full Recipe detail with steps. Returns 403 if the recipe is owned by someone else.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/recipe/steps/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RecipeGetRecipeWithStepsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BigOvenModelApi2Recipe])
                res.big_oven_model_api2_recipe = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BigOvenModelApi2Recipe])
                res.big_oven_model_api2_recipe = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def recipe_get_step(self, request: operations.RecipeGetStepRequest) -> operations.RecipeGetStepResponse:
        r"""Gets recipe single step as text
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/recipe/get/saved/step"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RecipeGetStepResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.recipe_get_step_200_application_json_string = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.recipe_get_step_200_application_xml_string = r.content
            if utils.match_content_type(content_type, "text/json"):
                res.recipe_get_step_200_text_json_string = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.recipe_get_step_200_text_xml_string = r.content

        return res

    
    def recipe_get_step_number(self, request: operations.RecipeGetStepNumberRequest) -> operations.RecipeGetStepNumberResponse:
        r"""Returns stored step number and number of steps in recipe
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/recipe/get/step/number"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RecipeGetStepNumberResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Api2Result])
                res.api2_result = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Api2Result])
                res.api2_result = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def recipe_get_steps(self, request: operations.RecipeGetStepsRequest) -> operations.RecipeGetStepsResponse:
        r"""Stores recipe step number and returns saved step data
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/recipe/post/step"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RecipeGetStepsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BigOvenResult])
                res.big_oven_result = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BigOvenResult])
                res.big_oven_result = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def recipe_get_v2(self, request: operations.RecipeGetV2Request) -> operations.RecipeGetV2Response:
        r"""Same as GET recipe but also includes the recipe videos (if any)
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/recipes/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RecipeGetV2Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Api2ModelsRecipesRecipeResponse])
                res.api2_models_recipes_recipe_response = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Api2ModelsRecipesRecipeResponse])
                res.api2_models_recipes_recipe_response = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def recipe_raves(self, request: operations.RecipeRavesRequest) -> operations.RecipeRavesResponse:
        r"""Get the recipe/comment tuples for those recipes with 4 or 5 star ratings
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/recipes/raves"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RecipeRavesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.BigOvenModelRecipeInfoReviewTuple2]])
                res.big_oven_model_recipe_info_review_tuple2s = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.BigOvenModelRecipeInfoReviewTuple2]])
                res.big_oven_model_recipe_info_review_tuple2s = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def recipe_recent_views(self, request: operations.RecipeRecentViewsRequest) -> operations.RecipeRecentViewsResponse:
        r"""Get a list of recipes that the authenticated user has most recently viewed
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/recipes/recentviews"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RecipeRecentViewsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.BigOvenModelRecipeInfoDateTuple2]])
                res.big_oven_model_recipe_info_date_tuple2s = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.BigOvenModelRecipeInfoDateTuple2]])
                res.big_oven_model_recipe_info_date_tuple2s = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def recipe_recipe_search(self, request: operations.RecipeRecipeSearchRequest) -> operations.RecipeRecipeSearchResponse:
        r"""Search for recipes. There are many parameters that you can apply. Starting with the most common, use title_kw to search within a title.
                    Use any_kw to search across the entire recipe.
                    If you'd like to limit by course, set the parameter \"include_primarycat\" to one of (appetizers,bread,breakfast,dessert,drinks,maindish,salad,sidedish,soup,marinades,other).
                    If you'd like to exclude a category, set exclude_cat to one or more (comma-separated) list of those categories to exclude.
                    If you'd like to include a category, set include_cat to one or more (comma-separated) of those categories to include.
                    To explicitly include an ingredient in your search, set the parameter \"include_ing\" to a CSV of up to three ingredients, e.g.:include_ing=mustard,chicken,beef%20tips
                    To explicitly exclude an ingredient in your search, set the parameter \"exclude_ing\" to a CSV of up to three ingredients.
                    All searches must contain the paging parameters pg and rpp, which are integers, and represent the page number (1-based) and results per page (rpp).
                    So, to get the third page of a result set paged with 25 recipes per page, you'd pass pg=3&amp;rpp=25
                    If you'd like to target searches to just a single target user's recipes, set userId=the target userId (number).
                    Or, you can set username=theirusername
                    vtn;vgn;chs;glf;ntf;dyf;sff;slf;tnf;wmf;rmf;cps
                    cuisine
                    photos
                    filter=added,try,favorites,myrecipes\r\n\r\n
                    folder=FolderNameCaseSensitive
                    coll=ID of Collection
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/recipes"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RecipeRecipeSearchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BigOvenModelApi2RecipeSearchResult])
                res.big_oven_model_api2_recipe_search_result = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BigOvenModelApi2RecipeSearchResult])
                res.big_oven_model_api2_recipe_search_result = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def recipe_recipe_search_random(self, request: operations.RecipeRecipeSearchRandomRequest) -> operations.RecipeRecipeSearchRandomResponse:
        r"""Search for recipes. There are many parameters that you can apply. Starting with the most common, use title_kw to search within a title.
                    Use any_kw to search across the entire recipe.
                    If you'd like to limit by course, set the parameter \"include_primarycat\" to one of (appetizers,bread,breakfast,dessert,drinks,maindish,salad,sidedish,soup,marinades,other).
                    If you'd like to exclude a category, set exclude_cat to one or more (comma-separated) list of those categories to exclude.
                    If you'd like to include a category, set include_cat to one or more (comma-separated) of those categories to include.
                    To explicitly include an ingredient in your search, set the parameter \"include_ing\" to a CSV of up to three ingredients, e.g.:include_ing=mustard,chicken,beef%20tips
                    To explicitly exclude an ingredient in your search, set the parameter \"exclude_ing\" to a CSV of up to three ingredients.
                    All searches must contain the paging parameters pg and rpp, which are integers, and represent the page number (1-based) and results per page (rpp).
                    So, to get the third page of a result set paged with 25 recipes per page, you'd pass pg=3&amp;rpp=25
                    If you'd like to target searches to just a single target user's recipes, set userId=the target userId (number).
                    Or, you can set username=theirusername
                    vtn;vgn;chs;glf;ntf;dyf;sff;slf;tnf;wmf;rmf;cps
                    cuisine
                    photos
                    filter=added,try,favorites,myrecipes\r\n\r\n
                    folder=FolderNameCaseSensitive
                    coll=ID of Collection
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/recipes/top25random"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RecipeRecipeSearchRandomResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BigOvenModelApi2RecipeSearchResult])
                res.big_oven_model_api2_recipe_search_result = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BigOvenModelApi2RecipeSearchResult])
                res.big_oven_model_api2_recipe_search_result = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def recipe_related(self, request: operations.RecipeRelatedRequest) -> operations.RecipeRelatedResponse:
        r"""Get recipes related to the given recipeId
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/recipe/{recipeId}/related", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RecipeRelatedResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BigOvenModelApi2RecipeSearchResult])
                res.big_oven_model_api2_recipe_search_result = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BigOvenModelApi2RecipeSearchResult])
                res.big_oven_model_api2_recipe_search_result = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def recipe_scan(self, request: operations.RecipeScanRequest) -> operations.RecipeScanResponse:
        r"""POST an image as a new RecipeScan request
                        1)  Fetch the filename -- DONE
                        2)  Copy it to the pics/scan folder - ENSURE NO NAMING COLLISIONS -- DONE
                        3)  Create 120 thumbnail size  in pics/scan/120 -- DONE
                        4)  Insert the CloudTasks record
                        5)  Create the HIT
                        6)  Update the CloudTasks record with the HIT ID
                        7)  Email the requesing user
                        8)  Call out to www.bigoven.com to fetch the image and re-create the thumbnail
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/recipe/scan"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RecipeScanResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 401:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 415:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def recipe_zap_recipe(self, request: operations.RecipeZapRecipeRequest) -> operations.RecipeZapRecipeResponse:
        r"""Zaps the recipe.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/recipe/{id}/zap", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.RecipeZapRecipeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.system_object = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.system_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def review_delete(self, request: operations.ReviewDeleteRequest) -> operations.ReviewDeleteResponse:
        r"""DEPRECATED! - Deletes a review by recipeId and reviewId. Please use recipe/review/{reviewId} instead.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/recipe/{recipeId}/review/{reviewId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ReviewDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.system_object = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.system_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def review_delete_reply(self, request: operations.ReviewDeleteReplyRequest) -> operations.ReviewDeleteReplyResponse:
        r"""DELETE a reply to a given review. Authenticated user must be the one who originally posted the reply.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/recipe/review/replies/{replyId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ReviewDeleteReplyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.system_object = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.system_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def review_get(self, request: operations.ReviewGetRequest) -> operations.ReviewGetResponse:
        r"""Get a given review - DEPRECATED. See recipe/review/{reviewId} for the current usage.
                    Beginning in January 2017, BigOven moded from an integer-based ID system to a GUID-style string-based ID system for reviews and replies.
                    We are also supporting more of a \"Google Play\" style model for Reviews and Replies. That is, there are top-level Reviews and then
                    an unlimited list of replies (which do not carry star ratings) underneath existing reviews. Also, a given user can only have one review 
                    per recipe. Existing legacy endpoints will continue to work, but we strongly recommend you migrate to using the newer endpoints listed
                    which do NOT carry the \"DEPRECATED\" flag.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/recipe/{recipeId}/review/{reviewId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ReviewGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BigOvenModelAPIReview])
                res.big_oven_model_api_review = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BigOvenModelAPIReview])
                res.big_oven_model_api_review = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def review_get_replies(self, request: operations.ReviewGetRepliesRequest) -> operations.ReviewGetRepliesResponse:
        r"""Get a paged list of replies for a given review.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/recipe/review/{reviewId}/replies", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ReviewGetRepliesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.BigOvenModelAPIReply]])
                res.big_oven_model_api_replies = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.BigOvenModelAPIReply]])
                res.big_oven_model_api_replies = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def review_get_reviews(self, request: operations.ReviewGetReviewsRequest) -> operations.ReviewGetReviewsResponse:
        r"""Get paged list of reviews for a recipe. Each review will have at most one FeaturedReply, as well as a ReplyCount.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/recipe/{recipeId}/reviews", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ReviewGetReviewsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.BigOvenModelAPIReview]])
                res.big_oven_model_api_reviews = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.BigOvenModelAPIReview]])
                res.big_oven_model_api_reviews = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def review_post(self, request: operations.ReviewPostRequest) -> operations.ReviewPostResponse:
        r"""Add a new review. Only one review can be provided per {userId, recipeId} pair. Otherwise your review will be updated.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/recipe/{recipeId}/review", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ReviewPostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.system_object = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.system_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def review_post_reply(self, request: operations.ReviewPostReplyRequest) -> operations.ReviewPostReplyResponse:
        r"""POST a reply to a given review. The date will be set by server. Note that replies no longer have star ratings, only top-level reviews do.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/recipe/review/{reviewId}/replies", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ReviewPostReplyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BigOvenModelAPIReply])
                res.big_oven_model_api_reply = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BigOvenModelAPIReply])
                res.big_oven_model_api_reply = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def review_put(self, request: operations.ReviewPutRequest) -> operations.ReviewPutResponse:
        r"""Update a given top-level review.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/recipe/review/{reviewId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ReviewPutResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BigOvenModelAPIReview])
                res.big_oven_model_api_review = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BigOvenModelAPIReview])
                res.big_oven_model_api_review = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def review_put_legacy(self, request: operations.ReviewPutLegacyRequest) -> operations.ReviewPutLegacyResponse:
        r"""HTTP PUT (update) a recipe review. DEPRECATED. Please see recipe/review/{reviewId} PUT for the new endpoint.
                    We are moving to a string-based primary key system, no longer integers, for reviews and replies.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/recipe/{recipeId}/review/{reviewId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ReviewPutLegacyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BigOvenModelAPIReview])
                res.big_oven_model_api_review = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BigOvenModelAPIReview])
                res.big_oven_model_api_review = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def review_put_reply(self, request: operations.ReviewPutReplyRequest) -> operations.ReviewPutReplyResponse:
        r"""Update (PUT) a reply to a given review. Authenticated user must be the original one that posted the reply.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/recipe/review/replies/{replyId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ReviewPutReplyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BigOvenModelAPIReply])
                res.big_oven_model_api_reply = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BigOvenModelAPIReply])
                res.big_oven_model_api_reply = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    