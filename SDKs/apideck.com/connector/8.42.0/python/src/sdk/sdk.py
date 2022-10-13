import warnings
import requests
from typing import Any,Optional
from sdk.models import operations, shared
from . import utils


SERVERS = [
	"https://unify.apideck.com",
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

    
    def api_resource_coverage_one(self, request: operations.APIResourceCoverageOneRequest) -> operations.APIResourceCoverageOneResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/connector/apis/{id}/resources/{resource_id}/coverage", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.APIResourceCoverageOneResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetAPIResourceCoverageResponse])
                res.responses[r.status_code][content_type] = operations.APIResourceCoverageOneResponses(get_api_resource_coverage_response=out)
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.APIResourceCoverageOneResponses(unauthorized_response=out)
        elif r.status_code == 402:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.APIResourceCoverageOneResponses(payment_required_response=out)
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.APIResourceCoverageOneResponses(not_found_response=out)
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.APIResourceCoverageOneResponses(unexpected_error_response=out)

        return res

    
    def api_resources_one(self, request: operations.APIResourcesOneRequest) -> operations.APIResourcesOneResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/connector/apis/{id}/resources/{resource_id}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.APIResourcesOneResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetAPIResourceResponse])
                res.responses[r.status_code][content_type] = operations.APIResourcesOneResponses(get_api_resource_response=out)
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.APIResourcesOneResponses(unauthorized_response=out)
        elif r.status_code == 402:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.APIResourcesOneResponses(payment_required_response=out)
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.APIResourcesOneResponses(not_found_response=out)
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.APIResourcesOneResponses(unexpected_error_response=out)

        return res

    
    def apis_all(self, request: operations.ApisAllRequest) -> operations.ApisAllResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/v1/apis"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ApisAllResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetApisResponse])
                res.responses[r.status_code][content_type] = operations.ApisAllResponses(get_apis_response=out)
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.ApisAllResponses(bad_request_response=out)
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.ApisAllResponses(unauthorized_response=out)
        elif r.status_code == 402:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.ApisAllResponses(payment_required_response=out)
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.ApisAllResponses(unexpected_error_response=out)

        return res

    
    def apis_one(self, request: operations.ApisOneRequest) -> operations.ApisOneResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/connector/apis/{id}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ApisOneResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetAPIResponse])
                res.responses[r.status_code][content_type] = operations.ApisOneResponses(get_api_response=out)
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.ApisOneResponses(unauthorized_response=out)
        elif r.status_code == 402:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.ApisOneResponses(payment_required_response=out)
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.ApisOneResponses(not_found_response=out)
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.ApisOneResponses(unexpected_error_response=out)

        return res

    
    def connector_docs_one(self, request: operations.ConnectorDocsOneRequest) -> operations.ConnectorDocsOneResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/connector/connectors/{id}/docs/{doc_id}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ConnectorDocsOneResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetConnectorResponse])
                res.responses[r.status_code][content_type] = operations.ConnectorDocsOneResponses(get_connector_response=out)
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.ConnectorDocsOneResponses(unauthorized_response=out)
        elif r.status_code == 402:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.ConnectorDocsOneResponses(payment_required_response=out)
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.ConnectorDocsOneResponses(not_found_response=out)
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.ConnectorDocsOneResponses(unexpected_error_response=out)

        return res

    
    def connector_resources_one(self, request: operations.ConnectorResourcesOneRequest) -> operations.ConnectorResourcesOneResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/connector/connectors/{id}/resources/{resource_id}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ConnectorResourcesOneResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetConnectorResourceResponse])
                res.responses[r.status_code][content_type] = operations.ConnectorResourcesOneResponses(get_connector_resource_response=out)
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.ConnectorResourcesOneResponses(unauthorized_response=out)
        elif r.status_code == 402:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.ConnectorResourcesOneResponses(payment_required_response=out)
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.ConnectorResourcesOneResponses(not_found_response=out)
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.ConnectorResourcesOneResponses(unexpected_error_response=out)

        return res

    
    def connectors_all(self, request: operations.ConnectorsAllRequest) -> operations.ConnectorsAllResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/v1/apis"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ConnectorsAllResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetConnectorsResponse])
                res.responses[r.status_code][content_type] = operations.ConnectorsAllResponses(get_connectors_response=out)
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.ConnectorsAllResponses(bad_request_response=out)
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.ConnectorsAllResponses(unauthorized_response=out)
        elif r.status_code == 402:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.ConnectorsAllResponses(payment_required_response=out)
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.ConnectorsAllResponses(unexpected_error_response=out)

        return res

    
    def connectors_one(self, request: operations.ConnectorsOneRequest) -> operations.ConnectorsOneResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/connector/connectors/{id}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ConnectorsOneResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetConnectorResponse])
                res.responses[r.status_code][content_type] = operations.ConnectorsOneResponses(get_connector_response=out)
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.ConnectorsOneResponses(unauthorized_response=out)
        elif r.status_code == 402:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.ConnectorsOneResponses(payment_required_response=out)
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.ConnectorsOneResponses(not_found_response=out)
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.ConnectorsOneResponses(unexpected_error_response=out)

        return res

    