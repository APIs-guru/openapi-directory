import requests
from sdk.models import operations
from . import utils

class Downloads:
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

    
    def download_avatar(self, request: operations.DownloadAvatarRequest) -> operations.DownloadAvatarResponse:
        r"""Download avatar
        <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.11.0</h3>
        
        ### Description:
        Download avatar for given user ID and UUID.
        
        ### Precondition:
        Valid UUID.
        
        ### Postcondition:
        Stream is returned.
        
        ### Further Information:
        None.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v4/downloads/avatar/{user_id}/{uuid}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DownloadAvatarResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/octet-stream"):
                res.download_avatar_200_application_octet_stream_string = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/octet-stream"):
                res.body = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/octet-stream"):
                res.body = r.content
        elif r.status_code == 406:
            if utils.match_content_type(content_type, "application/octet-stream"):
                res.body = r.content

        return res

    
    def download_file_via_token(self, request: operations.DownloadFileViaTokenRequest) -> operations.DownloadFileViaTokenResponse:
        r"""Download file
        ### Description:
        Download a file.
        
        ### Precondition:
        Valid download token.
        
        ### Postcondition:
        Stream is returned.
        
        ### Further Information:
        Range requests are supported.
        https://tools.ietf.org/html/rfc7233 - Range Requests
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v4/downloads/{token}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DownloadFileViaTokenResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 206:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/octet-stream"):
                res.body = r.content
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/octet-stream"):
                res.body = r.content
        elif r.status_code == 403:
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

    
    def download_file_via_token_1(self, request: operations.DownloadFileViaToken1Request) -> operations.DownloadFileViaToken1Response:
        r"""Download file
        ### Description:
        Download a file.
        
        ### Precondition:
        Valid download token.
        
        ### Postcondition:
        Stream is returned.
        
        ### Further Information:
        Range requests are supported.
        https://tools.ietf.org/html/rfc7233 - Range Requests
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v4/downloads/{token}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("HEAD", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DownloadFileViaToken1Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 206:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/octet-stream"):
                res.body = r.content
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/octet-stream"):
                res.body = r.content
        elif r.status_code == 403:
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

    
    def download_zip_archive_via_token(self, request: operations.DownloadZipArchiveViaTokenRequest) -> operations.DownloadZipArchiveViaTokenResponse:
        r"""Download ZIP archive
        ### Description:
        Download multiple files in a ZIP archive.
        
        ### Precondition:
        Valid download token.
        
        ### Postcondition:
        Stream is returned.
        
        ### Further Information:
        Create a download token with `POST /nodes/zip` API.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v4/downloads/zip/{token}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DownloadZipArchiveViaTokenResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/octet-stream"):
                res.body = r.content
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/octet-stream"):
                res.body = r.content
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/octet-stream"):
                res.body = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/octet-stream"):
                res.body = r.content
        elif r.status_code == 406:
            if utils.match_content_type(content_type, "application/octet-stream"):
                res.body = r.content

        return res

    