import warnings
import requests
from typing import List,Optional
from sdk.models import operations, shared
from . import utils


SERVERS = [
	"https://baremetalsolution.googleapis.com/",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
            
    

    
    def baremetalsolution_projects_locations_submit_provisioning_config(self, request: operations.BaremetalsolutionProjectsLocationsSubmitProvisioningConfigRequest) -> operations.BaremetalsolutionProjectsLocationsSubmitProvisioningConfigResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1alpha1/{project}/{location}:submitProvisioningConfig", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.BaremetalsolutionProjectsLocationsSubmitProvisioningConfigResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProvisioningConfig])
                res.provisioning_config = out

        return res

    
    def baremetalsolution_projects_provisioning_quotas_list(self, request: operations.BaremetalsolutionProjectsProvisioningQuotasListRequest) -> operations.BaremetalsolutionProjectsProvisioningQuotasListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1alpha1/{parent}/provisioningQuotas", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BaremetalsolutionProjectsProvisioningQuotasListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListProvisioningQuotasResponse])
                res.list_provisioning_quotas_response = out

        return res

    