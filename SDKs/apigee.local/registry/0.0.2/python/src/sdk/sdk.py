

import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils




SERVERS = [
	"http://apigee.local",
]


class SDK:
    

    _client: requests.Session
    _security_client: requests.Session
    
    _server_url: str = SERVERS[0]
    _language: str = "python"
    _sdk_version: str = "0.0.1"
    _gen_version: str = "internal"

    def __init__(self) -> None:
        self._client = requests.Session()
        self._security_client = requests.Session()
        


    def config_server_url(self, server_url: str, params: dict[str, str]):
        if params is not None:
            self._server_url = utils.replace_parameters(server_url, params)
        else:
            self._server_url = server_url

        
    

    def config_client(self, client: requests.Session):
        self._client = client
        
    
    
    
    def registry_create_api(self, request: operations.RegistryCreateAPIRequest) -> operations.RegistryCreateAPIResponse:
        r"""CreateApi creates a specified API.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/projects/{project}/apis", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RegistryCreateAPIResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.api = out

        return res

    
    def registry_create_api_spec(self, request: operations.RegistryCreateAPISpecRequest) -> operations.RegistryCreateAPISpecResponse:
        r"""CreateApiSpec creates a specified spec.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/projects/{project}/apis/{api}/versions/{version}/specs", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RegistryCreateAPISpecResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.api_spec = out

        return res

    
    def registry_create_api_version(self, request: operations.RegistryCreateAPIVersionRequest) -> operations.RegistryCreateAPIVersionResponse:
        r"""CreateApiVersion creates a specified version.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/projects/{project}/apis/{api}/versions", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RegistryCreateAPIVersionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.api_version = out

        return res

    
    def registry_create_artifact(self, request: operations.RegistryCreateArtifactRequest) -> operations.RegistryCreateArtifactResponse:
        r"""CreateArtifact creates a specified artifact.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/projects/{project}/artifacts", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RegistryCreateArtifactResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.artifact = out

        return res

    
    def registry_create_project(self, request: operations.RegistryCreateProjectRequest) -> operations.RegistryCreateProjectResponse:
        r"""CreateProject creates a specified project.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/projects"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RegistryCreateProjectResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.project = out

        return res

    
    def registry_delete_api(self, request: operations.RegistryDeleteAPIRequest) -> operations.RegistryDeleteAPIResponse:
        r"""DeleteApi removes a specified API and all of the resources that it owns.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/projects/{project}/apis/{api}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.RegistryDeleteAPIResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def registry_delete_api_spec(self, request: operations.RegistryDeleteAPISpecRequest) -> operations.RegistryDeleteAPISpecResponse:
        r"""DeleteApiSpec removes a specified spec, all revisions, and all child resources (e.g. artifacts).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/projects/{project}/apis/{api}/versions/{version}/specs/{spec}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.RegistryDeleteAPISpecResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def registry_delete_api_spec_revision(self, request: operations.RegistryDeleteAPISpecRevisionRequest) -> operations.RegistryDeleteAPISpecRevisionResponse:
        r"""DeleteApiSpecRevision deletes a revision of a spec.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/projects/{project}/apis/{api}/versions/{version}/specs/{spec}:deleteRevision", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.RegistryDeleteAPISpecRevisionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def registry_delete_api_version(self, request: operations.RegistryDeleteAPIVersionRequest) -> operations.RegistryDeleteAPIVersionResponse:
        r"""DeleteApiVersion removes a specified version and all of the resources that it owns.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/projects/{project}/apis/{api}/versions/{version}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.RegistryDeleteAPIVersionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def registry_delete_artifact(self, request: operations.RegistryDeleteArtifactRequest) -> operations.RegistryDeleteArtifactResponse:
        r"""DeleteArtifact removes a specified artifact.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/projects/{project}/artifacts/{artifact}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.RegistryDeleteArtifactResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def registry_delete_project(self, request: operations.RegistryDeleteProjectRequest) -> operations.RegistryDeleteProjectResponse:
        r"""DeleteProject removes a specified project and all of the resources that it owns.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/projects/{project}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.RegistryDeleteProjectResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def registry_get_api(self, request: operations.RegistryGetAPIRequest) -> operations.RegistryGetAPIResponse:
        r"""GetApi returns a specified API.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/projects/{project}/apis/{api}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.RegistryGetAPIResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.api = out

        return res

    
    def registry_get_api_spec(self, request: operations.RegistryGetAPISpecRequest) -> operations.RegistryGetAPISpecResponse:
        r"""GetApiSpec returns a specified spec.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/projects/{project}/apis/{api}/versions/{version}/specs/{spec}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.RegistryGetAPISpecResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.api_spec = out

        return res

    
    def registry_get_api_spec_contents(self, request: operations.RegistryGetAPISpecContentsRequest) -> operations.RegistryGetAPISpecContentsResponse:
        r"""GetApiSpecContents returns the contents of a specified spec.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/projects/{project}/apis/{api}/versions/{version}/specs/{spec}/contents", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.RegistryGetAPISpecContentsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def registry_get_api_version(self, request: operations.RegistryGetAPIVersionRequest) -> operations.RegistryGetAPIVersionResponse:
        r"""GetApiVersion returns a specified version.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/projects/{project}/apis/{api}/versions/{version}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.RegistryGetAPIVersionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.api_version = out

        return res

    
    def registry_get_artifact(self, request: operations.RegistryGetArtifactRequest) -> operations.RegistryGetArtifactResponse:
        r"""GetArtifact returns a specified artifact.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/projects/{project}/artifacts/{artifact}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.RegistryGetArtifactResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.artifact = out

        return res

    
    def registry_get_artifact_contents(self, request: operations.RegistryGetArtifactContentsRequest) -> operations.RegistryGetArtifactContentsResponse:
        r"""GetArtifactContents returns the contents of a specified artifact.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/projects/{project}/artifacts/{artifact}/contents", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.RegistryGetArtifactContentsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def registry_get_project(self, request: operations.RegistryGetProjectRequest) -> operations.RegistryGetProjectResponse:
        r"""GetProject returns a specified project.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/projects/{project}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.RegistryGetProjectResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.project = out

        return res

    
    def registry_get_status(self) -> operations.RegistryGetStatusResponse:
        r"""GetStatus returns the status of the service. GetStatus is for verifying open source deployments only and is not included in hosted versions of the API.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/status"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.RegistryGetStatusResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.status = out

        return res

    
    def registry_list_api_spec_revisions(self, request: operations.RegistryListAPISpecRevisionsRequest) -> operations.RegistryListAPISpecRevisionsResponse:
        r"""ListApiSpecRevisions lists all revisions of a spec. Revisions are returned in descending order of revision creation time.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/projects/{project}/apis/{api}/versions/{version}/specs/{spec}:listRevisions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RegistryListAPISpecRevisionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.list_api_spec_revisions_response = out

        return res

    
    def registry_list_api_specs(self, request: operations.RegistryListAPISpecsRequest) -> operations.RegistryListAPISpecsResponse:
        r"""ListApiSpecs returns matching specs.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/projects/{project}/apis/{api}/versions/{version}/specs", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RegistryListAPISpecsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.list_api_specs_response = out

        return res

    
    def registry_list_api_versions(self, request: operations.RegistryListAPIVersionsRequest) -> operations.RegistryListAPIVersionsResponse:
        r"""ListApiVersions returns matching versions.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/projects/{project}/apis/{api}/versions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RegistryListAPIVersionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.list_api_versions_response = out

        return res

    
    def registry_list_apis(self, request: operations.RegistryListApisRequest) -> operations.RegistryListApisResponse:
        r"""ListApis returns matching APIs.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/projects/{project}/apis", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RegistryListApisResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.list_apis_response = out

        return res

    
    def registry_list_artifacts(self, request: operations.RegistryListArtifactsRequest) -> operations.RegistryListArtifactsResponse:
        r"""ListArtifacts returns matching artifacts.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/projects/{project}/artifacts", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RegistryListArtifactsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.list_artifacts_response = out

        return res

    
    def registry_list_projects(self, request: operations.RegistryListProjectsRequest) -> operations.RegistryListProjectsResponse:
        r"""ListProjects returns matching projects.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/projects"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RegistryListProjectsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.list_projects_response = out

        return res

    
    def registry_replace_artifact(self, request: operations.RegistryReplaceArtifactRequest) -> operations.RegistryReplaceArtifactResponse:
        r"""ReplaceArtifact can be used to replace a specified artifact.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/projects/{project}/artifacts/{artifact}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RegistryReplaceArtifactResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.artifact = out

        return res

    
    def registry_rollback_api_spec(self, request: operations.RegistryRollbackAPISpecRequest) -> operations.RegistryRollbackAPISpecResponse:
        r"""RollbackApiSpec sets the current revision to a specified prior revision. Note that this creates a new revision with a new revision ID.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/projects/{project}/apis/{api}/versions/{version}/specs/{spec}:rollback", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RegistryRollbackAPISpecResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.api_spec = out

        return res

    
    def registry_tag_api_spec_revision(self, request: operations.RegistryTagAPISpecRevisionRequest) -> operations.RegistryTagAPISpecRevisionResponse:
        r"""TagApiSpecRevision adds a tag to a specified revision of a spec.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/projects/{project}/apis/{api}/versions/{version}/specs/{spec}:tagRevision", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RegistryTagAPISpecRevisionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.api_spec = out

        return res

    
    def registry_update_api(self, request: operations.RegistryUpdateAPIRequest) -> operations.RegistryUpdateAPIResponse:
        r"""UpdateApi can be used to modify a specified API.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/projects/{project}/apis/{api}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RegistryUpdateAPIResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.api = out

        return res

    
    def registry_update_api_spec(self, request: operations.RegistryUpdateAPISpecRequest) -> operations.RegistryUpdateAPISpecResponse:
        r"""UpdateApiSpec can be used to modify a specified spec.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/projects/{project}/apis/{api}/versions/{version}/specs/{spec}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RegistryUpdateAPISpecResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.api_spec = out

        return res

    
    def registry_update_api_version(self, request: operations.RegistryUpdateAPIVersionRequest) -> operations.RegistryUpdateAPIVersionResponse:
        r"""UpdateApiVersion can be used to modify a specified version.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/projects/{project}/apis/{api}/versions/{version}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RegistryUpdateAPIVersionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.api_version = out

        return res

    
    def registry_update_project(self, request: operations.RegistryUpdateProjectRequest) -> operations.RegistryUpdateProjectResponse:
        r"""UpdateProject can be used to modify a specified project.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/projects/{project}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RegistryUpdateProjectResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.project = out

        return res

    