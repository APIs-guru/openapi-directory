import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Internalappsharingartifacts:
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

    
    def androidpublisher_internalappsharingartifacts_uploadapk(self, request: operations.AndroidpublisherInternalappsharingartifactsUploadapkRequest) -> operations.AndroidpublisherInternalappsharingartifactsUploadapkResponse:
        r"""Uploads an APK to internal app sharing. If you are using the Google API client libraries, please increase the timeout of the http request before calling this endpoint (a timeout of 2 minutes is recommended). See [Timeouts and Errors](https://developers.google.com/api-client-library/java/google-api-java-client/errors) for an example in java.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/androidpublisher/v3/applications/internalappsharing/{packageName}/artifacts/apk", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherInternalappsharingartifactsUploadapkResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.InternalAppSharingArtifact])
                res.internal_app_sharing_artifact = out

        return res

    
    def androidpublisher_internalappsharingartifacts_uploadbundle(self, request: operations.AndroidpublisherInternalappsharingartifactsUploadbundleRequest) -> operations.AndroidpublisherInternalappsharingartifactsUploadbundleResponse:
        r"""Uploads an app bundle to internal app sharing. If you are using the Google API client libraries, please increase the timeout of the http request before calling this endpoint (a timeout of 2 minutes is recommended). See [Timeouts and Errors](https://developers.google.com/api-client-library/java/google-api-java-client/errors) for an example in java.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/androidpublisher/v3/applications/internalappsharing/{packageName}/artifacts/bundle", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherInternalappsharingartifactsUploadbundleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.InternalAppSharingArtifact])
                res.internal_app_sharing_artifact = out

        return res

    