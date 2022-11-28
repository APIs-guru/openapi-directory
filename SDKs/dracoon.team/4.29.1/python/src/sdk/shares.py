import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class Shares:
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

    
    def create_download_share(self, request: operations.CreateDownloadShareRequest) -> operations.CreateDownloadShareResponse:
        r"""Create new Download Share
        ### Description:
        Create a new Download Share.
        
        ### Precondition:
        User with <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage download share</span> permissions on target node.
        
        ### Postcondition:
        Download Share is created.
        
        ### Further Information:
        
        If the target node is a room: subordinary rooms are excluded from a Download Share.
        
        * `name` is limited to **150** characters.
        * `notes` are limited to **255** characters.
        * `password` is limited to **1024** characters.
        
        Use `POST /shares/downloads/{share_id}/email` API for sending emails.  
        
        Forbidden characters in passwords: [`&`, `'`, `<`, `>`]
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v4/shares/downloads"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateDownloadShareResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DownloadShare])
                res.download_share = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.create_download_share_400_application_json_one_of = out
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
        elif r.status_code == 502:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out

        return res

    
    def create_upload_share(self, request: operations.CreateUploadShareRequest) -> operations.CreateUploadShareResponse:
        r"""Create new Upload Share
        ### Description:
        Create a new Upload Share (aka File Request).
        
        ### Precondition:
        User has <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage upload share</span> permissions on target container.
        
        ### Postcondition:
        Upload Share is created.
        
        ### Further Information:
        
        * `name` is limited to **150** characters.
        * `notes` are limited to **255** characters.
        * `password` is limited to **1024** characters.
        
        Forbidden characters in passwords: [`&`, `'`, `<`, `>`]  
        
        Use `POST /shares/uploads/{share_id}/email` API for sending emails.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v4/shares/uploads"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateUploadShareResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UploadShare])
                res.upload_share = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.create_upload_share_400_application_json_one_of = out
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
        elif r.status_code == 502:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out

        return res

    
    def delete_download_shares(self, request: operations.DeleteDownloadSharesRequest) -> operations.DeleteDownloadSharesResponse:
        r"""Remove Download Shares
        <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.21.0</h3>
        
        ### Functional Description:
        Delete multiple Download Shares.
        
        ### Precondition:
        User with _\"manage download share\"_ permissions on target nodes.
        
        ### Postcondition:
        Download Shares are deleted.
        
        ### Further Information:
        Only the Download Shares are removed; the referenced files or containers persists.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v4/shares/downloads"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("DELETE", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteDownloadSharesResponse(status_code=r.status_code, content_type=content_type)
        
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
        elif r.status_code == 412:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out

        return res

    
    def delete_upload_shares(self, request: operations.DeleteUploadSharesRequest) -> operations.DeleteUploadSharesResponse:
        r"""Remove Upload Shares
        <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.21.0</h3>
        
        ### Functional Description:
        Delete multiple Upload Shares (aka Upload Accounts).
        
        ### Precondition:
        User has _\"manage upload share\"_ permissions on target containers.
        
        ### Postcondition:
        Upload Shares are deleted.
        
        ### Further Information:
        Only the Upload Shares are removed; already uploaded files and the target container persist.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v4/shares/uploads"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("DELETE", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteUploadSharesResponse(status_code=r.status_code, content_type=content_type)
        
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
        elif r.status_code == 412:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out

        return res

    
    def remove_download_share(self, request: operations.RemoveDownloadShareRequest) -> operations.RemoveDownloadShareResponse:
        r"""Remove Download Share
        ### Description:
        Delete a Download Share.
        
        ### Precondition:
        User with <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage download share</span> permissions on target node.
        
        ### Postcondition:
        Download Share is deleted.
        
        ### Further Information:
        Only the Download Share is removed; the referenced file or container persists.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v4/shares/downloads/{share_id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._security_client
        
        r = client.request("DELETE", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RemoveDownloadShareResponse(status_code=r.status_code, content_type=content_type)
        
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
        elif r.status_code == 412:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out

        return res

    
    def remove_upload_share(self, request: operations.RemoveUploadShareRequest) -> operations.RemoveUploadShareResponse:
        r"""Remove Upload Share
        ### Description:
        Delete an Upload Share (aka File Request).
        
        ### Precondition:
        User has <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage upload share</span> permissions on target container.
        
        ### Postcondition:
        Upload Share is deleted.
        
        ### Further Information:
        Only the Upload Share is removed; already uploaded files and the target container persist.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v4/shares/uploads/{share_id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._security_client
        
        r = client.request("DELETE", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RemoveUploadShareResponse(status_code=r.status_code, content_type=content_type)
        
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
        elif r.status_code == 412:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out

        return res

    
    def request_download_share(self, request: operations.RequestDownloadShareRequest) -> operations.RequestDownloadShareResponse:
        r"""Request Download Share
        ### Description:  
        Retrieve detailed information about one Download Share.
        
        ### Precondition:
        User with <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage download share</span> permissions on target node.
        
        ### Postcondition:
        Download Share is returned
        
        ### Further Information:
        None.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v4/shares/downloads/{share_id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._security_client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RequestDownloadShareResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DownloadShare])
                res.download_share = out
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

        return res

    
    def request_download_share_qr(self, request: operations.RequestDownloadShareQrRequest) -> operations.RequestDownloadShareQrResponse:
        r"""Request Download Share via QR Code
        ### Description:  
        Retrieve detailed information about one Download Share.
        
        ### Precondition:
        User with <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage download share</span> permissions on target node.
        
        ### Postcondition:
        Download Share is returned
        
        ### Further Information:
        None.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v4/shares/downloads/{share_id}/qr", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._security_client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RequestDownloadShareQrResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DownloadShare])
                res.download_share = out
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

        return res

    
    def request_download_shares(self, request: operations.RequestDownloadSharesRequest) -> operations.RequestDownloadSharesResponse:
        r"""Request list of Download Shares
        ### Description:  
        Retrieve a list of Download Shares.
        
        ### Precondition:
        Authenticated user.
        
        ### Postcondition:
        List of available Download Shares is returned.
        
        ### Further Information:
        
        ### Filtering:
        All filter fields are connected via logical (**AND**). createdBy and updatedBy searches several user-related attributes.
        
        Filter string syntax: `FIELD_NAME:OPERATOR:VALUE[:VALUE...]`  
        
        <details style=\"padding-left: 10px\">
        <summary style=\"cursor: pointer; outline: none\"><strong>Example</strong></summary>
        
        `name:cn:searchString_1|createdBy:cn:searchString_2`
        Filter by file name contains `searchString_1` **AND** creator info (`firstName` **OR** `lastName` **OR** `email` **OR** `username`) contains `searchString_2`.
        
        </details>
        
        ### Filtering options:
        <details style=\"padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;\">
        <summary style=\"cursor: pointer; outline: none\"><strong>Expand</strong></summary>
        
        | `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
        | :--- | :--- | :--- | :--- | :--- |
        | `name` | Alias or node name filter | `cn` | Alias or node name contains value. | `search String` |
        | `createdAt` | Creation date filter | `ge, le` | Creation date is greater / less equals than value.<br>Multiple operator values are allowed and will be connected via logical conjunction (**AND**).<br>e.g. `createdAt:ge:2016-12-31`&#124;`createdAt:le:2018-01-01` | `Date (yyyy-MM-dd)` |
        | `createdBy` | Creator info filter | `cn, eq` | Creator info (`firstName` **OR** `lastName` **OR** `email` **OR** `username`) contains value. | `search String` |
        | `createdById` | Creator ID filter | `eq` | Creator ID equals value. | `positive Integer` |
        | `accessKey` | Share access key filter | `cn` | Share access key contains values. | `search String` |
        | `nodeId` | Source node ID | `eq` | Source node (room, folder, file) ID equals value. | `positive Integer` |
        | `updatedBy` | Modifier info filter | `cn, eq` | Modifier info (`firstName` **OR** `lastName` **OR** `email` **OR** `username`) contains value. | `search String` |
        | `updatedById` | Modifier ID filter | `eq` | Modifier ID equals value. | `positive Integer` |
        
        </details>
        ### Deprecated filtering options:
        <details style=\"padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;\">
        <summary style=\"cursor: pointer; outline: none\"><strong>Expand</strong></summary>
        
        | `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
        | :--- | :--- | :--- | :--- | :--- |
        | <del>`userId`</del>  | Creator user ID | `eq` | Creator user ID equals value. Use `createdById` instead | `positive Integer` |
        
        </details>
        
        ---
        
        ### Sorting:
        Sort string syntax: `FIELD_NAME:ORDER`  
        `ORDER` can be `asc` or `desc`.  
        Multiple sort fields are supported.  
        
        <details style=\"padding-left: 10px\">
        <summary style=\"cursor: pointer; outline: none\"><strong>Example</strong></summary>
        
        `name:asc|expireAt:desc`  
        Sort by `name` ascending **AND** by `expireAt` descending.
        
        </details>
        
        ### Sorting options:
        <details style=\"padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;\">
        <summary style=\"cursor: pointer; outline: none\"><strong>Expand</strong></summary>
        
        | `FIELD_NAME` | Description |
        | :--- | :--- |
        | `name` | Alias or node name |
        | `notifyCreator` | Notify creator on every download |
        | `expireAt` | Expiration date |
        | `createdAt` | Creation date |
        | `createdBy` | Creator first name, last name |
        
        </details>
        
        ### Deprecated sorting options:
        <details style=\"padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;\">
        <summary style=\"cursor: pointer; outline: none\"><strong>Expand</strong></summary>
        
        | `FIELD_NAME` | Description |
        | :--- | :--- |
        | <del>`classification`</del> | Classification ID:<ul><li>1 - public</li><li>2 - internal</li><li>3 - confidential</li><li>4 - strictly confidential</li></ul> |
        
        </details>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v4/shares/downloads"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RequestDownloadSharesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DownloadShareList])
                res.download_share_list = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 401:
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

    
    def request_upload_share(self, request: operations.RequestUploadShareRequest) -> operations.RequestUploadShareResponse:
        r"""Request Upload Share
        ### Description:  
        Retrieve detailed information about one Upload Share (aka File Request).
        
        ### Precondition:
        User has <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage upload share</span> permissions on target container.
        
        ### Postcondition:
        Upload Share is returned.
        
        ### Further Information:
        None.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v4/shares/uploads/{share_id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._security_client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RequestUploadShareResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UploadShare])
                res.upload_share = out
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

        return res

    
    def request_upload_share_qr(self, request: operations.RequestUploadShareQrRequest) -> operations.RequestUploadShareQrResponse:
        r"""Request Upload Share via QR Code
        ### Description:  
        Retrieve detailed information about one Upload Share (aka File Request).
        
        ### Precondition:
        User has <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage upload share</span> permissions on target container.
        
        ### Postcondition:
        Upload Share is returned.
        
        ### Further Information:
        None.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v4/shares/uploads/{share_id}/qr", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._security_client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RequestUploadShareQrResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UploadShare])
                res.upload_share = out
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

        return res

    
    def request_upload_shares(self, request: operations.RequestUploadSharesRequest) -> operations.RequestUploadSharesResponse:
        r"""Request list of Upload Shares
        ### Description:  
        Retrieve a list of Upload Shares (aka File Requests).
        
        ### Precondition:
        Authenticated user.
        
        ### Postcondition:
        List of available Upload Shares is returned.
        
        ### Further Information:
        
        ### Filtering:
        All filter fields are connected via logical (**AND**). createdBy and updatedBy searches several user-related attributes.
        Filter string syntax: `FIELD_NAME:OPERATOR:VALUE[:VALUE...]`  
        
        <details style=\"padding-left: 10px\">
        <summary style=\"cursor: pointer; outline: none\"><strong>Example</strong></summary>
        
        `name:cn:searchString_1|createdBy:cn:searchString_2`  
        Filter by alias name contains `searchString_1` **AND** creator info (`firstName` **OR** `lastName` **OR** `email` **OR** `username`) contains `searchString_2`.
        
        </details>
        
        ### Filtering options:
        <details style=\"padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;\">
        <summary style=\"cursor: pointer; outline: none\"><strong>Expand</strong></summary>
        
        | `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
        | :--- | :--- | :--- | :--- | :--- |
        | `name` | Alias name filter | `cn` | Alias name contains value. | `search String` |
        | `createdAt` | Creation date filter | `ge, le` | Creation date is greater / less equals than value.<br>Multiple operator values are allowed and will be connected via logical conjunction (**AND**).<br>e.g. `createdAt:ge:2016-12-31`&#124;`createdAt:le:2018-01-01` | `Date (yyyy-MM-dd)` |
        | `createdBy` | Creator info filter | `cn, eq` | Creator info (`firstName` **OR** `lastName` **OR** `email` **OR** `username`) contains value. | `search String` |
        | `createdById` | Creator ID filter | `eq` | Creator ID equals value. | `positive Integer` |
        | `accessKey` | Share access key filter | `cn` | Share access key contains values. | `search String` |
        | `userId` | Creator user ID | `eq` | Creator user ID equals value. | `positive Integer` |
        | `targetId` | Target node ID | `eq` | Target node (room, folder) ID equals value. | `positive Integer` |
        | `updatedBy` | Modifier info filter | `cn, eq` | Modifier info (`firstName` **OR** `lastName` **OR** `email` **OR** `username`) contains value. | `search String` |
        | `updatedById` | Modifier ID filter | `eq` | Modifier ID equals value. | `positive Integer` |
        
        </details>
        
        ### Deprecated filtering options:
        <details style=\"padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;\">
        <summary style=\"cursor: pointer; outline: none\"><strong>Expand</strong></summary>
        
        | `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
        | :--- | :--- | :--- | :--- | :--- |
        | <del>`targetId`</del> | Target node ID | `cn` | Target node (room, folder) ID equals value. | `positive Integer` |
        | <del>`userId` </del>| Creator user ID | `eq` | Creator user ID equals value. Use `createdById` instead. | `positive Integer` |
        
        </details>
        
        ---
        
        Sort string syntax: `FIELD_NAME:ORDER`  
        `ORDER` can be `asc` or `desc`.  
        Multiple sort fields are supported.  
        
        <details style=\"padding-left: 10px\">
        <summary style=\"cursor: pointer; outline: none\"><strong>Example</strong></summary>
        
        `name:asc|expireAt:desc`  
        Sort by `name` ascending **AND** by `expireAt` descending.
        
        </details>
        
        ### Sorting options:
        <details style=\"padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;\">
        <summary style=\"cursor: pointer; outline: none\"><strong>Expand</strong></summary>
        
        | `FIELD_NAME` | Description |
        | :--- | :--- |
        | `name` | Alias name |
        | `notifyCreator` | Notify creator on every upload |
        | `expireAt` | Expiration date |
        | `createdAt` | Creation date |
        | `createdBy` | Creator first name, last name |
        
        </details>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v4/shares/uploads"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RequestUploadSharesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UploadShareList])
                res.upload_share_list = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 401:
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

    
    def send_download_share_link_via_email(self, request: operations.SendDownloadShareLinkViaEmailRequest) -> operations.SendDownloadShareLinkViaEmailResponse:
        r"""Send an existing Download Share link via email
        <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.11.0</h3>
        
        ### Description:
        Send an email to specific recipients for existing Download Share.
        
        ### Precondition:
        User with <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage download share</span> permissions on target node.
        
        ### Postcondition:
        Download Share link successfully sent.
        
        ### Further Information:
        None.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v4/shares/downloads/{share_id}/email", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SendDownloadShareLinkViaEmailResponse(status_code=r.status_code, content_type=content_type)
        
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
        elif r.status_code == 412:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out

        return res

    
    def send_upload_share_link_via_email(self, request: operations.SendUploadShareLinkViaEmailRequest) -> operations.SendUploadShareLinkViaEmailResponse:
        r"""Send an existing Upload Share link via email
        <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.11.0</h3>
        
        ### Description:
        Send an email to specific recipients for existing Upload Share.
        
        ### Precondition:
        User with <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage upload share</span> permissions on target container.
        
        ### Postcondition:
        Upload Share link successfully sent.
        
        ### Further Information:
        None.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v4/shares/uploads/{share_id}/email", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SendUploadShareLinkViaEmailResponse(status_code=r.status_code, content_type=content_type)
        
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
        elif r.status_code == 412:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out

        return res

    
    def update_download_share(self, request: operations.UpdateDownloadShareRequest) -> operations.UpdateDownloadShareResponse:
        r"""Update Download Share
        <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.11.0</h3>
        
        ### Description:
        Update an existing Download Share.
        
        ### Precondition:
        User with <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage download share</span> permissions on target node.
        
        ### Postcondition:
        Download Share is successfully updated.
        
        ### Further Information:
        * `name` is limited to **150** characters.
        * `notes` are limited to **255** characters.
        * `password` is limited to **1024** characters.
        
        Forbidden characters in passwords: [`&`, `'`, `<`, `>`]
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v4/shares/downloads/{share_id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateDownloadShareResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DownloadShare])
                res.download_share = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.update_download_share_400_application_json_one_of = out
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
        elif r.status_code == 502:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out

        return res

    
    def update_download_shares(self, request: operations.UpdateDownloadSharesRequest) -> operations.UpdateDownloadSharesResponse:
        r"""Update a list of Download Shares
        <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.25.0</h3>
        
        ### Description:
        Update a list of existing Download Shares.
        
        ### Precondition:
        User with <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage download share</span> permissions on target node.
        
        ### Postcondition:
        Download Shares are successfully updated.
        
        ### Further Information:
        Maximum number of shares is 200
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v4/shares/downloads"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateDownloadSharesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 406:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 412:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 502:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def update_upload_share(self, request: operations.UpdateUploadShareRequest) -> operations.UpdateUploadShareResponse:
        r"""Update Upload Share
        <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.11.0</h3>
        
        ### Description:
        Update existing Upload Share (aka File Request).
        
        ### Precondition:
        User has <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage upload share</span> permissions on target container.
        
        ### Postcondition:
        Upload Share successfully updated.
        
        ### Further Information:
        
        * `name` is limited to **150** characters.
        * `notes` are limited to **255** characters.
        * `password` is limited to **1024** characters.
        
        Forbidden characters in passwords: [`&`, `'`, `<`, `>`]
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v4/shares/uploads/{share_id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateUploadShareResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UploadShare])
                res.upload_share = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.update_upload_share_400_application_json_one_of = out
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
        elif r.status_code == 502:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out

        return res

    
    def update_upload_shares(self, request: operations.UpdateUploadSharesRequest) -> operations.UpdateUploadSharesResponse:
        r"""Update List of Upload Shares
        <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.25.0</h3>
        
        ### Description:
        Update a list of existing Upload Shares (aka File Request).
        
        ### Precondition:
        User has <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage upload share</span> permissions on target container.
        
        ### Postcondition:
        Upload Shares successfully updated.
        
        ### Further Information:
        Maximum number of shares is 200
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v4/shares/uploads"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateUploadSharesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 406:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 412:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 502:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    