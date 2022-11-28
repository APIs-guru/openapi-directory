import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Storage:
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

    
    def storage_create_file(self, request: operations.StorageCreateFileRequest) -> operations.StorageCreateFileResponse:
        r"""Create File
        Create a new file. The user who creates the file will automatically be assigned to read and write access unless he has passed custom values for read and write arguments.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/storage/files"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.StorageCreateFileResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.File])
                res.file = out

        return res

    
    def storage_delete_file(self, request: operations.StorageDeleteFileRequest) -> operations.StorageDeleteFileResponse:
        r"""Delete File
        Delete a file by its unique ID. Only users with write permissions have access to delete this resource.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/storage/files/{fileId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.StorageDeleteFileResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def storage_get_file(self, request: operations.StorageGetFileRequest) -> operations.StorageGetFileResponse:
        r"""Get File
        Get a file by its unique ID. This endpoint response returns a JSON object with the file metadata.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/storage/files/{fileId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.StorageGetFileResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.File])
                res.file = out

        return res

    
    def storage_get_file_download(self, request: operations.StorageGetFileDownloadRequest) -> operations.StorageGetFileDownloadResponse:
        r"""Get File for Download
        Get a file content by its unique ID. The endpoint response return with a 'Content-Disposition: attachment' header that tells the browser to start downloading the file to user downloads directory.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/storage/files/{fileId}/download", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.StorageGetFileDownloadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def storage_get_file_preview(self, request: operations.StorageGetFilePreviewRequest) -> operations.StorageGetFilePreviewResponse:
        r"""Get File Preview
        Get a file preview image. Currently, this method supports preview for image files (jpg, png, and gif), other supported formats, like pdf, docs, slides, and spreadsheets, will return the file icon image. You can also pass query string arguments for cutting and resizing your preview image.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/storage/files/{fileId}/preview", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.StorageGetFilePreviewResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def storage_get_file_view(self, request: operations.StorageGetFileViewRequest) -> operations.StorageGetFileViewResponse:
        r"""Get File for View
        Get a file content by its unique ID. This endpoint is similar to the download method but returns with no  'Content-Disposition: attachment' header.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/storage/files/{fileId}/view", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.StorageGetFileViewResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def storage_list_files(self, request: operations.StorageListFilesRequest) -> operations.StorageListFilesResponse:
        r"""List Files
        Get a list of all the user files. You can use the query params to filter your results. On admin mode, this endpoint will return a list of all of the project's files. [Learn more about different API modes](/docs/admin).
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/storage/files"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.StorageListFilesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FileList])
                res.file_list = out

        return res

    
    def storage_update_file(self, request: operations.StorageUpdateFileRequest) -> operations.StorageUpdateFileResponse:
        r"""Update File
        Update a file by its unique ID. Only users with write permissions have access to update this resource.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/storage/files/{fileId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.StorageUpdateFileResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.File])
                res.file = out

        return res

    