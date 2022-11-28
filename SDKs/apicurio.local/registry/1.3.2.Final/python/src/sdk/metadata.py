import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class Metadata:
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

    
    def delete_artifact_version_meta_data(self, request: operations.DeleteArtifactVersionMetaDataRequest) -> operations.DeleteArtifactVersionMetaDataResponse:
        r"""Delete artifact version metadata
        Deletes the user-editable metadata properties of the artifact version.  Any properties
        that are not user-editable are preserved.
        
        This operation can fail for the following reasons:
        
        * No artifact with this `artifactId` exists (HTTP error `404`)
        * No version with this `version` exists (HTTP error `404`)
        * A server error occurred (HTTP error `500`)
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/artifacts/{artifactId}/versions/{version}/meta", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteArtifactVersionMetaDataResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def get_artifact_meta_data(self, request: operations.GetArtifactMetaDataRequest) -> operations.GetArtifactMetaDataResponse:
        r"""Get artifact metadata
        Gets the metadata for an artifact in the registry.  The returned metadata includes
        both generated (read-only) and editable metadata (such as name and description).
        
        This operation can fail for the following reasons:
        
        * No artifact with this `artifactId` exists (HTTP error `404`)
        * A server error occurred (HTTP error `500`)
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/artifacts/{artifactId}/meta", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetArtifactMetaDataResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ArtifactMetaData])
                res.artifact_meta_data = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def get_artifact_meta_data_by_content(self, request: operations.GetArtifactMetaDataByContentRequest) -> operations.GetArtifactMetaDataByContentResponse:
        r"""Get artifact metadata by content
        Gets the metadata for an artifact that matches the raw content.  Searches the registry
        for a version of the given artifact matching the content provided in the body of the
        POST.
        
        This operation can fail for the following reasons:
        
        * Provided content (request body) was empty (HTTP error `400`)
        * No artifact with the `artifactId` exists (HTTP error `404`)
        * No artifact version matching the provided content exists (HTTP error `404`)
        * A server error occurred (HTTP error `500`)
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/artifacts/{artifactId}/meta", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetArtifactMetaDataByContentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ArtifactMetaData])
                res.artifact_meta_data = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def get_artifact_meta_data_by_global_id(self, request: operations.GetArtifactMetaDataByGlobalIDRequest) -> operations.GetArtifactMetaDataByGlobalIDResponse:
        r"""Get global artifact metadata
        Gets the metadata for an artifact version in the registry using its globally unique
        identifier.  The returned metadata includes both generated (read-only) and editable
        metadata (such as name and description).
        
        This operation may fail for one of the following reasons:
        
        * No artifact version with this `globalId` exists (HTTP error `404`)
        * A server error occurred (HTTP error `500`)
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ids/{globalId}/meta", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetArtifactMetaDataByGlobalIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ArtifactMetaData])
                res.artifact_meta_data = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def get_artifact_version_meta_data(self, request: operations.GetArtifactVersionMetaDataRequest) -> operations.GetArtifactVersionMetaDataResponse:
        r"""Get artifact version metadata
        Retrieves the metadata for a single version of the artifact.  The version metadata is 
        a subset of the artifact metadata and only includes the metadata that is specific to
        the version (for example, this doesn't include `modifiedOn`).
        
        This operation can fail for the following reasons:
        
        * No artifact with this `artifactId` exists (HTTP error `404`)
        * No version with this `version` exists (HTTP error `404`)
        * A server error occurred (HTTP error `500`)
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/artifacts/{artifactId}/versions/{version}/meta", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetArtifactVersionMetaDataResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VersionMetaData])
                res.version_meta_data = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def update_artifact_meta_data(self, request: operations.UpdateArtifactMetaDataRequest) -> operations.UpdateArtifactMetaDataResponse:
        r"""Update artifact metadata
        Updates the editable parts of the artifact's metadata.  Not all metadata fields can
        be updated.  For example, `createdOn` and `createdBy` are both read-only properties.
        
        This operation can fail for the following reasons:
        
        * No artifact with the `artifactId` exists (HTTP error `404`)
        * A server error occurred (HTTP error `500`)
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/artifacts/{artifactId}/meta", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateArtifactMetaDataResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def update_artifact_version_meta_data(self, request: operations.UpdateArtifactVersionMetaDataRequest) -> operations.UpdateArtifactVersionMetaDataResponse:
        r"""Update artifact version metadata
        Updates the user-editable portion of the artifact version's metadata.  Only some of 
        the metadata fields are editable by the user.  For example, `description` is editable, 
        but `createdOn` is not.
        
        This operation can fail for the following reasons:
        
        * No artifact with this `artifactId` exists (HTTP error `404`)
        * No version with this `version` exists (HTTP error `404`)
        * A server error occurred (HTTP error `500`)
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/artifacts/{artifactId}/versions/{version}/meta", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateArtifactVersionMetaDataResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    