import requests
from typing import List,Optional
from sdk.models import shared, operations
from . import utils

class SecretScanning:
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

    
    def secret_scanning_get_alert(self, request: operations.SecretScanningGetAlertRequest) -> operations.SecretScanningGetAlertResponse:
        r"""Get a secret scanning alert
        Gets a single secret scanning alert detected in a private repository. To use this endpoint, you must be an administrator for the repository or organization, and you must use an access token with the `repo` scope or `security_events` scope.
        
        GitHub Apps must have the `secret_scanning_alerts` read permission to use this endpoint.
        https://docs.github.com/enterprise-server@3.1/rest/reference/secret-scanning#get-a-secret-scanning-alert - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SecretScanningGetAlertResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SecretScanningAlert])
                res.secret_scanning_alert = out
        elif r.status_code == 404:
            pass
        elif r.status_code == 503:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.SecretScanningGetAlert503ApplicationJSON])
                res.secret_scanning_get_alert_503_application_json_object = out

        return res

    
    def secret_scanning_list_alerts_for_repo(self, request: operations.SecretScanningListAlertsForRepoRequest) -> operations.SecretScanningListAlertsForRepoResponse:
        r"""List secret scanning alerts for a repository
        Lists all secret scanning alerts for a private repository, from newest to oldest. To use this endpoint, you must be an administrator for the repository or organization, and you must use an access token with the `repo` scope or `security_events` scope.
        
        GitHub Apps must have the `secret_scanning_alerts` read permission to use this endpoint.
        https://docs.github.com/enterprise-server@3.1/rest/reference/secret-scanning#list-secret-scanning-alerts-for-a-repository - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/secret-scanning/alerts", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SecretScanningListAlertsForRepoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.SecretScanningAlert]])
                res.secret_scanning_alerts = out
        elif r.status_code == 404:
            pass
        elif r.status_code == 503:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.SecretScanningListAlertsForRepo503ApplicationJSON])
                res.secret_scanning_list_alerts_for_repo_503_application_json_object = out

        return res

    