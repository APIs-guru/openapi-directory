import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Activities:
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

    
    def activities_add(self, request: operations.ActivitiesAddRequest) -> operations.ActivitiesAddResponse:
        r"""Create activity
        Create activity
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/crm/activities"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ActivitiesAddResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CreateActivityResponse])
                res.create_activity_response = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BadRequestResponse])
                res.bad_request_response = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UnauthorizedResponse])
                res.unauthorized_response = out
        elif r.status_code == 402:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PaymentRequiredResponse])
                res.payment_required_response = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NotFoundResponse])
                res.not_found_response = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UnprocessableResponse])
                res.unprocessable_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UnexpectedErrorResponse])
                res.unexpected_error_response = out

        return res

    
    def activities_all(self, request: operations.ActivitiesAllRequest) -> operations.ActivitiesAllResponse:
        r"""List activities
        List activities
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/crm/activities"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ActivitiesAllResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetActivitiesResponse])
                res.get_activities_response = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BadRequestResponse])
                res.bad_request_response = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UnauthorizedResponse])
                res.unauthorized_response = out
        elif r.status_code == 402:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PaymentRequiredResponse])
                res.payment_required_response = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NotFoundResponse])
                res.not_found_response = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UnprocessableResponse])
                res.unprocessable_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UnexpectedErrorResponse])
                res.unexpected_error_response = out

        return res

    
    def activities_delete(self, request: operations.ActivitiesDeleteRequest) -> operations.ActivitiesDeleteResponse:
        r"""Delete activity
        Delete activity
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/crm/activities/{id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ActivitiesDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DeleteActivityResponse])
                res.delete_activity_response = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BadRequestResponse])
                res.bad_request_response = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UnauthorizedResponse])
                res.unauthorized_response = out
        elif r.status_code == 402:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PaymentRequiredResponse])
                res.payment_required_response = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NotFoundResponse])
                res.not_found_response = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UnprocessableResponse])
                res.unprocessable_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UnexpectedErrorResponse])
                res.unexpected_error_response = out

        return res

    
    def activities_one(self, request: operations.ActivitiesOneRequest) -> operations.ActivitiesOneResponse:
        r"""Get activity
        Get activity
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/crm/activities/{id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ActivitiesOneResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetActivityResponse])
                res.get_activity_response = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BadRequestResponse])
                res.bad_request_response = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UnauthorizedResponse])
                res.unauthorized_response = out
        elif r.status_code == 402:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PaymentRequiredResponse])
                res.payment_required_response = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NotFoundResponse])
                res.not_found_response = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UnprocessableResponse])
                res.unprocessable_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UnexpectedErrorResponse])
                res.unexpected_error_response = out

        return res

    
    def activities_update(self, request: operations.ActivitiesUpdateRequest) -> operations.ActivitiesUpdateResponse:
        r"""Update activity
        Update activity
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/crm/activities/{id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ActivitiesUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UpdateActivityResponse])
                res.update_activity_response = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BadRequestResponse])
                res.bad_request_response = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UnauthorizedResponse])
                res.unauthorized_response = out
        elif r.status_code == 402:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PaymentRequiredResponse])
                res.payment_required_response = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NotFoundResponse])
                res.not_found_response = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UnprocessableResponse])
                res.unprocessable_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UnexpectedErrorResponse])
                res.unexpected_error_response = out

        return res

    