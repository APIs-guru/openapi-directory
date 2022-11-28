import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class Projects:
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

    
    def apigeeregistry_projects_locations_apis_create(self, request: operations.ApigeeregistryProjectsLocationsApisCreateRequest) -> operations.ApigeeregistryProjectsLocationsApisCreateResponse:
        r"""Creates a specified API.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/apis", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeregistryProjectsLocationsApisCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.API])
                res.api = out

        return res

    
    def apigeeregistry_projects_locations_apis_deployments_create(self, request: operations.ApigeeregistryProjectsLocationsApisDeploymentsCreateRequest) -> operations.ApigeeregistryProjectsLocationsApisDeploymentsCreateResponse:
        r"""Creates a specified deployment.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/deployments", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeregistryProjectsLocationsApisDeploymentsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIDeployment])
                res.api_deployment = out

        return res

    
    def apigeeregistry_projects_locations_apis_deployments_list(self, request: operations.ApigeeregistryProjectsLocationsApisDeploymentsListRequest) -> operations.ApigeeregistryProjectsLocationsApisDeploymentsListResponse:
        r"""Returns matching deployments.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/deployments", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeregistryProjectsLocationsApisDeploymentsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListAPIDeploymentsResponse])
                res.list_api_deployments_response = out

        return res

    
    def apigeeregistry_projects_locations_apis_list(self, request: operations.ApigeeregistryProjectsLocationsApisListRequest) -> operations.ApigeeregistryProjectsLocationsApisListResponse:
        r"""Returns matching APIs.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/apis", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeregistryProjectsLocationsApisListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListApisResponse])
                res.list_apis_response = out

        return res

    
    def apigeeregistry_projects_locations_apis_versions_create(self, request: operations.ApigeeregistryProjectsLocationsApisVersionsCreateRequest) -> operations.ApigeeregistryProjectsLocationsApisVersionsCreateResponse:
        r"""Creates a specified version.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/versions", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeregistryProjectsLocationsApisVersionsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIVersion])
                res.api_version = out

        return res

    
    def apigeeregistry_projects_locations_apis_versions_list(self, request: operations.ApigeeregistryProjectsLocationsApisVersionsListRequest) -> operations.ApigeeregistryProjectsLocationsApisVersionsListResponse:
        r"""Returns matching versions.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/versions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeregistryProjectsLocationsApisVersionsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListAPIVersionsResponse])
                res.list_api_versions_response = out

        return res

    
    def apigeeregistry_projects_locations_apis_versions_specs_create(self, request: operations.ApigeeregistryProjectsLocationsApisVersionsSpecsCreateRequest) -> operations.ApigeeregistryProjectsLocationsApisVersionsSpecsCreateResponse:
        r"""Creates a specified spec.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/specs", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeregistryProjectsLocationsApisVersionsSpecsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APISpec])
                res.api_spec = out

        return res

    
    def apigeeregistry_projects_locations_apis_versions_specs_delete_revision(self, request: operations.ApigeeregistryProjectsLocationsApisVersionsSpecsDeleteRevisionRequest) -> operations.ApigeeregistryProjectsLocationsApisVersionsSpecsDeleteRevisionResponse:
        r"""Deletes a revision of a spec.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}:deleteRevision", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeregistryProjectsLocationsApisVersionsSpecsDeleteRevisionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APISpec])
                res.api_spec = out

        return res

    
    def apigeeregistry_projects_locations_apis_versions_specs_list(self, request: operations.ApigeeregistryProjectsLocationsApisVersionsSpecsListRequest) -> operations.ApigeeregistryProjectsLocationsApisVersionsSpecsListResponse:
        r"""Returns matching specs.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/specs", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeregistryProjectsLocationsApisVersionsSpecsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListAPISpecsResponse])
                res.list_api_specs_response = out

        return res

    
    def apigeeregistry_projects_locations_apis_versions_specs_list_revisions(self, request: operations.ApigeeregistryProjectsLocationsApisVersionsSpecsListRevisionsRequest) -> operations.ApigeeregistryProjectsLocationsApisVersionsSpecsListRevisionsResponse:
        r"""Lists all revisions of a spec. Revisions are returned in descending order of revision creation time.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}:listRevisions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeregistryProjectsLocationsApisVersionsSpecsListRevisionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListAPISpecRevisionsResponse])
                res.list_api_spec_revisions_response = out

        return res

    
    def apigeeregistry_projects_locations_apis_versions_specs_patch(self, request: operations.ApigeeregistryProjectsLocationsApisVersionsSpecsPatchRequest) -> operations.ApigeeregistryProjectsLocationsApisVersionsSpecsPatchResponse:
        r"""Used to modify a specified spec.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeregistryProjectsLocationsApisVersionsSpecsPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APISpec])
                res.api_spec = out

        return res

    
    def apigeeregistry_projects_locations_apis_versions_specs_rollback(self, request: operations.ApigeeregistryProjectsLocationsApisVersionsSpecsRollbackRequest) -> operations.ApigeeregistryProjectsLocationsApisVersionsSpecsRollbackResponse:
        r"""Sets the current revision to a specified prior revision. Note that this creates a new revision with a new revision ID.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}:rollback", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeregistryProjectsLocationsApisVersionsSpecsRollbackResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APISpec])
                res.api_spec = out

        return res

    
    def apigeeregistry_projects_locations_apis_versions_specs_tag_revision(self, request: operations.ApigeeregistryProjectsLocationsApisVersionsSpecsTagRevisionRequest) -> operations.ApigeeregistryProjectsLocationsApisVersionsSpecsTagRevisionResponse:
        r"""Adds a tag to a specified revision of a spec.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}:tagRevision", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeregistryProjectsLocationsApisVersionsSpecsTagRevisionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APISpec])
                res.api_spec = out

        return res

    
    def apigeeregistry_projects_locations_artifacts_create(self, request: operations.ApigeeregistryProjectsLocationsArtifactsCreateRequest) -> operations.ApigeeregistryProjectsLocationsArtifactsCreateResponse:
        r"""Creates a specified artifact.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/artifacts", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeregistryProjectsLocationsArtifactsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Artifact])
                res.artifact = out

        return res

    
    def apigeeregistry_projects_locations_artifacts_get_contents(self, request: operations.ApigeeregistryProjectsLocationsArtifactsGetContentsRequest) -> operations.ApigeeregistryProjectsLocationsArtifactsGetContentsResponse:
        r"""Returns the contents of a specified artifact. If artifacts are stored with GZip compression, the default behavior is to return the artifact uncompressed (the mime_type response field indicates the exact format returned).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}:getContents", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeregistryProjectsLocationsArtifactsGetContentsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPBody])
                res.http_body = out

        return res

    
    def apigeeregistry_projects_locations_artifacts_list(self, request: operations.ApigeeregistryProjectsLocationsArtifactsListRequest) -> operations.ApigeeregistryProjectsLocationsArtifactsListResponse:
        r"""Returns matching artifacts.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/artifacts", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeregistryProjectsLocationsArtifactsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListArtifactsResponse])
                res.list_artifacts_response = out

        return res

    
    def apigeeregistry_projects_locations_artifacts_replace_artifact(self, request: operations.ApigeeregistryProjectsLocationsArtifactsReplaceArtifactRequest) -> operations.ApigeeregistryProjectsLocationsArtifactsReplaceArtifactResponse:
        r"""Used to replace a specified artifact.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeregistryProjectsLocationsArtifactsReplaceArtifactResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Artifact])
                res.artifact = out

        return res

    
    def apigeeregistry_projects_locations_instances_create(self, request: operations.ApigeeregistryProjectsLocationsInstancesCreateRequest) -> operations.ApigeeregistryProjectsLocationsInstancesCreateResponse:
        r"""Provisions instance resources for the Registry.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/instances", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeregistryProjectsLocationsInstancesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def apigeeregistry_projects_locations_list(self, request: operations.ApigeeregistryProjectsLocationsListRequest) -> operations.ApigeeregistryProjectsLocationsListResponse:
        r"""Lists information about the supported locations for this service.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}/locations", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeregistryProjectsLocationsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListLocationsResponse])
                res.list_locations_response = out

        return res

    
    def apigeeregistry_projects_locations_operations_cancel(self, request: operations.ApigeeregistryProjectsLocationsOperationsCancelRequest) -> operations.ApigeeregistryProjectsLocationsOperationsCancelResponse:
        r"""Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}:cancel", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeregistryProjectsLocationsOperationsCancelResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def apigeeregistry_projects_locations_operations_delete(self, request: operations.ApigeeregistryProjectsLocationsOperationsDeleteRequest) -> operations.ApigeeregistryProjectsLocationsOperationsDeleteResponse:
        r"""Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeregistryProjectsLocationsOperationsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def apigeeregistry_projects_locations_operations_get(self, request: operations.ApigeeregistryProjectsLocationsOperationsGetRequest) -> operations.ApigeeregistryProjectsLocationsOperationsGetResponse:
        r"""Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeregistryProjectsLocationsOperationsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def apigeeregistry_projects_locations_operations_list(self, request: operations.ApigeeregistryProjectsLocationsOperationsListRequest) -> operations.ApigeeregistryProjectsLocationsOperationsListResponse:
        r"""Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `\"/v1/{name=users/*}/operations\"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}/operations", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeregistryProjectsLocationsOperationsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListOperationsResponse])
                res.list_operations_response = out

        return res

    
    def apigeeregistry_projects_locations_runtime_get_iam_policy(self, request: operations.ApigeeregistryProjectsLocationsRuntimeGetIamPolicyRequest) -> operations.ApigeeregistryProjectsLocationsRuntimeGetIamPolicyResponse:
        r"""Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{resource}:getIamPolicy", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeregistryProjectsLocationsRuntimeGetIamPolicyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Policy])
                res.policy = out

        return res

    
    def apigeeregistry_projects_locations_runtime_set_iam_policy(self, request: operations.ApigeeregistryProjectsLocationsRuntimeSetIamPolicyRequest) -> operations.ApigeeregistryProjectsLocationsRuntimeSetIamPolicyResponse:
        r"""Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{resource}:setIamPolicy", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeregistryProjectsLocationsRuntimeSetIamPolicyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Policy])
                res.policy = out

        return res

    
    def apigeeregistry_projects_locations_runtime_test_iam_permissions(self, request: operations.ApigeeregistryProjectsLocationsRuntimeTestIamPermissionsRequest) -> operations.ApigeeregistryProjectsLocationsRuntimeTestIamPermissionsResponse:
        r"""Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may \"fail open\" without warning.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{resource}:testIamPermissions", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ApigeeregistryProjectsLocationsRuntimeTestIamPermissionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TestIamPermissionsResponse])
                res.test_iam_permissions_response = out

        return res

    