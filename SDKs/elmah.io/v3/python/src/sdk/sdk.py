

import requests
from typing import List,Optional
from sdk.models import shared, operations
from . import utils




SERVERS = [
	"https://elmah.io",
]


class SDK:
    

    _client: requests.Session
    _security_client: requests.Session
    _security: shared.Security
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
        
        if self._security is not None:
            self._security_client = utils.configure_security_client(self._client, self._security)
        
    

    def config_security(self, security: shared.Security):
        self._security = security
        self._security_client = utils.configure_security_client(self._client, security)
        
    
    
    
    def deployments_create(self, request: operations.DeploymentsCreateRequest) -> operations.DeploymentsCreateResponse:
        r"""Create a new deployment.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v3/deployments"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeploymentsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CreateDeploymentResult])
                res.create_deployment_result = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CreateDeploymentResult])
                res.create_deployment_result = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 429:
            pass

        return res

    
    def deployments_delete(self, request: operations.DeploymentsDeleteRequest) -> operations.DeploymentsDeleteResponse:
        r"""Delete a deployment by its ID.
        This endpoint doesn't clear the version number of messages already annotated with this deployment version.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/deployments/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeploymentsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 429:
            pass

        return res

    
    def deployments_get(self, request: operations.DeploymentsGetRequest) -> operations.DeploymentsGetResponse:
        r"""Fetch a deployment by its ID.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/deployments/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeploymentsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Deployment])
                res.deployment = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Deployment])
                res.deployment = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 429:
            pass

        return res

    
    def deployments_get_all(self) -> operations.DeploymentsGetAllResponse:
        r"""Fetch a list of deployments.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v3/deployments"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeploymentsGetAllResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Deployment]])
                res.deployments = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Deployment]])
                res.deployments = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 429:
            pass

        return res

    
    def heartbeats_create(self, request: operations.HeartbeatsCreateRequest) -> operations.HeartbeatsCreateResponse:
        r"""Create a new heartbeat.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/heartbeats/{logId}/{id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.HeartbeatsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 429:
            pass

        return res

    
    def logs_create(self, request: operations.LogsCreateRequest) -> operations.LogsCreateResponse:
        r"""Create a new log.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v3/logs"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.LogsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CreateLogResult])
                res.create_log_result = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CreateLogResult])
                res.create_log_result = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 429:
            pass

        return res

    
    def logs_disable(self, request: operations.LogsDisableRequest) -> operations.LogsDisableResponse:
        r"""Disable a log by its ID.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/logs/{id}/_disable", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.LogsDisableResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 429:
            pass

        return res

    
    def logs_enable(self, request: operations.LogsEnableRequest) -> operations.LogsEnableResponse:
        r"""Enable a log by its ID.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/logs/{id}/_enable", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.LogsEnableResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 429:
            pass

        return res

    
    def logs_get(self, request: operations.LogsGetRequest) -> operations.LogsGetResponse:
        r"""Fetch a log by its ID.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/logs/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.LogsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Log])
                res.log = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Log])
                res.log = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 429:
            pass

        return res

    
    def logs_get_all(self) -> operations.LogsGetAllResponse:
        r"""Fetch a list of logs.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v3/logs"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.LogsGetAllResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Log]])
                res.logs = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Log]])
                res.logs = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 429:
            pass

        return res

    
    def messages_create(self, request: operations.MessagesCreateRequest) -> operations.MessagesCreateResponse:
        r"""Create a new message.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/messages/{logId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.MessagesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CreateMessageResult])
                res.create_message_result = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CreateMessageResult])
                res.create_message_result = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CreateMessageResult])
                res.create_message_result = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CreateMessageResult])
                res.create_message_result = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 413:
            pass
        elif r.status_code == 429:
            pass

        return res

    
    def messages_create_bulk(self, request: operations.MessagesCreateBulkRequest) -> operations.MessagesCreateBulkResponse:
        r"""Create one or more new messages.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/messages/{logId}/_bulk", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.MessagesCreateBulkResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.CreateBulkMessageResult]])
                res.create_bulk_message_results = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.CreateBulkMessageResult]])
                res.create_bulk_message_results = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 429:
            pass

        return res

    
    def messages_delete(self, request: operations.MessagesDeleteRequest) -> operations.MessagesDeleteResponse:
        r"""Delete a message by its ID.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/messages/{logId}/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.MessagesDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 429:
            pass

        return res

    
    def messages_delete_all(self, request: operations.MessagesDeleteAllRequest) -> operations.MessagesDeleteAllResponse:
        r"""Deletes a list of messages by logid and query.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/messages/{logId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("DELETE", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.MessagesDeleteAllResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 429:
            pass

        return res

    
    def messages_fix(self, request: operations.MessagesFixRequest) -> operations.MessagesFixResponse:
        r"""Fix a message by its ID.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/messages/{logId}/{id}/_fix", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.MessagesFixResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 429:
            pass

        return res

    
    def messages_get(self, request: operations.MessagesGetRequest) -> operations.MessagesGetResponse:
        r"""Fetch a message by its ID.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/messages/{logId}/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.MessagesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Message])
                res.message = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Message])
                res.message = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 429:
            pass

        return res

    
    def messages_get_all(self, request: operations.MessagesGetAllRequest) -> operations.MessagesGetAllResponse:
        r"""Fetch messages from a log.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/messages/{logId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.MessagesGetAllResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.MessagesResult])
                res.messages_result = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.MessagesResult])
                res.messages_result = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 429:
            pass

        return res

    
    def messages_hide(self, request: operations.MessagesHideRequest) -> operations.MessagesHideResponse:
        r"""Hide a message by its ID.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/messages/{logId}/{id}/_hide", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.MessagesHideResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 429:
            pass

        return res

    
    def source_maps_create_or_update(self, request: operations.SourceMapsCreateOrUpdateRequest) -> operations.SourceMapsCreateOrUpdateResponse:
        r"""Create or update a translation between a minified JavaScript path to the minified JavaScript and source map files.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/sourcemaps/{logId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SourceMapsCreateOrUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 429:
            pass

        return res

    
    def uptime_checks_get_all(self) -> operations.UptimeChecksGetAllResponse:
        r"""Fetch a list of uptime checks. Currently in closed beta. Get in contact to get access to this endpoint.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v3/uptimechecks"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.UptimeChecksGetAllResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.UptimeCheck]])
                res.uptime_checks = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.UptimeCheck]])
                res.uptime_checks = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 429:
            pass

        return res

    