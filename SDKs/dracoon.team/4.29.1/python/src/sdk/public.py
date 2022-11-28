import requests
from typing import List,Optional
from sdk.models import shared, operations
from . import utils

class Public:
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

    
    def cancel_file_upload_via_share(self, request: operations.CancelFileUploadViaShareRequest) -> operations.CancelFileUploadViaShareResponse:
        r"""Cancel file upload
        ### Description:
        Abort (chunked) upload via Upload Share.
        
        ### Precondition:
        Valid Upload ID.
        
        ### Postcondition:
        Aborts upload and invalidates upload ID / token.
        
        ### Further Information:
        None.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v4/public/shares/uploads/{access_key}/{upload_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CancelFileUploadViaShareResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 406:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 504:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 507:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out

        return res

    
    def complete_file_upload_via_share(self, request: operations.CompleteFileUploadViaShareRequest) -> operations.CompleteFileUploadViaShareResponse:
        r"""Complete file upload
        ### Description:
        Finalize (chunked) upload via Upload Share.
        
        ### Precondition:
        Valid upload ID.  
        Only returns users that owns one of the following permissions: <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage</span>, <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read</span>, <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage download share</span>, <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage upload share</span>
        
        ### Postcondition:
        Finalizes upload.
        
        ### Further Information:
        Chunked uploads (range requests) are supported.  
        
        Please ensure that all chunks have been transferred correctly before finishing the upload.  
        If file hash has been created in time a `201 Created` will be responded and hash will be part of response, otherwise it will be a `202 Accepted` without it.
        
        https://tools.ietf.org/html/rfc7233 - Range Requests
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v4/public/shares/uploads/{access_key}/{upload_id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CompleteFileUploadViaShareResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PublicUploadedFileData])
                res.public_uploaded_file_data = out
        elif r.status_code == 202:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PublicUploadedFileData])
                res.public_uploaded_file_data = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 406:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 412:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 504:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 507:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out

        return res

    
    def complete_s3_file_upload_via_share(self, request: operations.CompleteS3FileUploadViaShareRequest) -> operations.CompleteS3FileUploadViaShareResponse:
        r"""Complete S3 file upload
        <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.15.0</h3>
        
        ### Description:
        Finishes a S3 file upload and closes the corresponding upload channel.
        
        ### Precondition:
        Valid upload ID.  
        Only returns users that owns one of the following permissions: <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage</span>, <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read</span>, <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage download share</span>, <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage upload share</span>
        
        ### Postcondition:
        Upload channel is closed. S3 multipart upload request is completed.
        
        ### Further Information:
        None.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v4/public/shares/uploads/{access_key}/{upload_id}/s3", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CompleteS3FileUploadViaShareResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 202:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 406:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 412:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out

        return res

    
    def create_share_upload_channel(self, request: operations.CreateShareUploadChannelRequest) -> operations.CreateShareUploadChannelResponse:
        r"""Create new file upload channel
        ### Description:  
        Create a new upload channel.
        
        ### Precondition:
        None.
        
        ### Postcondition:
        Upload channel is created and corresponding upload URL, token & upload ID are returned.
        
        ### Further Information:
        Use `uploadUrl` the upload `token` is deprecated.  
        
        Please provide the size of the intended upload so that the quota can be checked in advanced and no data is transferred unnecessarily.
        
        ### Node naming convention:
        * Node (room, folder, file) names are limited to **150** characters.
        * Illegal names:  
        `'CON', 'PRN', 'AUX', 'NUL', 'COM1', 'COM2', 'COM3', 'COM4', 'COM5', 'COM6', 'COM7', 'COM8', 'COM9', 'LPT1', 'LPT2', 'LPT3', 'LPT4', 'LPT5', 'LPT6', 'LPT7', 'LPT8', 'LPT9', (and any of those with an extension)`
        * Illegal characters in names:  
        `'\\', '<','>', ':', '\\"', '|', '?', '*', '/', leading '-', trailing '.' `
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v4/public/shares/uploads/{access_key}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateShareUploadChannelResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CreateShareUploadChannelResponse])
                res.create_share_upload_channel_response = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 406:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 412:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 504:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 507:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out

        return res

    
    def download_file_via_token_public(self, request: operations.DownloadFileViaTokenPublicRequest) -> operations.DownloadFileViaTokenPublicResponse:
        r"""Download file with token
        ### Description:  
        Download a file (or zip archive if target is a folder or room).
        
        ### Precondition:
        Valid download token.
        
        ### Postcondition:
        Stream is returned.
        
        ### Further Information:
        Range requests are supported.  
        Range requests are illegal for zip archive download.
        https://tools.ietf.org/html/rfc7233 - Range Requests
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v4/public/shares/downloads/{access_key}/{token}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DownloadFileViaTokenPublicResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 206:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/octet-stream"):
                res.body = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/octet-stream"):
                res.body = r.content
        elif r.status_code == 406:
            if utils.match_content_type(content_type, "application/octet-stream"):
                res.body = r.content
        elif r.status_code == 416:
            if utils.match_content_type(content_type, "application/octet-stream"):
                res.body = r.content

        return res

    
    def download_file_via_token_public_1(self, request: operations.DownloadFileViaTokenPublic1Request) -> operations.DownloadFileViaTokenPublic1Response:
        r"""Download file with token
        ### Description:  
        Download a file (or zip archive if target is a folder or room).
        
        ### Precondition:
        Valid download token.
        
        ### Postcondition:
        Stream is returned.
        
        ### Further Information:
        Range requests are supported.  
        Range requests are illegal for zip archive download.
        https://tools.ietf.org/html/rfc7233 - Range Requests
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v4/public/shares/downloads/{access_key}/{token}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("HEAD", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DownloadFileViaTokenPublic1Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 206:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/octet-stream"):
                res.body = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/octet-stream"):
                res.body = r.content
        elif r.status_code == 406:
            if utils.match_content_type(content_type, "application/octet-stream"):
                res.body = r.content
        elif r.status_code == 416:
            if utils.match_content_type(content_type, "application/octet-stream"):
                res.body = r.content

        return res

    
    def generate_download_url_public(self, request: operations.GenerateDownloadURLPublicRequest) -> operations.GenerateDownloadURLPublicResponse:
        r"""Generate download URL
        ### Description:
        Generate a download URL to retrieve a shared file.
        
        ### Precondition:
        None.
        
        ### Postcondition:
        Download URL and token are generated and returned.
        
        ### Further Information:
        Use `downloadUrl` the download `token` is deprecated.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v4/public/shares/downloads/{access_key}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GenerateDownloadURLPublicResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PublicDownloadTokenGenerateResponse])
                res.public_download_token_generate_response = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 406:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out

        return res

    
    def generate_presigned_urls_public(self, request: operations.GeneratePresignedUrlsPublicRequest) -> operations.GeneratePresignedUrlsPublicResponse:
        r"""Generate presigned URLs for S3 file upload
        <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.15.0</h3>
        
        ### Description:
        Generate presigned URLs for S3 file upload.
        
        ### Precondition:
        Valid upload ID
        
        ### Postcondition:
        List of presigned URLs is returned.
        
        ### Further Information:
        The size for each part must be >= 5 MB, except for the last part.  
        The part number of the first part in S3 is 1 (not 0).  
        Use HTTP method `PUT` for uploading bytes via presigned URL.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v4/public/shares/uploads/{access_key}/{upload_id}/s3_urls", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GeneratePresignedUrlsPublicResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PresignedURLList])
                res.presigned_url_list = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 406:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 412:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 504:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 507:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out

        return res

    
    def request_active_directory_auth_info(self, request: operations.RequestActiveDirectoryAuthInfoRequest) -> operations.RequestActiveDirectoryAuthInfoResponse:
        r"""Request Active Directory authentication information
        ### Description:  
        Provides information about Active Directory authentication options.
        
        ### Precondition:
        None.
        
        ### Postcondition:
        Active Directory authentication options information is returned.
        
        ### Further Information:
        None.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v4/public/system/info/auth/ad"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RequestActiveDirectoryAuthInfoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ActiveDirectoryAuthInfo])
                res.active_directory_auth_info = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 406:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out

        return res

    
    def request_open_id_auth_info(self, request: operations.RequestOpenIDAuthInfoRequest) -> operations.RequestOpenIDAuthInfoResponse:
        r"""Request OpenID Connect provider authentication information
        ### Description:  
        Provides information about OpenID Connect authentication options.
        
        ### Precondition:
        None.
        
        ### Postcondition:
        OpenID Connect authentication options information is returned.
        
        ### Further Information:
        None.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v4/public/system/info/auth/openid"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RequestOpenIDAuthInfoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OpenIDAuthInfo])
                res.open_id_auth_info = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 406:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out

        return res

    
    def request_public_download_share_info(self, request: operations.RequestPublicDownloadShareInfoRequest) -> operations.RequestPublicDownloadShareInfoResponseOutput:
        r"""Request public Download Share information
        ### Description:  
        Retrieve the public information of a Download Share.
        
        ### Precondition:
        None.
        
        ### Postcondition:
        Download Share information is returned.
        
        ### Further Information:
        None.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v4/public/shares/downloads/{access_key}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RequestPublicDownloadShareInfoResponseOutput(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PublicDownloadShareOutput])
                res.public_download_share = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 406:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out

        return res

    
    def request_public_upload_share_info(self, request: operations.RequestPublicUploadShareInfoRequest) -> operations.RequestPublicUploadShareInfoResponseOutput:
        r"""Request public Upload Share information
        ### Description:  
        Provides information about the desired Upload Share.
        
        ### Precondition:
        Only `userUserPublicKeyList` is returned to the users who owns one of the following permissions: <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage</span>, <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read</span>, <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage download share</span>, <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage upload share</span>
        
        ### Postcondition:
        None.
        
        ### Further Information:
        If no password is set, the returned information is reduced to the following attributes (if available):
        
        * `name`
        * `maxSlots`
        * `createdAt`
        * `isProtected`
        * `isEncrypted`
        * `showUploadedFiles`
        * `userUserPublicKeyList` (if parent is end-to-end encrypted)
        
        Only if the password is transmitted as `X-Sds-Share-Password` header, all values are returned.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v4/public/shares/uploads/{access_key}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RequestPublicUploadShareInfoResponseOutput(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PublicUploadShareOutput])
                res.public_upload_share = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 406:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out

        return res

    
    def request_software_version(self, request: operations.RequestSoftwareVersionRequest) -> operations.RequestSoftwareVersionResponse:
        r"""Request software version information
        ### Description:  
        Public software version information.
        
        ### Precondition:
        None.
        
        ### Postcondition:
        Sofware version information is returned.
        
        ### Further Information:
        The version of DRACOON Server consists of two components:
        * **API**
        * **Core** (referred to as _\"Server\"_)
        
        which are versioned individually.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v4/public/software/version"
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RequestSoftwareVersionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SoftwareVersionData])
                res.software_version_data = out
        elif r.status_code == 406:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out

        return res

    
    def request_system_info(self, request: operations.RequestSystemInfoRequest) -> operations.RequestSystemInfoResponse:
        r"""Request system information
        ### Description:  
        Provides information about system.
        
        ### Precondition:
        None.
        
        ### Postcondition:
        System information is returned.
        
        ### Further Information:
        Authentication methods are sorted by **priority** attribute.  
        Smaller values have higher priority.  
        Authentication method with highest priority is considered as default.
        
        ### System information:
        <details style=\"padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;\">
        <summary style=\"cursor: pointer; outline: none\"><strong>Expand</strong></summary>
        
        | Setting | Description | Value |
        | :--- | :--- | :--- |
        | `languageDefault` | Defines which language should be default. | `ISO 639-1 code` |
        | `hideLoginInputFields` | Defines if login fields should be hidden. | `true or false` |
        | `s3Hosts` | List of available S3 hosts. | `String array` |
        | `s3EnforceDirectUpload` | Determines whether S3 direct upload is enforced or not. | `true or false` |
        | `useS3Storage` | Determines whether S3 Storage enabled and used. | `true or false` |
        
        </details>
        
        ### Authentication methods:
        <details style=\"padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;\">
        <summary style=\"cursor: pointer; outline: none\"><strong>Expand</strong></summary>
        
        | Authentication Method | Description |
        | :--- | :--- |
        | `basic` | **Basic** authentication globally allowed.<br>This option **MUST** be activated to allow users to log in with their credentials stored in the database.<br>Formerly known as `sql`. |
        | `active_directory` | **Active Directory** authentication globally allowed.<br>This option **MUST** be activated to allow users to log in with their Active Directory credentials. |
        | `radius` | **RADIUS** authentication globally allowed.<br>This option **MUST** be activated to allow users to log in with their RADIUS username, their PIN and a token password. |
        | `openid` | **OpenID Connect** authentication globally allowed.This option **MUST** be activated to allow users to log in with their OpenID Connect identity. |
        | `hideLoginInputFields` | Determines whether input fields for login should be enabled | `true or false` |
        
        </details>
        https://tools.ietf.org/html/rfc5646 - Tags for Identifying Languages
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v4/public/system/info"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RequestSystemInfoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SystemInfo])
                res.system_info = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 406:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out

        return res

    
    def request_system_time(self, request: operations.RequestSystemTimeRequest) -> operations.RequestSystemTimeResponse:
        r"""Request system time
        ### Description:  
        Retrieve the actual server time.
        
        ### Precondition:
        None.
        
        ### Postcondition:
        Server time is returned.
        
        ### Further Information:
        None.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v4/public/time"
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RequestSystemTimeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SdsServerTime])
                res.sds_server_time = out
        elif r.status_code == 406:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out

        return res

    
    def request_third_party_dependencies(self) -> operations.RequestThirdPartyDependenciesResponse:
        r"""Request third-party software dependencies
        <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.9.0</h3>
        
        ### Description:  
        Provides information about used third-party software dependencies.
        
        ### Precondition:
        None.
        
        ### Postcondition:
        List of the third-party software dependencies used by **DRACOON Core** (referred to as _\"Server\"_) is returned.
        
        ### Further Information:
        None.
        
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v4/public/software/third_party_dependencies"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.RequestThirdPartyDependenciesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.ThirdPartyDependenciesData]])
                res.third_party_dependencies_data = out
        elif r.status_code == 406:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out

        return res

    
    def request_upload_status_public(self, request: operations.RequestUploadStatusPublicRequest) -> operations.RequestUploadStatusPublicResponse:
        r"""Request status of S3 file upload
        <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.15.0</h3>
        
        ### Description:
        Request status of a S3 file upload.
        
        ### Precondition:
        An upload channel has been created and the user has <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; create</span> permissions in the parent container (room or folder).
        
        ### Postcondition:
        Status of S3 multipart upload request is returned.
        
        ### Further Information:
        None.
        
        ### Possible errors:
        <details style=\"padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;\">
        <summary style=\"cursor: pointer; outline: none\"><strong>Expand</strong></summary>
        
        | Http Status | Error Code | Description |
        | :--- | :--- | :--- |
        | `400 Bad Request` | `-80000` | Mandatory fields cannot be empty |
        | `400 Bad Request` | `-80001` | Invalid positive number |
        | `400 Bad Request` | `-80002` | Invalid number |
        | `400 Bad Request` | `-40001` | (Target) room is not encrypted |
        | `400 Bad Request` | `-40755` | Bad file name |
        | `400 Bad Request` | `-40763` | File key must be set for an upload into encrypted room |
        | `400 Bad Request` | `-50506` | Exceeds the number of files for this Upload Share |
        | `403 Forbidden` |  | Access denied |
        | `404 Not Found` | `-20501` | Upload not found |
        | `404 Not Found` | `-40000` | Container not found |
        | `404 Not Found` | `-41000` | Node not found |
        | `404 Not Found` | `-70501` | User not found |
        | `409 Conflict` | `-40010` | Container cannot be overwritten |
        | `409 Conflict` |  | File cannot be overwritten |
        | `500 Internal Server Error` |  | System Error |
        | `502 Bad Gateway` |  | S3 Error |
        | `502 Insufficient Storage` | `-50504` | Exceeds the quota for this Upload Share |
        | `502 Insufficient Storage` | `-40200` | Exceeds the free node quota in room |
        | `502 Insufficient Storage` | `-90200` | Exceeds the free customer quota |
        | `502 Insufficient Storage` | `-90201` | Exceeds the free customer physical disk space |
        
        </details>
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v4/public/shares/uploads/{access_key}/{upload_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.RequestUploadStatusPublicResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.S3ShareUploadStatus])
                res.s3_share_upload_status = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 406:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 412:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out

        return res

    
    def upload_file_as_multipart_public_1(self, request: operations.UploadFileAsMultipartPublic1Request) -> operations.UploadFileAsMultipartPublic1Response:
        r"""Upload file
        ### Description:  
        Chunked upload of files via Upload Share.
        
        ### Precondition:
        Valid upload ID.
        
        ### Postcondition:
        Chunk of file is uploaded.
        
        ### Further Information:
        Chunked uploads (range requests) are supported.
        
        Following `Content-Types` are supported by this API:
        * `multipart/form-data`
        * provided `Content-Type`  
        
        For both file upload types set the correct `Content-Type` header and body.  
        
        ### Examples:  
        
        * `multipart/form-data`
        ```
        POST /api/v4/public/shares/uploads/{access_key}{upload_id} HTTP/1.1
        
        Header:
        ...
        Content-Type: multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW
        ...
        
        Body:
        ------WebKitFormBoundary7MA4YWxkTrZu0gW
        Content-Disposition: form-data; name=\"file\"; filename=\"file.txt\"
        Content-Type: text/plain
        
        Content of file.txt
        ------WebKitFormBoundary7MA4YWxkTrZu0gW--
        ```
        
        * any other `Content-Type`  
        ```
        POST /api/v4/public/shares/uploads/{access_key}{upload_id} HTTP/1.1
        
        Header:
        ...
        Content-Type: { ... }
        ...
        
        Body:
        raw content
        ```
        https://tools.ietf.org/html/rfc7233 - Range Requests
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v4/public/shares/uploads/{access_key}/{upload_id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UploadFileAsMultipartPublic1Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ChunkUploadResponse])
                res.chunk_upload_response = out
        elif r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ChunkUploadResponse])
                res.chunk_upload_response = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 406:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 412:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 507:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out

        return res

    