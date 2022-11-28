import requests
from typing import Optional
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

    
    def artifactregistry_projects_locations_list(self, request: operations.ArtifactregistryProjectsLocationsListRequest) -> operations.ArtifactregistryProjectsLocationsListResponse:
        r"""Lists information about the supported locations for this service.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}/locations", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ArtifactregistryProjectsLocationsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListLocationsResponse])
                res.list_locations_response = out

        return res

    
    def artifactregistry_projects_locations_repositories_apt_artifacts_import(self, request: operations.ArtifactregistryProjectsLocationsRepositoriesAptArtifactsImportRequest) -> operations.ArtifactregistryProjectsLocationsRepositoriesAptArtifactsImportResponse:
        r"""Imports Apt artifacts. The returned Operation will complete once the resources are imported. Package, Version, and File resources are created based on the imported artifacts. Imported artifacts that conflict with existing resources are ignored.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/aptArtifacts:import", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ArtifactregistryProjectsLocationsRepositoriesAptArtifactsImportResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def artifactregistry_projects_locations_repositories_apt_artifacts_upload(self, request: operations.ArtifactregistryProjectsLocationsRepositoriesAptArtifactsUploadRequest) -> operations.ArtifactregistryProjectsLocationsRepositoriesAptArtifactsUploadResponse:
        r"""Directly uploads an Apt artifact. The returned Operation will complete once the resources are uploaded. Package, Version, and File resources are created based on the imported artifact. Imported artifacts that conflict with existing resources are ignored.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/aptArtifacts:create", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ArtifactregistryProjectsLocationsRepositoriesAptArtifactsUploadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UploadAptArtifactMediaResponse])
                res.upload_apt_artifact_media_response = out

        return res

    
    def artifactregistry_projects_locations_repositories_create(self, request: operations.ArtifactregistryProjectsLocationsRepositoriesCreateRequest) -> operations.ArtifactregistryProjectsLocationsRepositoriesCreateResponse:
        r"""Creates a repository. The returned Operation will finish once the repository has been created. Its response will be the created Repository.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/repositories", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ArtifactregistryProjectsLocationsRepositoriesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def artifactregistry_projects_locations_repositories_docker_images_list(self, request: operations.ArtifactregistryProjectsLocationsRepositoriesDockerImagesListRequest) -> operations.ArtifactregistryProjectsLocationsRepositoriesDockerImagesListResponse:
        r"""Lists docker images.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/dockerImages", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ArtifactregistryProjectsLocationsRepositoriesDockerImagesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListDockerImagesResponse])
                res.list_docker_images_response = out

        return res

    
    def artifactregistry_projects_locations_repositories_files_list(self, request: operations.ArtifactregistryProjectsLocationsRepositoriesFilesListRequest) -> operations.ArtifactregistryProjectsLocationsRepositoriesFilesListResponse:
        r"""Lists files.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/files", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ArtifactregistryProjectsLocationsRepositoriesFilesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListFilesResponse])
                res.list_files_response = out

        return res

    
    def artifactregistry_projects_locations_repositories_get_iam_policy(self, request: operations.ArtifactregistryProjectsLocationsRepositoriesGetIamPolicyRequest) -> operations.ArtifactregistryProjectsLocationsRepositoriesGetIamPolicyResponse:
        r"""Gets the IAM policy for a given resource.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{resource}:getIamPolicy", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ArtifactregistryProjectsLocationsRepositoriesGetIamPolicyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Policy])
                res.policy = out

        return res

    
    def artifactregistry_projects_locations_repositories_kfp_artifacts_upload(self, request: operations.ArtifactregistryProjectsLocationsRepositoriesKfpArtifactsUploadRequest) -> operations.ArtifactregistryProjectsLocationsRepositoriesKfpArtifactsUploadResponse:
        r"""Directly uploads a KFP artifact. The returned Operation will complete once the resource is uploaded. Package, Version, and File resources will be created based on the uploaded artifact. Uploaded artifacts that conflict with existing resources will be overwritten.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/kfpArtifacts:create", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ArtifactregistryProjectsLocationsRepositoriesKfpArtifactsUploadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UploadKfpArtifactMediaResponse])
                res.upload_kfp_artifact_media_response = out

        return res

    
    def artifactregistry_projects_locations_repositories_list(self, request: operations.ArtifactregistryProjectsLocationsRepositoriesListRequest) -> operations.ArtifactregistryProjectsLocationsRepositoriesListResponse:
        r"""Lists repositories.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/repositories", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ArtifactregistryProjectsLocationsRepositoriesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListRepositoriesResponse])
                res.list_repositories_response = out

        return res

    
    def artifactregistry_projects_locations_repositories_maven_artifacts_list(self, request: operations.ArtifactregistryProjectsLocationsRepositoriesMavenArtifactsListRequest) -> operations.ArtifactregistryProjectsLocationsRepositoriesMavenArtifactsListResponse:
        r"""Lists maven artifacts.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/mavenArtifacts", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ArtifactregistryProjectsLocationsRepositoriesMavenArtifactsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListMavenArtifactsResponse])
                res.list_maven_artifacts_response = out

        return res

    
    def artifactregistry_projects_locations_repositories_npm_packages_list(self, request: operations.ArtifactregistryProjectsLocationsRepositoriesNpmPackagesListRequest) -> operations.ArtifactregistryProjectsLocationsRepositoriesNpmPackagesListResponse:
        r"""Lists npm packages.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/npmPackages", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ArtifactregistryProjectsLocationsRepositoriesNpmPackagesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListNpmPackagesResponse])
                res.list_npm_packages_response = out

        return res

    
    def artifactregistry_projects_locations_repositories_packages_list(self, request: operations.ArtifactregistryProjectsLocationsRepositoriesPackagesListRequest) -> operations.ArtifactregistryProjectsLocationsRepositoriesPackagesListResponse:
        r"""Lists packages.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/packages", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ArtifactregistryProjectsLocationsRepositoriesPackagesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListPackagesResponse])
                res.list_packages_response = out

        return res

    
    def artifactregistry_projects_locations_repositories_packages_tags_create(self, request: operations.ArtifactregistryProjectsLocationsRepositoriesPackagesTagsCreateRequest) -> operations.ArtifactregistryProjectsLocationsRepositoriesPackagesTagsCreateResponse:
        r"""Creates a tag.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/tags", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ArtifactregistryProjectsLocationsRepositoriesPackagesTagsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Tag])
                res.tag = out

        return res

    
    def artifactregistry_projects_locations_repositories_packages_tags_list(self, request: operations.ArtifactregistryProjectsLocationsRepositoriesPackagesTagsListRequest) -> operations.ArtifactregistryProjectsLocationsRepositoriesPackagesTagsListResponse:
        r"""Lists tags.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/tags", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ArtifactregistryProjectsLocationsRepositoriesPackagesTagsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListTagsResponse])
                res.list_tags_response = out

        return res

    
    def artifactregistry_projects_locations_repositories_packages_tags_patch(self, request: operations.ArtifactregistryProjectsLocationsRepositoriesPackagesTagsPatchRequest) -> operations.ArtifactregistryProjectsLocationsRepositoriesPackagesTagsPatchResponse:
        r"""Updates a tag.
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

        res = operations.ArtifactregistryProjectsLocationsRepositoriesPackagesTagsPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Tag])
                res.tag = out

        return res

    
    def artifactregistry_projects_locations_repositories_packages_versions_delete(self, request: operations.ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsDeleteRequest) -> operations.ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsDeleteResponse:
        r"""Deletes a version and all of its content. The returned operation will complete once the version has been deleted.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def artifactregistry_projects_locations_repositories_packages_versions_list(self, request: operations.ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListRequest) -> operations.ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListResponse:
        r"""Lists versions.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/versions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListVersionsResponse])
                res.list_versions_response = out

        return res

    
    def artifactregistry_projects_locations_repositories_python_packages_get(self, request: operations.ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetRequest) -> operations.ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetResponse:
        r"""Gets a python package.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PythonPackage])
                res.python_package = out

        return res

    
    def artifactregistry_projects_locations_repositories_python_packages_list(self, request: operations.ArtifactregistryProjectsLocationsRepositoriesPythonPackagesListRequest) -> operations.ArtifactregistryProjectsLocationsRepositoriesPythonPackagesListResponse:
        r"""Lists python packages.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/pythonPackages", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ArtifactregistryProjectsLocationsRepositoriesPythonPackagesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListPythonPackagesResponse])
                res.list_python_packages_response = out

        return res

    
    def artifactregistry_projects_locations_repositories_set_iam_policy(self, request: operations.ArtifactregistryProjectsLocationsRepositoriesSetIamPolicyRequest) -> operations.ArtifactregistryProjectsLocationsRepositoriesSetIamPolicyResponse:
        r"""Updates the IAM policy for a given resource.
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

        res = operations.ArtifactregistryProjectsLocationsRepositoriesSetIamPolicyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Policy])
                res.policy = out

        return res

    
    def artifactregistry_projects_locations_repositories_test_iam_permissions(self, request: operations.ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsRequest) -> operations.ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsResponse:
        r"""Tests if the caller has a list of permissions on a resource.
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

        res = operations.ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TestIamPermissionsResponse])
                res.test_iam_permissions_response = out

        return res

    
    def artifactregistry_projects_locations_repositories_yum_artifacts_import(self, request: operations.ArtifactregistryProjectsLocationsRepositoriesYumArtifactsImportRequest) -> operations.ArtifactregistryProjectsLocationsRepositoriesYumArtifactsImportResponse:
        r"""Imports Yum (RPM) artifacts. The returned Operation will complete once the resources are imported. Package, Version, and File resources are created based on the imported artifacts. Imported artifacts that conflict with existing resources are ignored.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/yumArtifacts:import", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ArtifactregistryProjectsLocationsRepositoriesYumArtifactsImportResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def artifactregistry_projects_locations_repositories_yum_artifacts_upload(self, request: operations.ArtifactregistryProjectsLocationsRepositoriesYumArtifactsUploadRequest) -> operations.ArtifactregistryProjectsLocationsRepositoriesYumArtifactsUploadResponse:
        r"""Directly uploads a Yum artifact. The returned Operation will complete once the resources are uploaded. Package, Version, and File resources are created based on the imported artifact. Imported artifacts that conflict with existing resources are ignored.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/yumArtifacts:create", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ArtifactregistryProjectsLocationsRepositoriesYumArtifactsUploadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UploadYumArtifactMediaResponse])
                res.upload_yum_artifact_media_response = out

        return res

    