import requests
from typing import Optional
from sdk.models import operations
from . import utils

class Collections:
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

    
    def all_collections(self) -> operations.AllCollectionsResponse:
        r"""All Collections
        The `/collections` endpoint returns a list of all [collections](https://www.getpostman.com/docs/collections) that are accessible by you. The list includes your own collections and the collections that you have subscribed to.
        
        The response contains an array of collection information containing the `name`, `id`, `owner` and `uid` of each collection.
        
        > Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/collections"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AllCollectionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.AllCollections200ApplicationJSON])
                res.all_collections_200_application_json_object = out

        return res

    
    def create_a_fork(self, request: operations.CreateAForkRequest) -> operations.CreateAForkResponse:
        r"""Create a Fork
        This endpoint allows you to create a fork from an existing collection.
        
        On successful creation of the collection, the response returns the collection `name`, `id`, `uid` along with `fork` information.
        
        You can also specify the context of a workspace to fork a collection in by passing the `workspace` as a query param.
        
        > Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/collections/fork/{collection_uid}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateAForkResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def create_collection(self, request: operations.CreateCollectionRequest) -> operations.CreateCollectionResponse:
        r"""Create Collection
        This endpoint allows you to create collections using the Postman Collection v2 format. For more information about the v2 schema, check the format [here](https://schema.getpostman.com/json/collection/v2.0.0/docs/index.html).
        
        On successful creation of the collection, the response returns the collection `name`, `id` and the `uid`.
        
        You can also specify the context of a workspace to create a collection in directly by passing the `workspace` as a query param.
        
        > Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/collections"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateCollectionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateCollection200ApplicationJSON])
                res.create_collection_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateCollection400ApplicationJSON])
                res.create_collection_400_application_json_object = out

        return res

    
    def delete_collection(self, request: operations.DeleteCollectionRequest) -> operations.DeleteCollectionResponse:
        r"""Delete Collection
        This endpoint allows you to delete an existing collection.
        
        On successful deletion of the collection, the response returns the `id` and `uid`.
        
        > Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/collections/{collection_uid}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteCollectionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteCollection200ApplicationJSON])
                res.delete_collection_200_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteCollection404ApplicationJSON])
                res.delete_collection_404_application_json_object = out

        return res

    
    def merge_a_fork(self, request: operations.MergeAForkRequest) -> operations.MergeAForkResponse:
        r"""Merge a Fork
        This endpoint allows you to merge a forked collection back to its destination collection.
        
        On successful creation of the collection, the response returns the collection `name`, `id` and `uid`.
        
        You need to specify the fork UID (as `source`) and destination collection UID (as `destination`) in the request body.
        
        Optionally, you can also specify the merge strategy as either `deleteSource` or `updateSourceWithDestination`. Following is an explanation of the merge strategies
        
        | Merge Strategy | Behaviour |
        | --- | --- |
        | deleteSource | Forked collection is deleted after merging |
        | updateSourceWithDestination | Forked collection is up to date with changes in destination collection |
        
        If the collections cannot be merged (due to conflicts), appropriate error messages will be returned.
        
        
        > Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/collections/merge"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.MergeAForkResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def single_collection(self, request: operations.SingleCollectionRequest) -> operations.SingleCollectionResponse:
        r"""Single Collection 
        Access the contents of a collection that is accessible to you using its unique id (`uid`).
        
        > Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/collections/{collection_uid}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SingleCollectionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.SingleCollection200ApplicationJSON])
                res.single_collection_200_application_json_object = out

        return res

    
    def update_collection(self, request: operations.UpdateCollectionRequest) -> operations.UpdateCollectionResponse:
        r"""Update Collection
        This endpoint allows you to update an existing collection using the Postman Collection v2 format. For more information about the v2 schema, check the format [here](https://schema.getpostman.com/json/collection/v2.0.0/docs/index.html).
        
        On successful updation of the collection, the response returns the collection `name`, `id` and `uid`.
        
        > Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
        
        Note: Please be careful when trying to update the collection, as the existing collection will be replaced by the request body.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/collections/{collection_uid}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateCollectionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.UpdateCollection200ApplicationJSON])
                res.update_collection_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.UpdateCollection400ApplicationJSON])
                res.update_collection_400_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.UpdateCollection403ApplicationJSON])
                res.update_collection_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.UpdateCollection404ApplicationJSON])
                res.update_collection_404_application_json_object = out

        return res

    