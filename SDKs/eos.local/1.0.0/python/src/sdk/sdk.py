

import requests
from typing import List,Optional
from sdk.models import operations
from . import utils




SERVERS = [
	"http://eos.local",
	"https://{protocol}://{host}:{port}/v1/",
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
        
    
    
    
    def connect(self, request: operations.ConnectRequest) -> operations.ConnectResponse:
        r"""connect
        Initiate a connection to a specified peer.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/net/connect"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ConnectResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.connect_200_application_json_string = r.content

        return res

    
    def connections(self, request: operations.ConnectionsRequest) -> operations.ConnectionsResponse:
        r"""connections
        Returns an array of all peer connection statuses.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/net/connections"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ConnectionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[operations.Connections200ApplicationJSON]])
                res.connections_200_application_json_objects = out

        return res

    
    def disconnect(self, request: operations.DisconnectRequest) -> operations.DisconnectResponse:
        r"""disconnect
        Initiate disconnection from a specified peer.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/net/disconnect"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DisconnectResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.disconnect_200_application_json_string = r.content

        return res

    
    def status(self, request: operations.StatusRequest) -> operations.StatusResponse:
        r"""status
        Retrieves the connection status for a specified peer.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/net/status"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.StatusResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Status200ApplicationJSON])
                res.status_200_application_json_object = out

        return res

    