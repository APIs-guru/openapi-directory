import warnings
import requests
from typing import Any,Optional
from sdk.models import operations, shared
from . import utils


SERVERS = [
	"https://unify.apideck.com",
]

class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url


    
    def config_security(self, security: shared.Security):
        self.client = utils.configure_security_client(security)

    
    def webhooks_add(self, request: operations.WebhooksAddRequest) -> operations.WebhooksAddResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/v1/apis"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.WebhooksAddResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CreateWebhookResponse])
                res.responses[r.status_code][content_type] = operations.WebhooksAddResponses(create_webhook_response=out)
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.WebhooksAddResponses(bad_request_response=out)
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.WebhooksAddResponses(unauthorized_response=out)
        elif r.status_code == 402:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.WebhooksAddResponses(payment_required_response=out)
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.WebhooksAddResponses(not_found_response=out)
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.WebhooksAddResponses(unprocessable_response=out)
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.WebhooksAddResponses(unexpected_error_response=out)

        return res

    
    def webhooks_all(self, request: operations.WebhooksAllRequest) -> operations.WebhooksAllResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/v1/apis"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.WebhooksAllResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetWebhooksResponse])
                res.responses[r.status_code][content_type] = operations.WebhooksAllResponses(get_webhooks_response=out)
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.WebhooksAllResponses(bad_request_response=out)
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.WebhooksAllResponses(unauthorized_response=out)
        elif r.status_code == 402:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.WebhooksAllResponses(payment_required_response=out)
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.WebhooksAllResponses(not_found_response=out)
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.WebhooksAllResponses(unprocessable_response=out)
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.WebhooksAllResponses(unexpected_error_response=out)

        return res

    
    def webhooks_delete(self, request: operations.WebhooksDeleteRequest) -> operations.WebhooksDeleteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/webhook/webhooks/{id}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.WebhooksDeleteResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DeleteWebhookResponse])
                res.responses[r.status_code][content_type] = operations.WebhooksDeleteResponses(delete_webhook_response=out)
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.WebhooksDeleteResponses(bad_request_response=out)
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.WebhooksDeleteResponses(unauthorized_response=out)
        elif r.status_code == 402:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.WebhooksDeleteResponses(payment_required_response=out)
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.WebhooksDeleteResponses(not_found_response=out)
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.WebhooksDeleteResponses(unprocessable_response=out)
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.WebhooksDeleteResponses(unexpected_error_response=out)

        return res

    
    def webhooks_execute(self, request: operations.WebhooksExecuteRequest) -> operations.WebhooksExecuteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/webhook/webhooks/{id}/execute/{serviceId}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.WebhooksExecuteResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ExecuteWebhookResponse])
                res.responses[r.status_code][content_type] = operations.WebhooksExecuteResponses(execute_webhook_response=out)
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.WebhooksExecuteResponses(bad_request_response=out)
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.WebhooksExecuteResponses(unauthorized_response=out)
        elif r.status_code == 402:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.WebhooksExecuteResponses(payment_required_response=out)
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.WebhooksExecuteResponses(not_found_response=out)
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.WebhooksExecuteResponses(unprocessable_response=out)
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.WebhooksExecuteResponses(unexpected_error_response=out)

        return res

    
    def webhooks_one(self, request: operations.WebhooksOneRequest) -> operations.WebhooksOneResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/webhook/webhooks/{id}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.WebhooksOneResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetWebhookResponse])
                res.responses[r.status_code][content_type] = operations.WebhooksOneResponses(get_webhook_response=out)
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.WebhooksOneResponses(bad_request_response=out)
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.WebhooksOneResponses(unauthorized_response=out)
        elif r.status_code == 402:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.WebhooksOneResponses(payment_required_response=out)
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.WebhooksOneResponses(not_found_response=out)
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.WebhooksOneResponses(unprocessable_response=out)
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.WebhooksOneResponses(unexpected_error_response=out)

        return res

    
    def webhooks_short_execute(self, request: operations.WebhooksShortExecuteRequest) -> operations.WebhooksShortExecuteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/webhook/webhooks/{id}/x/{serviceId}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.WebhooksShortExecuteResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ExecuteWebhookResponse])
                res.responses[r.status_code][content_type] = operations.WebhooksShortExecuteResponses(execute_webhook_response=out)
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.WebhooksShortExecuteResponses(bad_request_response=out)
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.WebhooksShortExecuteResponses(unauthorized_response=out)
        elif r.status_code == 402:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.WebhooksShortExecuteResponses(payment_required_response=out)
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.WebhooksShortExecuteResponses(not_found_response=out)
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.WebhooksShortExecuteResponses(unprocessable_response=out)
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.WebhooksShortExecuteResponses(unexpected_error_response=out)

        return res

    
    def webhooks_update(self, request: operations.WebhooksUpdateRequest) -> operations.WebhooksUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/webhook/webhooks/{id}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.WebhooksUpdateResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UpdateWebhookResponse])
                res.responses[r.status_code][content_type] = operations.WebhooksUpdateResponses(update_webhook_response=out)
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.WebhooksUpdateResponses(bad_request_response=out)
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.WebhooksUpdateResponses(unauthorized_response=out)
        elif r.status_code == 402:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.WebhooksUpdateResponses(payment_required_response=out)
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.WebhooksUpdateResponses(not_found_response=out)
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.WebhooksUpdateResponses(unprocessable_response=out)
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.WebhooksUpdateResponses(unexpected_error_response=out)

        return res

    