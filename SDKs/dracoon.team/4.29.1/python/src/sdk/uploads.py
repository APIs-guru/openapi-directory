import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class Uploads:
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

    
    def cancel_file_upload_by_token(self, request: operations.CancelFileUploadByTokenRequest) -> operations.CancelFileUploadByTokenResponse:
        r"""Cancel file upload
        ### Description:
        Cancel file upload.
        
        ### Precondition:
        Valid upload token.
        
        ### Postcondition:
        Upload canceled, token invalidated and all already transfered chunks removed.
        
        ### Further Information:
        It is recommended to notify the API about cancelled uploads if possible.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v4/uploads/{token}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CancelFileUploadByTokenResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
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
        elif r.status_code == 507:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out

        return res

    
    def complete_file_upload_by_token(self, request: operations.CompleteFileUploadByTokenRequest) -> operations.CompleteFileUploadByTokenResponse:
        r"""Complete file upload
        ### Description:
        Finish uploading a file.
        
        ### Precondition:
        Valid upload token.
        
        ### Postcondition:
        File created.
        
        ### Further Information:
        The provided file name might be changed in accordance with the resolution strategy:
        
        * **autorename**: changes the file name and adds a number to avoid conflicts.
        * **overwrite**: deletes any old file with the same file name.
        * **fail**: returns an error; in this case, another `PUT` request with a different file name may be sent.
        
        Please ensure that all chunks have been transferred correctly before finishing the upload.
        
        Download share id (if exists) gets changed if:
        - node with the same name exists in the target container
        - `resolutionStrategy` is `overwrite`
        - `keepShareLinks` is `true`
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v4/uploads/{token}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CompleteFileUploadByTokenResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Node])
                res.node = out
        elif r.status_code == 202:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Node])
                res.node = out
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
        elif r.status_code == 409:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 507:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out

        return res

    
    def upload_file_by_token_as_binary_1(self, request: operations.UploadFileByTokenAsBinary1Request) -> operations.UploadFileByTokenAsBinary1Response:
        r"""Upload file
        ### Description:  
        Upload a (chunk of a) file.
        
        ### Precondition:
        Valid upload token.
        
        ### Postcondition:
        Chunk uploaded.
        
        ### Further Information:
        Range requests are supported.  
        
        Following `Content-Types` are supported by this API:
        * `multipart/form-data`
        * provided `Content-Type`
        
        For both file upload types set the correct `Content-Type` header and body.  
        
        ### Examples:  
        
        * `multipart/form-data`
        ```
        POST /api/v4/uploads/{token} HTTP/1.1
        
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
        POST /api/v4/uploads/{token} HTTP/1.1
        
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
        
        url = utils.generate_url(base_url, "/v4/uploads/{token}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UploadFileByTokenAsBinary1Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ChunkUploadResponse])
                res.chunk_upload_response = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.upload_file_by_token_as_binary_1_400_application_json_one_of = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.upload_file_by_token_as_binary_1_401_application_json_one_of = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.upload_file_by_token_as_binary_1_403_application_json_one_of = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.upload_file_by_token_as_binary_1_404_application_json_one_of = out
        elif r.status_code == 406:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.upload_file_by_token_as_binary_1_406_application_json_one_of = out
        elif r.status_code == 507:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.upload_file_by_token_as_binary_1_507_application_json_one_of = out

        return res

    