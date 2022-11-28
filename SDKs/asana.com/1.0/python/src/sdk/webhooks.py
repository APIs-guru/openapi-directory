import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Webhooks:
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

    
    def create_webhook(self, request: operations.CreateWebhookRequest) -> operations.CreateWebhookResponse:
        r"""Establish a webhook
        Establishing a webhook is a two-part process. First, a simple HTTP POST
        request initiates the creation similar to creating any other resource.
        
        Next, in the middle of this request comes the confirmation handshake.
        When a webhook is created, we will send a test POST to the target with an
        `X-Hook-Secret` header. The target must respond with a `200 OK` or `204
        No Content` and a matching `X-Hook-Secret` header to confirm that this
        webhook subscription is indeed expected. We strongly recommend storing
        this secret to be used to verify future webhook event signatures.
        
        The POST request to create the webhook will then return with the status
        of the request. If you do not acknowledge the webhook’s confirmation
        handshake it will fail to setup, and you will receive an error in
        response to your attempt to create it. This means you need to be able to
        receive and complete the webhook *while* the POST request is in-flight
        (in other words, have a server that can handle requests asynchronously).
        
        Invalid hostnames like localhost will recieve a 403 Forbidden status code.
        
        ```
        # Request
        curl -H \"Authorization: Bearer <personal_access_token>\" \
        -X POST https://app.asana.com/api/1.0/webhooks \
        -d \"resource=8675309\" \
        -d \"target=https://example.com/receive-webhook/7654\"
        ```
        
        ```
        # Handshake sent to https://example.com/
        POST /receive-webhook/7654
        X-Hook-Secret: b537207f20cbfa02357cf448134da559e8bd39d61597dcd5631b8012eae53e81
        ```
        
        ```
        # Handshake response sent by example.com
        HTTP/1.1 200
        X-Hook-Secret: b537207f20cbfa02357cf448134da559e8bd39d61597dcd5631b8012eae53e81
        ```
        
        ```
        # Response
        HTTP/1.1 201
        {
          \"data\": {
            \"gid\": \"43214\",
            \"resource\": {
              \"gid\": \"8675309\",
              \"name\": \"Bugs\"
            },
            \"target\": \"https://example.com/receive-webhook/7654\",
            \"active\": false,
            \"last_success_at\": null,
            \"last_failure_at\": null,
            \"last_failure_content\": null
          }
        }
        ```
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/webhooks"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateWebhookResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateWebhook201ApplicationJSON])
                res.create_webhook_201_application_json_object = out
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
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out

        return res

    
    def delete_webhook(self, request: operations.DeleteWebhookRequest) -> operations.DeleteWebhookResponse:
        r"""Delete a webhook
        This method *permanently* removes a webhook. Note that it may be possible to receive a request that was already in flight after deleting the webhook, but no further requests will be issued.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/webhooks/{webhook_gid}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteWebhookResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteWebhook200ApplicationJSON])
                res.delete_webhook_200_application_json_object = out
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
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out

        return res

    
    def get_webhook(self, request: operations.GetWebhookRequest) -> operations.GetWebhookResponse:
        r"""Get a webhook
        Returns the full record for the given webhook.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/webhooks/{webhook_gid}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetWebhookResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetWebhook200ApplicationJSON])
                res.get_webhook_200_application_json_object = out
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
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out

        return res

    
    def get_webhooks(self, request: operations.GetWebhooksRequest) -> operations.GetWebhooksResponse:
        r"""Get multiple webhooks
        Get the compact representation of all webhooks your app has registered for the authenticated user in the given workspace.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/webhooks"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetWebhooksResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetWebhooks200ApplicationJSON])
                res.get_webhooks_200_application_json_object = out
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
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out

        return res

    