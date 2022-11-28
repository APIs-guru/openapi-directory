import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class Alerts:
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

    
    def alertcenter_alerts_batch_delete(self, request: operations.AlertcenterAlertsBatchDeleteRequest) -> operations.AlertcenterAlertsBatchDeleteResponse:
        r"""Performs batch delete operation on alerts.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1beta1/alerts:batchDelete"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AlertcenterAlertsBatchDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BatchDeleteAlertsResponse])
                res.batch_delete_alerts_response = out

        return res

    
    def alertcenter_alerts_batch_undelete(self, request: operations.AlertcenterAlertsBatchUndeleteRequest) -> operations.AlertcenterAlertsBatchUndeleteResponse:
        r"""Performs batch undelete operation on alerts.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1beta1/alerts:batchUndelete"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AlertcenterAlertsBatchUndeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BatchUndeleteAlertsResponse])
                res.batch_undelete_alerts_response = out

        return res

    
    def alertcenter_alerts_delete(self, request: operations.AlertcenterAlertsDeleteRequest) -> operations.AlertcenterAlertsDeleteResponse:
        r"""Marks the specified alert for deletion. An alert that has been marked for deletion is removed from Alert Center after 30 days. Marking an alert for deletion has no effect on an alert which has already been marked for deletion. Attempting to mark a nonexistent alert for deletion results in a `NOT_FOUND` error.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/alerts/{alertId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AlertcenterAlertsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def alertcenter_alerts_feedback_create(self, request: operations.AlertcenterAlertsFeedbackCreateRequest) -> operations.AlertcenterAlertsFeedbackCreateResponse:
        r"""Creates new feedback for an alert. Attempting to create a feedback for a non-existent alert returns `NOT_FOUND` error. Attempting to create a feedback for an alert that is marked for deletion returns `FAILED_PRECONDITION' error.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/alerts/{alertId}/feedback", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AlertcenterAlertsFeedbackCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AlertFeedback])
                res.alert_feedback = out

        return res

    
    def alertcenter_alerts_feedback_list(self, request: operations.AlertcenterAlertsFeedbackListRequest) -> operations.AlertcenterAlertsFeedbackListResponse:
        r"""Lists all the feedback for an alert. Attempting to list feedbacks for a non-existent alert returns `NOT_FOUND` error.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/alerts/{alertId}/feedback", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AlertcenterAlertsFeedbackListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListAlertFeedbackResponse])
                res.list_alert_feedback_response = out

        return res

    
    def alertcenter_alerts_get(self, request: operations.AlertcenterAlertsGetRequest) -> operations.AlertcenterAlertsGetResponse:
        r"""Gets the specified alert. Attempting to get a nonexistent alert returns `NOT_FOUND` error.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/alerts/{alertId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AlertcenterAlertsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Alert])
                res.alert = out

        return res

    
    def alertcenter_alerts_get_metadata(self, request: operations.AlertcenterAlertsGetMetadataRequest) -> operations.AlertcenterAlertsGetMetadataResponse:
        r"""Returns the metadata of an alert. Attempting to get metadata for a non-existent alert returns `NOT_FOUND` error.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/alerts/{alertId}/metadata", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AlertcenterAlertsGetMetadataResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AlertMetadata])
                res.alert_metadata = out

        return res

    
    def alertcenter_alerts_list(self, request: operations.AlertcenterAlertsListRequest) -> operations.AlertcenterAlertsListResponse:
        r"""Lists the alerts.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1beta1/alerts"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AlertcenterAlertsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListAlertsResponse])
                res.list_alerts_response = out

        return res

    
    def alertcenter_alerts_undelete(self, request: operations.AlertcenterAlertsUndeleteRequest) -> operations.AlertcenterAlertsUndeleteResponse:
        r"""Restores, or \"undeletes\", an alert that was marked for deletion within the past 30 days. Attempting to undelete an alert which was marked for deletion over 30 days ago (which has been removed from the Alert Center database) or a nonexistent alert returns a `NOT_FOUND` error. Attempting to undelete an alert which has not been marked for deletion has no effect.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/alerts/{alertId}:undelete", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AlertcenterAlertsUndeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Alert])
                res.alert = out

        return res

    