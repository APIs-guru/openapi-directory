import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Keys:
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

    
    def apikeys_keys_lookup_key(self, request: operations.ApikeysKeysLookupKeyRequest) -> operations.ApikeysKeysLookupKeyResponse:
        r"""Find the parent project and resource name of the API key that matches the key string in the request. If the API key has been purged, resource name will not be set. The service account must have the `apikeys.keys.lookup` permission on the parent project.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v2/keys:lookupKey"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ApikeysKeysLookupKeyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V2LookupKeyResponse])
                res.v2_lookup_key_response = out

        return res

    