import requests
from typing import List,Optional
from sdk.models import shared, operations
from . import utils

class Eventlog:
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

    
    def request_audit_node_user_data(self, request: operations.RequestAuditNodeUserDataRequest) -> operations.RequestAuditNodeUserDataResponse:
        r"""Request node assigned users with permissions
        <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.3.0</h3>
        
        ### Description: 
        Retrieve a list of all nodes of type room, and the room assignment users with permissions.
        
        ### Precondition:
        Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read audit log</span> required.
        
        ### Postcondition:
        List of rooms and their assigned users is returned.
        
        ### Further Information:
        
        ### Filtering:
        All filter fields are connected via logical conjunction (**AND**)  
        Except for `userName`, `userFirstName` and  `userLastName` - these are connected via logical disjunction (**OR**)  
        Filter string syntax: `FIELD_NAME:OPERATOR:VALUE[:VALUE...]`
        
        <details style=\"padding-left: 10px\">
        <summary style=\"cursor: pointer; outline: none\"><strong>Example</strong></summary>
        
        `userName:cn:searchString_1|userFirstName:cn:searchString_2|nodeId:eq:2`  
        Filter by user login containing `searchString_1` **OR** first name containing `searchString_2` **AND** node ID equals `2`.
        
        </details>
        
        ### Filtering options:
        <details style=\"padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;\">
        <summary style=\"cursor: pointer; outline: none\"><strong>Expand</strong></summary>
        
        | `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
        | :--- | :--- | :--- | :--- | :--- |
        | `nodeId` | Node ID filter | `eq` | Node ID equals value. | `positive Integer` |
        | `nodeName` | Node name filter | `cn, eq` | Node name contains / equals value. | `search String` |
        | `nodeParentId` | Node parent ID filter | `eq` | Parent ID equals value. | `positive Integer`<br>Parent ID `0` is the root node. |
        | `userId` | User ID filter | `eq` | User ID equals value. | `positive Integer` |
        | `userName` | Username (login) filter | `cn, eq` | Username contains / equals value. | `search String` |
        | `userFirstName` | User first name filter | `cn, eq` | User first name contains / equals value. | `search String` |
        | `userLastName` | User last name filter | `cn, eq` | User last name contains / equals value. | `search String` |
        | `permissionsManage` | Filter the users that do (not) have `manage` permissions in this room | `eq` |  | `true or false` |
        | `nodeIsEncrypted` | Encrypted node filter | `eq` |  | `true or false` |
        | `nodeHasActivitiesLog` | Activities log filter | `eq` |  | `true or false` |
        
        </details>
        
        ### Deprecated filtering options:
        <details style=\"padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;\">
        <summary style=\"cursor: pointer; outline: none\"><strong>Expand</strong></summary>
        
        | `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
        | :--- | :--- | :--- | :--- | :--- |
        | <del>`nodeHasRecycleBin`</del> | Recycle bin filter<br>**Filter has no effect!** | `eq` |  | `true or false` |
        
        </details>
        
        ---
        
        ### Sorting:
        Sort string syntax: `FIELD_NAME:ORDER`  
        `ORDER` can be `asc` or `desc`.  
        Multiple sort fields are supported.
        
        <details style=\"padding-left: 10px\">
        <summary style=\"cursor: pointer; outline: none\"><strong>Example</strong></summary>
        
        `nodeName:asc`  
        Sort by `nodeName` ascending.
        
        </details>
        
        ### Sorting options:
        <details style=\"padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;\">
        <summary style=\"cursor: pointer; outline: none\"><strong>Expand</strong></summary>
        
        | `FIELD_NAME` | Description |
        | :--- | :--- |
        | `nodeId` | Node ID |
        | `nodeName` | Node name |
        | `nodeParentId` | Node parent ID |
        | `nodeSize` | Node size |
        | `nodeQuota` | Node quota |
        
        </details>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v4/eventlog/audits/nodes"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RequestAuditNodeUserDataResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.AuditNodeResponse]])
                res.audit_node_responses = out
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
        elif r.status_code == 406:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 412:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out

        return res

    
    def request_log_events_as_json(self, request: operations.RequestLogEventsAsJSONRequest) -> operations.RequestLogEventsAsJSONResponse:
        r"""Request system events
        <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.3.0</h3>
        
        ### Description: 
        Retrieve eventlog (audit log) events.
        
        ### Precondition:
        Role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Log Auditor</span> required.
        
        ### Postcondition:
        List of audit log events is returned.
        
        ### Further Information:
        Output is limited to **500** entries.  
        For more results please use filter criteria and paging (`offset` + `limit`). 
        
        Allowed `Accept-Header`:
        * `Accept: application/json`
        * `Accept: text/csv`  
        
        ---
        
        Sort string syntax: `FIELD_NAME:ORDER`  
        `ORDER` can be `asc` or `desc`.  
        Multiple sort fields are supported.  
        
        <details style=\"padding-left: 10px\">
        <summary style=\"cursor: pointer; outline: none\"><strong>Example</strong></summary>
        
        `time:desc`  
        Sort by `time` descending (default sort option).
        
        </details>
        
        ### Sorting options:
        <details style=\"padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;\">
        <summary style=\"cursor: pointer; outline: none\"><strong>Expand</strong></summary>
        
        | `FIELD_NAME` | Description |
        | :--- | :--- |
        | `time` | Event timestamp |
        
        </details>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v4/eventlog/events"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RequestLogEventsAsJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LogEventList])
                res.log_event_list = out
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

    
    def request_log_operations(self, request: operations.RequestLogOperationsRequest) -> operations.RequestLogOperationsResponse:
        r"""Request allowed Log Operations
        <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.3.0</h3>
        
        ### Description: 
        Retrieve eventlog (audit log) operation IDs and the associated log operation description.
        
        ### Precondition:
        Role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Log Auditor</span> required.
        
        ### Postcondition:
        List of available log operations is returned.
        
        ### Further Information:
        None.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v4/eventlog/operations"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RequestLogOperationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LogOperationList])
                res.log_operation_list = out
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
        elif r.status_code == 406:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 412:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out

        return res

    