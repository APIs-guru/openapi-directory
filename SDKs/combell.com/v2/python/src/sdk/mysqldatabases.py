import requests
from typing import List,Optional
from sdk.models import shared, operations
from . import utils

class MySQLDatabases:
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

    
    def change_database_user_password(self, request: operations.ChangeDatabaseUserPasswordRequest) -> operations.ChangeDatabaseUserPasswordResponse:
        r"""Change password for mysql user
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mysqldatabases/{databaseName}/users/{userName}/password", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ChangeDatabaseUserPasswordResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def change_database_user_status(self, request: operations.ChangeDatabaseUserStatusRequest) -> operations.ChangeDatabaseUserStatusResponse:
        r"""Enable/disable mysql user
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mysqldatabases/{databaseName}/users/{userName}/status", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ChangeDatabaseUserStatusResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def create_my_sql_database(self, request: operations.CreateMySQLDatabaseRequest) -> operations.CreateMySQLDatabaseResponse:
        r"""Create a new mysql database
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/mysqldatabases"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateMySQLDatabaseResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 202:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BadRequestResponse])
                res.bad_request_response = out

        return res

    
    def create_my_sql_user(self, request: operations.CreateMySQLUserRequest) -> operations.CreateMySQLUserResponse:
        r"""Create a new mysql user
        The creation of a new mysql user will result in a user with read_only rights.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mysqldatabases/{databaseName}/users", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateMySQLUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 202:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BadRequestResponse])
                res.bad_request_response = out

        return res

    
    def delete_database(self, request: operations.DeleteDatabaseRequest) -> operations.DeleteDatabaseResponse:
        r"""Delete a mysql database
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mysqldatabases/{databaseName}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteDatabaseResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            pass

        return res

    
    def delete_database_user(self, request: operations.DeleteDatabaseUserRequest) -> operations.DeleteDatabaseUserResponse:
        r"""Delete a mysql user
        The deletion of a mysql user is allowed for users with read_only rights.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mysqldatabases/{databaseName}/users/{userName}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteDatabaseUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            pass

        return res

    
    def get_database_users(self, request: operations.GetDatabaseUsersRequest) -> operations.GetDatabaseUsersResponse:
        r"""Overview of mysql users
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mysqldatabases/{databaseName}/users", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDatabaseUsersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.MySQLUser]])
                res.my_sql_users = out

        return res

    
    def get_my_sql_database(self, request: operations.GetMySQLDatabaseRequest) -> operations.GetMySQLDatabaseResponse:
        r"""Get a specific database
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mysqldatabases/{databaseName}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMySQLDatabaseResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.MySQLDatabase])
                res.my_sql_database = out

        return res

    
    def get_my_sql_databases(self, request: operations.GetMySQLDatabasesRequest) -> operations.GetMySQLDatabasesResponse:
        r"""Overview of mysql databases
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/mysqldatabases"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMySQLDatabasesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.MySQLDatabase]])
                res.my_sql_databases = out

        return res

    