import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Grouplicenses:
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

    
    def androidenterprise_grouplicenses_get(self, request: operations.AndroidenterpriseGrouplicensesGetRequest) -> operations.AndroidenterpriseGrouplicensesGetResponse:
        r"""Retrieves details of an enterprise's group license for a product. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/androidenterprise/v1/enterprises/{enterpriseId}/groupLicenses/{groupLicenseId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidenterpriseGrouplicensesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GroupLicense])
                res.group_license = out

        return res

    
    def androidenterprise_grouplicenses_list(self, request: operations.AndroidenterpriseGrouplicensesListRequest) -> operations.AndroidenterpriseGrouplicensesListResponse:
        r"""Retrieves IDs of all products for which the enterprise has a group license. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/androidenterprise/v1/enterprises/{enterpriseId}/groupLicenses", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidenterpriseGrouplicensesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GroupLicensesListResponse])
                res.group_licenses_list_response = out

        return res

    