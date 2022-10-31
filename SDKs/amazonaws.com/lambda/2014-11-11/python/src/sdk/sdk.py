import warnings
import requests
from typing import List,Optional
from sdk.models import operations, shared
from . import utils


SERVERS = [
	"http://lambda.{region}.amazonaws.com",
	"https://lambda.{region}.amazonaws.com",
	"http://lambda.{region}.amazonaws.com.cn",
	"https://lambda.{region}.amazonaws.com.cn",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
            
    
    def config_security(self, security: shared.Security):
        self.client = utils.configure_security_client(security)

    
    def add_event_source(self, request: operations.AddEventSourceRequest) -> operations.AddEventSourceResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/2014-11-13/event-source-mappings/"

        headers = utils.get_headers(request.headers)

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        if data is None and form is None:
           raise Exception('request body is required')

        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AddEventSourceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EventSourceConfiguration])
                res.event_source_configuration = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.InvalidParameterValueException])
                res.invalid_parameter_value_exception = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ServiceException])
                res.service_exception = out

        return res

    
    def delete_function(self, request: operations.DeleteFunctionRequest) -> operations.DeleteFunctionResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/2014-11-13/functions/{FunctionName}", request.path_params)

        headers = utils.get_headers(request.headers)

        client = self.client

        r = client.request("DELETE", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteFunctionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ResourceNotFoundException])
                res.resource_not_found_exception = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ServiceException])
                res.service_exception = out

        return res

    
    def get_event_source(self, request: operations.GetEventSourceRequest) -> operations.GetEventSourceResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/2014-11-13/event-source-mappings/{UUID}", request.path_params)

        headers = utils.get_headers(request.headers)

        client = self.client

        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetEventSourceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EventSourceConfiguration])
                res.event_source_configuration = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.InvalidParameterValueException])
                res.invalid_parameter_value_exception = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ResourceNotFoundException])
                res.resource_not_found_exception = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ServiceException])
                res.service_exception = out

        return res

    
    def get_function(self, request: operations.GetFunctionRequest) -> operations.GetFunctionResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/2014-11-13/functions/{FunctionName}", request.path_params)

        headers = utils.get_headers(request.headers)

        client = self.client

        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetFunctionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetFunctionResponse])
                res.get_function_response = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ResourceNotFoundException])
                res.resource_not_found_exception = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ServiceException])
                res.service_exception = out

        return res

    
    def get_function_configuration(self, request: operations.GetFunctionConfigurationRequest) -> operations.GetFunctionConfigurationResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/2014-11-13/functions/{FunctionName}/configuration", request.path_params)

        headers = utils.get_headers(request.headers)

        client = self.client

        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetFunctionConfigurationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FunctionConfiguration])
                res.function_configuration = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ResourceNotFoundException])
                res.resource_not_found_exception = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ServiceException])
                res.service_exception = out

        return res

    
    def invoke_async(self, request: operations.InvokeAsyncRequest) -> operations.InvokeAsyncResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/2014-11-13/functions/{FunctionName}/invoke-async/", request.path_params)

        headers = utils.get_headers(request.headers)

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        if data is None and form is None:
           raise Exception('request body is required')

        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.InvokeAsyncResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 202:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.InvokeAsyncResponse])
                res.invoke_async_response = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.InvalidRequestContentException])
                res.invalid_request_content_exception = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ResourceNotFoundException])
                res.resource_not_found_exception = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ServiceException])
                res.service_exception = out

        return res

    
    def list_event_sources(self, request: operations.ListEventSourcesRequest) -> operations.ListEventSourcesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/2014-11-13/event-source-mappings/"

        headers = utils.get_headers(request.headers)

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ListEventSourcesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListEventSourcesResponse])
                res.list_event_sources_response = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.InvalidParameterValueException])
                res.invalid_parameter_value_exception = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ResourceNotFoundException])
                res.resource_not_found_exception = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ServiceException])
                res.service_exception = out

        return res

    
    def list_functions(self, request: operations.ListFunctionsRequest) -> operations.ListFunctionsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/2014-11-13/functions/"

        headers = utils.get_headers(request.headers)

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ListFunctionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListFunctionsResponse])
                res.list_functions_response = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ServiceException])
                res.service_exception = out

        return res

    
    def remove_event_source(self, request: operations.RemoveEventSourceRequest) -> operations.RemoveEventSourceResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/2014-11-13/event-source-mappings/{UUID}", request.path_params)

        headers = utils.get_headers(request.headers)

        client = self.client

        r = client.request("DELETE", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RemoveEventSourceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.InvalidParameterValueException])
                res.invalid_parameter_value_exception = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ResourceNotFoundException])
                res.resource_not_found_exception = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ServiceException])
                res.service_exception = out

        return res

    
    def update_function_configuration(self, request: operations.UpdateFunctionConfigurationRequest) -> operations.UpdateFunctionConfigurationResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/2014-11-13/functions/{FunctionName}/configuration", request.path_params)

        headers = utils.get_headers(request.headers)

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("PUT", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateFunctionConfigurationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FunctionConfiguration])
                res.function_configuration = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.InvalidParameterValueException])
                res.invalid_parameter_value_exception = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ResourceNotFoundException])
                res.resource_not_found_exception = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ServiceException])
                res.service_exception = out

        return res

    
    def upload_function(self, request: operations.UploadFunctionRequest) -> operations.UploadFunctionResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/2014-11-13/functions/{FunctionName}#Runtime&Role&Handler&Mode", request.path_params)

        headers = utils.get_headers(request.headers)

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        if data is None and form is None:
           raise Exception('request body is required')

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UploadFunctionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FunctionConfiguration])
                res.function_configuration = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.InvalidParameterValueException])
                res.invalid_parameter_value_exception = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ResourceNotFoundException])
                res.resource_not_found_exception = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ServiceException])
                res.service_exception = out

        return res

    