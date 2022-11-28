import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Enterprises:
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

    
    def androidenterprise_enterprises_acknowledge_notification_set(self, request: operations.AndroidenterpriseEnterprisesAcknowledgeNotificationSetRequest) -> operations.AndroidenterpriseEnterprisesAcknowledgeNotificationSetResponse:
        r"""Acknowledges notifications that were received from Enterprises.PullNotificationSet to prevent subsequent calls from returning the same notifications.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/androidenterprise/v1/enterprises/acknowledgeNotificationSet"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidenterpriseEnterprisesAcknowledgeNotificationSetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def androidenterprise_enterprises_complete_signup(self, request: operations.AndroidenterpriseEnterprisesCompleteSignupRequest) -> operations.AndroidenterpriseEnterprisesCompleteSignupResponse:
        r"""Completes the signup flow, by specifying the Completion token and Enterprise token. This request must not be called multiple times for a given Enterprise Token.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/androidenterprise/v1/enterprises/completeSignup"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidenterpriseEnterprisesCompleteSignupResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Enterprise])
                res.enterprise = out

        return res

    
    def androidenterprise_enterprises_create_web_token(self, request: operations.AndroidenterpriseEnterprisesCreateWebTokenRequest) -> operations.AndroidenterpriseEnterprisesCreateWebTokenResponse:
        r"""Returns a unique token to access an embeddable UI. To generate a web UI, pass the generated token into the managed Google Play javascript API. Each token may only be used to start one UI session. See the javascript API documentation for further information.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/androidenterprise/v1/enterprises/{enterpriseId}/createWebToken", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidenterpriseEnterprisesCreateWebTokenResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AdministratorWebToken])
                res.administrator_web_token = out

        return res

    
    def androidenterprise_enterprises_enroll(self, request: operations.AndroidenterpriseEnterprisesEnrollRequest) -> operations.AndroidenterpriseEnterprisesEnrollResponse:
        r"""Enrolls an enterprise with the calling EMM.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/androidenterprise/v1/enterprises/enroll"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidenterpriseEnterprisesEnrollResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Enterprise])
                res.enterprise = out

        return res

    
    def androidenterprise_enterprises_generate_signup_url(self, request: operations.AndroidenterpriseEnterprisesGenerateSignupURLRequest) -> operations.AndroidenterpriseEnterprisesGenerateSignupURLResponse:
        r"""Generates a sign-up URL.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/androidenterprise/v1/enterprises/signupUrl"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidenterpriseEnterprisesGenerateSignupURLResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SignupInfo])
                res.signup_info = out

        return res

    
    def androidenterprise_enterprises_get(self, request: operations.AndroidenterpriseEnterprisesGetRequest) -> operations.AndroidenterpriseEnterprisesGetResponse:
        r"""Retrieves the name and domain of an enterprise.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/androidenterprise/v1/enterprises/{enterpriseId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidenterpriseEnterprisesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Enterprise])
                res.enterprise = out

        return res

    
    def androidenterprise_enterprises_get_service_account(self, request: operations.AndroidenterpriseEnterprisesGetServiceAccountRequest) -> operations.AndroidenterpriseEnterprisesGetServiceAccountResponse:
        r"""Returns a service account and credentials. The service account can be bound to the enterprise by calling setAccount. The service account is unique to this enterprise and EMM, and will be deleted if the enterprise is unbound. The credentials contain private key data and are not stored server-side. This method can only be called after calling Enterprises.Enroll or Enterprises.CompleteSignup, and before Enterprises.SetAccount; at other times it will return an error. Subsequent calls after the first will generate a new, unique set of credentials, and invalidate the previously generated credentials. Once the service account is bound to the enterprise, it can be managed using the serviceAccountKeys resource.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/androidenterprise/v1/enterprises/{enterpriseId}/serviceAccount", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidenterpriseEnterprisesGetServiceAccountResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ServiceAccount])
                res.service_account = out

        return res

    
    def androidenterprise_enterprises_get_store_layout(self, request: operations.AndroidenterpriseEnterprisesGetStoreLayoutRequest) -> operations.AndroidenterpriseEnterprisesGetStoreLayoutResponse:
        r"""Returns the store layout for the enterprise. If the store layout has not been set, returns \"basic\" as the store layout type and no homepage.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/androidenterprise/v1/enterprises/{enterpriseId}/storeLayout", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidenterpriseEnterprisesGetStoreLayoutResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.StoreLayout])
                res.store_layout = out

        return res

    
    def androidenterprise_enterprises_list(self, request: operations.AndroidenterpriseEnterprisesListRequest) -> operations.AndroidenterpriseEnterprisesListResponse:
        r"""Looks up an enterprise by domain name. This is only supported for enterprises created via the Google-initiated creation flow. Lookup of the id is not needed for enterprises created via the EMM-initiated flow since the EMM learns the enterprise ID in the callback specified in the Enterprises.generateSignupUrl call.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/androidenterprise/v1/enterprises"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidenterpriseEnterprisesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EnterprisesListResponse])
                res.enterprises_list_response = out

        return res

    
    def androidenterprise_enterprises_pull_notification_set(self, request: operations.AndroidenterpriseEnterprisesPullNotificationSetRequest) -> operations.AndroidenterpriseEnterprisesPullNotificationSetResponse:
        r"""Pulls and returns a notification set for the enterprises associated with the service account authenticated for the request. The notification set may be empty if no notification are pending. A notification set returned needs to be acknowledged within 20 seconds by calling Enterprises.AcknowledgeNotificationSet, unless the notification set is empty. Notifications that are not acknowledged within the 20 seconds will eventually be included again in the response to another PullNotificationSet request, and those that are never acknowledged will ultimately be deleted according to the Google Cloud Platform Pub/Sub system policy. Multiple requests might be performed concurrently to retrieve notifications, in which case the pending notifications (if any) will be split among each caller, if any are pending. If no notifications are present, an empty notification list is returned. Subsequent requests may return more notifications once they become available.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/androidenterprise/v1/enterprises/pullNotificationSet"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidenterpriseEnterprisesPullNotificationSetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NotificationSet])
                res.notification_set = out

        return res

    
    def androidenterprise_enterprises_send_test_push_notification(self, request: operations.AndroidenterpriseEnterprisesSendTestPushNotificationRequest) -> operations.AndroidenterpriseEnterprisesSendTestPushNotificationResponse:
        r"""Sends a test notification to validate the EMM integration with the Google Cloud Pub/Sub service for this enterprise.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/androidenterprise/v1/enterprises/{enterpriseId}/sendTestPushNotification", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidenterpriseEnterprisesSendTestPushNotificationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EnterprisesSendTestPushNotificationResponse])
                res.enterprises_send_test_push_notification_response = out

        return res

    
    def androidenterprise_enterprises_set_account(self, request: operations.AndroidenterpriseEnterprisesSetAccountRequest) -> operations.AndroidenterpriseEnterprisesSetAccountResponse:
        r"""Sets the account that will be used to authenticate to the API as the enterprise.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/androidenterprise/v1/enterprises/{enterpriseId}/account", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidenterpriseEnterprisesSetAccountResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EnterpriseAccount])
                res.enterprise_account = out

        return res

    
    def androidenterprise_enterprises_set_store_layout(self, request: operations.AndroidenterpriseEnterprisesSetStoreLayoutRequest) -> operations.AndroidenterpriseEnterprisesSetStoreLayoutResponse:
        r"""Sets the store layout for the enterprise. By default, storeLayoutType is set to \"basic\" and the basic store layout is enabled. The basic layout only contains apps approved by the admin, and that have been added to the available product set for a user (using the setAvailableProductSet call). Apps on the page are sorted in order of their product ID value. If you create a custom store layout (by setting storeLayoutType = \"custom\" and setting a homepage), the basic store layout is disabled.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/androidenterprise/v1/enterprises/{enterpriseId}/storeLayout", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidenterpriseEnterprisesSetStoreLayoutResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.StoreLayout])
                res.store_layout = out

        return res

    
    def androidenterprise_enterprises_unenroll(self, request: operations.AndroidenterpriseEnterprisesUnenrollRequest) -> operations.AndroidenterpriseEnterprisesUnenrollResponse:
        r"""Unenrolls an enterprise from the calling EMM.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/androidenterprise/v1/enterprises/{enterpriseId}/unenroll", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidenterpriseEnterprisesUnenrollResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    