import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Functions:
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

    
    def functions_create(self, request: operations.FunctionsCreateRequest) -> operations.FunctionsCreateResponse:
        r"""Create Function
        Create a new function. You can pass a list of [permissions](/docs/permissions) to allow different project users or team with access to execute the function using the client API.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/functions"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.FunctionsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Function])
                res.function = out

        return res

    
    def functions_create_execution(self, request: operations.FunctionsCreateExecutionRequest) -> operations.FunctionsCreateExecutionResponse:
        r"""Create Execution
        Trigger a function execution. The returned object will return you the current execution status. You can ping the `Get Execution` endpoint to get updates on the current execution status. Once this endpoint is called, your function execution process will start asynchronously.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/functions/{functionId}/executions", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.FunctionsCreateExecutionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Execution])
                res.execution = out

        return res

    
    def functions_create_tag(self, request: operations.FunctionsCreateTagRequest) -> operations.FunctionsCreateTagResponse:
        r"""Create Tag
        Create a new function code tag. Use this endpoint to upload a new version of your code function. To execute your newly uploaded code, you'll need to update the function's tag to use your new tag UID.
        
        This endpoint accepts a tar.gz file compressed with your code. Make sure to include any dependencies your code has within the compressed file. You can learn more about code packaging in the [Appwrite Cloud Functions tutorial](/docs/functions).
        
        Use the \"command\" param to set the entry point used to execute your code.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/functions/{functionId}/tags", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.FunctionsCreateTagResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Tag])
                res.tag = out

        return res

    
    def functions_delete(self, request: operations.FunctionsDeleteRequest) -> operations.FunctionsDeleteResponse:
        r"""Delete Function
        Delete a function by its unique ID.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/functions/{functionId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FunctionsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def functions_delete_tag(self, request: operations.FunctionsDeleteTagRequest) -> operations.FunctionsDeleteTagResponse:
        r"""Delete Tag
        Delete a code tag by its unique ID.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/functions/{functionId}/tags/{tagId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FunctionsDeleteTagResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def functions_get(self, request: operations.FunctionsGetRequest) -> operations.FunctionsGetResponse:
        r"""Get Function
        Get a function by its unique ID.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/functions/{functionId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FunctionsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Function])
                res.function = out

        return res

    
    def functions_get_execution(self, request: operations.FunctionsGetExecutionRequest) -> operations.FunctionsGetExecutionResponse:
        r"""Get Execution
        Get a function execution log by its unique ID.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/functions/{functionId}/executions/{executionId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FunctionsGetExecutionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Execution])
                res.execution = out

        return res

    
    def functions_get_tag(self, request: operations.FunctionsGetTagRequest) -> operations.FunctionsGetTagResponse:
        r"""Get Tag
        Get a code tag by its unique ID.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/functions/{functionId}/tags/{tagId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FunctionsGetTagResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Tag])
                res.tag = out

        return res

    
    def functions_list(self, request: operations.FunctionsListRequest) -> operations.FunctionsListResponse:
        r"""List Functions
        Get a list of all the project's functions. You can use the query params to filter your results.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/functions"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.FunctionsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FunctionList])
                res.function_list = out

        return res

    
    def functions_list_executions(self, request: operations.FunctionsListExecutionsRequest) -> operations.FunctionsListExecutionsResponse:
        r"""List Executions
        Get a list of all the current user function execution logs. You can use the query params to filter your results. On admin mode, this endpoint will return a list of all of the project's executions. [Learn more about different API modes](/docs/admin).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/functions/{functionId}/executions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.FunctionsListExecutionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ExecutionList])
                res.execution_list = out

        return res

    
    def functions_list_tags(self, request: operations.FunctionsListTagsRequest) -> operations.FunctionsListTagsResponse:
        r"""List Tags
        Get a list of all the project's code tags. You can use the query params to filter your results.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/functions/{functionId}/tags", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.FunctionsListTagsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TagList])
                res.tag_list = out

        return res

    
    def functions_update(self, request: operations.FunctionsUpdateRequest) -> operations.FunctionsUpdateResponse:
        r"""Update Function
        Update function by its unique ID.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/functions/{functionId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.FunctionsUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Function])
                res.function = out

        return res

    
    def functions_update_tag(self, request: operations.FunctionsUpdateTagRequest) -> operations.FunctionsUpdateTagResponse:
        r"""Update Function Tag
        Update the function code tag ID using the unique function ID. Use this endpoint to switch the code tag that should be executed by the execution endpoint.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/functions/{functionId}/tag", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.FunctionsUpdateTagResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Function])
                res.function = out

        return res

    