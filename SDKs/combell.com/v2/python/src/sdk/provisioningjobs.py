import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class ProvisioningJobs:
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

    
    def get_provisioningjobs_job_id_(self, request: operations.GetProvisioningjobsJobIDRequest) -> operations.GetProvisioningjobsJobIDResponse:
        r"""Detail of a provisioning job
        Provisioning failures may occur. Contact support in the event of a failure or wait for error resolution.<br />
        Do NOT retry provisioning until the job reports finished or cancelled.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/provisioningjobs/{jobId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetProvisioningjobsJobIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProvisioningJobInfo])
                res.provisioning_job_info = out
        elif r.status_code == 201:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProvisioningJobCompletion])
                res.provisioning_job_completion = out

        return res

    