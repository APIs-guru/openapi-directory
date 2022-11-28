import requests
from typing import List,Optional
from sdk.models import shared, operations
from . import utils

class Versions:
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

    
    def create_artifact_version(self, request: operations.CreateArtifactVersionRequest) -> operations.CreateArtifactVersionResponse:
        r"""Create artifact version
        Creates a new version of the artifact by uploading new content.  The configured rules for
        the artifact are applied, and if they all pass, the new content is added as the most recent 
        version of the artifact.  If any of the rules fail, an error is returned.
        
        The body of the request should be the raw content of the new artifact version.  This 
        is typically in JSON format for *most* of the supported types, but may be in another 
        format for a few (for example, `PROTOBUF`).
        
        The registry attempts to figure out what kind of artifact is being added from the
        following supported list:
        
        * Avro (`AVRO`)
        * Protobuf (`PROTOBUF`)
        * Protobuf File Descriptor (`PROTOBUF_FD`)
        * JSON Schema (`JSON`)
        * Kafka Connect (`KCONNECT`)
        * OpenAPI (`OPENAPI`)
        * AsyncAPI (`ASYNCAPI`)
        * GraphQL (`GRAPHQL`)
        * Web Services Description Language (`WSDL`)
        * XML Schema (`XSD`)
        
        Alternatively, you can explicitly specify the artifact type using the `X-Registry-ArtifactType` 
        HTTP request header, or by including a hint in the request's `Content-Type`.
        
        For example:
        
        ```
        Content-Type: application/json; artifactType=AVRO
        ```
        
        This operation can fail for the following reasons:
        
        * Provided content (request body) was empty (HTTP error `400`)
        * No artifact with this `artifactId` exists (HTTP error `404`)
        * The new content violates one of the rules configured for the artifact (HTTP error `409`)
        * A server error occurred (HTTP error `500`)
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/artifacts/{artifactId}/versions", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateArtifactVersionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VersionMetaData])
                res.version_meta_data = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 409:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def get_artifact_version(self, request: operations.GetArtifactVersionRequest) -> operations.GetArtifactVersionResponse:
        r"""Get artifact version
        Retrieves a single version of the artifact content.  Both the `artifactId` and the
        unique `version` number must be provided.  The `Content-Type` of the response depends 
        on the artifact type.  In most cases, this is `application/json`, but for some types 
        it may be different (for example, `PROTOBUF`).
        
        This operation can fail for the following reasons:
        
        * No artifact with this `artifactId` exists (HTTP error `404`)
        * No version with this `version` exists (HTTP error `404`)
        * A server error occurred (HTTP error `500`)
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/artifacts/{artifactId}/versions/{version}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetArtifactVersionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
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

    
    def list_artifact_versions(self, request: operations.ListArtifactVersionsRequest) -> operations.ListArtifactVersionsResponse:
        r"""List artifact versions
        Returns a list of all version numbers for the artifact.
        
        This operation can fail for the following reasons:
        
        * No artifact with this `artifactId` exists (HTTP error `404`)
        * A server error occurred (HTTP error `500`)
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/artifacts/{artifactId}/versions", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ListArtifactVersionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[int]])
                res.list_artifact_versions_200_application_json_int64_integers = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def search_versions(self, request: operations.SearchVersionsRequest) -> operations.SearchVersionsResponse:
        r"""Search artifact versions
        Searches for versions of a specific artifact.  This is typically used to get a listing
        of all versions of an artifact (for example, in a user interface).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/search/artifacts/{artifactId}/versions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchVersionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VersionSearchResults])
                res.version_search_results = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def update_artifact_version_state(self, request: operations.UpdateArtifactVersionStateRequest) -> operations.UpdateArtifactVersionStateResponse:
        r"""Update artifact version state
        Updates the state of a specific version of an artifact.  For example, you can use 
        this operation to disable a specific version.
        
        The following state changes are supported:
        
        * Enabled -> Disabled
        * Enabled -> Deprecated
        * Enabled -> Deleted
        * Disabled -> Enabled
        * Disabled -> Deleted
        * Disabled -> Deprecated
        * Deprecated -> Deleted
        
        This operation can fail for the following reasons:
        
        * No artifact with this `artifactId` exists (HTTP error `404`)
        * No version with this `version` exists (HTTP error `404`)
        * Artifact version cannot transition to the given state (HTTP error `400`)
        * A server error occurred (HTTP error `500`)
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/artifacts/{artifactId}/versions/{version}/state", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateArtifactVersionStateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    