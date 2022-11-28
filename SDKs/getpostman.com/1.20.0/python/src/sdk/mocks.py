import requests
from typing import Optional
from sdk.models import operations
from . import utils

class Mocks:
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

    
    def all_mocks(self) -> operations.AllMocksResponse:
        r"""All Mocks
        This endpoint fetches all the mocks that you have created.
        
        > Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/mocks"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AllMocksResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.AllMocks200ApplicationJSON])
                res.all_mocks_200_application_json_object = out

        return res

    
    def create_mock(self, request: operations.CreateMockRequest) -> operations.CreateMockResponse:
        r"""Create Mock
        This endpoint allows you to create a mock on a collection. You can also provide an environment UID to resolve any environment variables in the collection.
        
        You can also specify the context of a workspace to create a mock in directly by passing the `workspace` as a query param.
        
        > Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/mocks"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateMockResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateMock200ApplicationJSON])
                res.create_mock_200_application_json_object = out

        return res

    
    def delete_mock(self, request: operations.DeleteMockRequest) -> operations.DeleteMockResponse:
        r"""Delete Mock
        This endpoint allows you to delete an existing mock using its `uid`.
        
        > Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mocks/{mock_uid}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteMockResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteMock200ApplicationJSON])
                res.delete_mock_200_application_json_object = out

        return res

    
    def publish_mock(self, request: operations.PublishMockRequest) -> operations.PublishMockResponse:
        r"""Publish Mock
        This endpoint publishes the mock you have created using its `uid`
        
        > Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key ` request header or `apikey` URL query parameter.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mocks/{mock_uid}/publish", request.path_params)
        
        
        client = self._client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PublishMockResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PublishMock200ApplicationJSON])
                res.publish_mock_200_application_json_object = out

        return res

    
    def single_mock(self, request: operations.SingleMockRequest) -> operations.SingleMockResponse:
        r"""Single Mock
        This endpoint fetches you the basic information about a single mock using its `uid`.
        
        > Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mocks/{mock_uid}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SingleMockResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.SingleMock200ApplicationJSON])
                res.single_mock_200_application_json_object = out

        return res

    
    def unpublish_mock(self, request: operations.UnpublishMockRequest) -> operations.UnpublishMockResponse:
        r"""Unpublish Mock
        This endpoint unpublishes the mock you have created using its `uid`
        
        > Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key ` request header or `apikey` URL query parameter.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mocks/{mock_uid}/unpublish", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.UnpublishMockResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.UnpublishMock200ApplicationJSON])
                res.unpublish_mock_200_application_json_object = out

        return res

    
    def update_mock(self, request: operations.UpdateMockRequest) -> operations.UpdateMockResponse:
        r"""Update Mock
        This endpoint allows you to update a mock you have created using its `uid`. The endpoint allows you to edit fields,
        * name
        * environment
        * description
        * private
        * versionTag
        
        > Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mocks/{mock_uid}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateMockResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.UpdateMock200ApplicationJSON])
                res.update_mock_200_application_json_object = out

        return res

    