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

    
    def bigtableadmin_projects_instances_app_profiles_create(self, request: operations.BigtableadminProjectsInstancesAppProfilesCreateRequest) -> operations.BigtableadminProjectsInstancesAppProfilesCreateResponse:
        r"""Creates an app profile within an instance.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{parent}/appProfiles", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.BigtableadminProjectsInstancesAppProfilesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AppProfile])
                res.app_profile = out

        return res

    
    def bigtableadmin_projects_instances_app_profiles_list(self, request: operations.BigtableadminProjectsInstancesAppProfilesListRequest) -> operations.BigtableadminProjectsInstancesAppProfilesListResponse:
        r"""Lists information about app profiles in an instance.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{parent}/appProfiles", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BigtableadminProjectsInstancesAppProfilesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListAppProfilesResponse])
                res.list_app_profiles_response = out

        return res

    
    def bigtableadmin_projects_instances_clusters_backups_create(self, request: operations.BigtableadminProjectsInstancesClustersBackupsCreateRequest) -> operations.BigtableadminProjectsInstancesClustersBackupsCreateResponse:
        r"""Starts creating a new Cloud Bigtable Backup. The returned backup long-running operation can be used to track creation of the backup. The metadata field type is CreateBackupMetadata. The response field type is Backup, if successful. Cancelling the returned operation will stop the creation and delete the backup.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{parent}/backups", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.BigtableadminProjectsInstancesClustersBackupsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def bigtableadmin_projects_instances_clusters_backups_list(self, request: operations.BigtableadminProjectsInstancesClustersBackupsListRequest) -> operations.BigtableadminProjectsInstancesClustersBackupsListResponse:
        r"""Lists Cloud Bigtable backups. Returns both completed and pending backups.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{parent}/backups", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BigtableadminProjectsInstancesClustersBackupsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListBackupsResponse])
                res.list_backups_response = out

        return res

    
    def bigtableadmin_projects_instances_clusters_backups_patch(self, request: operations.BigtableadminProjectsInstancesClustersBackupsPatchRequest) -> operations.BigtableadminProjectsInstancesClustersBackupsPatchResponse:
        r"""Updates a pending or completed Cloud Bigtable Backup.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{name}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.BigtableadminProjectsInstancesClustersBackupsPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Backup])
                res.backup = out

        return res

    
    def bigtableadmin_projects_instances_clusters_create(self, request: operations.BigtableadminProjectsInstancesClustersCreateRequest) -> operations.BigtableadminProjectsInstancesClustersCreateResponse:
        r"""Creates a cluster within an instance.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{parent}/clusters", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.BigtableadminProjectsInstancesClustersCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def bigtableadmin_projects_instances_clusters_list(self, request: operations.BigtableadminProjectsInstancesClustersListRequest) -> operations.BigtableadminProjectsInstancesClustersListResponse:
        r"""Lists information about clusters in an instance.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{parent}/clusters", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BigtableadminProjectsInstancesClustersListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListClustersResponse])
                res.list_clusters_response = out

        return res

    
    def bigtableadmin_projects_instances_clusters_update(self, request: operations.BigtableadminProjectsInstancesClustersUpdateRequest) -> operations.BigtableadminProjectsInstancesClustersUpdateResponse:
        r"""Updates a cluster within an instance. UpdateCluster is deprecated. Please use PartialUpdateCluster instead.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{name}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.BigtableadminProjectsInstancesClustersUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def bigtableadmin_projects_instances_create(self, request: operations.BigtableadminProjectsInstancesCreateRequest) -> operations.BigtableadminProjectsInstancesCreateResponse:
        r"""Create an instance within a project.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{parent}/instances", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.BigtableadminProjectsInstancesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def bigtableadmin_projects_instances_list(self, request: operations.BigtableadminProjectsInstancesListRequest) -> operations.BigtableadminProjectsInstancesListResponse:
        r"""Lists information about instances in a project.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{parent}/instances", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BigtableadminProjectsInstancesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListInstancesResponse])
                res.list_instances_response = out

        return res

    
    def bigtableadmin_projects_instances_tables_check_consistency(self, request: operations.BigtableadminProjectsInstancesTablesCheckConsistencyRequest) -> operations.BigtableadminProjectsInstancesTablesCheckConsistencyResponse:
        r"""Checks replication consistency based on a consistency token, that is, if replication has caught up based on the conditions specified in the token and the check request.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{name}:checkConsistency", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.BigtableadminProjectsInstancesTablesCheckConsistencyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CheckConsistencyResponse])
                res.check_consistency_response = out

        return res

    
    def bigtableadmin_projects_instances_tables_create(self, request: operations.BigtableadminProjectsInstancesTablesCreateRequest) -> operations.BigtableadminProjectsInstancesTablesCreateResponse:
        r"""Creates a new table in the specified instance. The table can be created with a full set of initial column families, specified in the request.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{parent}/tables", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.BigtableadminProjectsInstancesTablesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Table])
                res.table = out

        return res

    
    def bigtableadmin_projects_instances_tables_delete(self, request: operations.BigtableadminProjectsInstancesTablesDeleteRequest) -> operations.BigtableadminProjectsInstancesTablesDeleteResponse:
        r"""Permanently deletes a specified table and all of its data.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BigtableadminProjectsInstancesTablesDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def bigtableadmin_projects_instances_tables_drop_row_range(self, request: operations.BigtableadminProjectsInstancesTablesDropRowRangeRequest) -> operations.BigtableadminProjectsInstancesTablesDropRowRangeResponse:
        r"""Permanently drop/delete a row range from a specified table. The request can specify whether to delete all rows in a table, or only those that match a particular prefix.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{name}:dropRowRange", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.BigtableadminProjectsInstancesTablesDropRowRangeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def bigtableadmin_projects_instances_tables_generate_consistency_token(self, request: operations.BigtableadminProjectsInstancesTablesGenerateConsistencyTokenRequest) -> operations.BigtableadminProjectsInstancesTablesGenerateConsistencyTokenResponse:
        r"""Generates a consistency token for a Table, which can be used in CheckConsistency to check whether mutations to the table that finished before this call started have been replicated. The tokens will be available for 90 days.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{name}:generateConsistencyToken", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.BigtableadminProjectsInstancesTablesGenerateConsistencyTokenResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GenerateConsistencyTokenResponse])
                res.generate_consistency_token_response = out

        return res

    
    def bigtableadmin_projects_instances_tables_get_iam_policy(self, request: operations.BigtableadminProjectsInstancesTablesGetIamPolicyRequest) -> operations.BigtableadminProjectsInstancesTablesGetIamPolicyResponse:
        r"""Gets the access control policy for a Table resource. Returns an empty policy if the resource exists but does not have a policy set.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{resource}:getIamPolicy", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.BigtableadminProjectsInstancesTablesGetIamPolicyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Policy])
                res.policy = out

        return res

    
    def bigtableadmin_projects_instances_tables_list(self, request: operations.BigtableadminProjectsInstancesTablesListRequest) -> operations.BigtableadminProjectsInstancesTablesListResponse:
        r"""Lists all tables served from a specified instance.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{parent}/tables", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BigtableadminProjectsInstancesTablesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListTablesResponse])
                res.list_tables_response = out

        return res

    
    def bigtableadmin_projects_instances_tables_modify_column_families(self, request: operations.BigtableadminProjectsInstancesTablesModifyColumnFamiliesRequest) -> operations.BigtableadminProjectsInstancesTablesModifyColumnFamiliesResponse:
        r"""Performs a series of column family modifications on the specified table. Either all or none of the modifications will occur before this method returns, but data requests received prior to that point may see a table where only some modifications have taken effect.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{name}:modifyColumnFamilies", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.BigtableadminProjectsInstancesTablesModifyColumnFamiliesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Table])
                res.table = out

        return res

    
    def bigtableadmin_projects_instances_tables_restore(self, request: operations.BigtableadminProjectsInstancesTablesRestoreRequest) -> operations.BigtableadminProjectsInstancesTablesRestoreResponse:
        r"""Create a new table by restoring from a completed backup. The new table must be in the same project as the instance containing the backup. The returned table long-running operation can be used to track the progress of the operation, and to cancel it. The metadata field type is RestoreTableMetadata. The response type is Table, if successful.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{parent}/tables:restore", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.BigtableadminProjectsInstancesTablesRestoreResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def bigtableadmin_projects_instances_tables_set_iam_policy(self, request: operations.BigtableadminProjectsInstancesTablesSetIamPolicyRequest) -> operations.BigtableadminProjectsInstancesTablesSetIamPolicyResponse:
        r"""Sets the access control policy on a Table resource. Replaces any existing policy.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{resource}:setIamPolicy", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.BigtableadminProjectsInstancesTablesSetIamPolicyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Policy])
                res.policy = out

        return res

    
    def bigtableadmin_projects_instances_tables_test_iam_permissions(self, request: operations.BigtableadminProjectsInstancesTablesTestIamPermissionsRequest) -> operations.BigtableadminProjectsInstancesTablesTestIamPermissionsResponse:
        r"""Returns permissions that the caller has on the specified table resource.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{resource}:testIamPermissions", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.BigtableadminProjectsInstancesTablesTestIamPermissionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TestIamPermissionsResponse])
                res.test_iam_permissions_response = out

        return res

    
    def bigtableadmin_projects_locations_get(self, request: operations.BigtableadminProjectsLocationsGetRequest) -> operations.BigtableadminProjectsLocationsGetResponse:
        r"""Gets information about a location.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BigtableadminProjectsLocationsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Location])
                res.location = out

        return res

    
    def bigtableadmin_projects_locations_list(self, request: operations.BigtableadminProjectsLocationsListRequest) -> operations.BigtableadminProjectsLocationsListResponse:
        r"""Lists information about the supported locations for this service.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{name}/locations", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BigtableadminProjectsLocationsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListLocationsResponse])
                res.list_locations_response = out

        return res

    