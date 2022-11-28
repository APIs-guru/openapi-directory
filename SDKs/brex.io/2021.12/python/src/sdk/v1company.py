import requests
from typing import Any,List,Optional
from sdk.models import operations
from . import utils

class V1Company:
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

    
    def company_alternative_search(self, request: operations.CompanyAlternativeSearchRequest) -> operations.CompanyAlternativeSearchResponse:
        r"""Retrieves a list of companies from the KYC API company index
        KYC API company index lookup by country and mixed parameters. This function requires a country code then a mixture of name
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/company/search/{country}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CompanyAlternativeSearchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.company_alternative_search_200_application_json_anies = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.company_alternative_search_default_application_json_any = out

        return res

    
    def company_announcement(self, request: operations.CompanyAnnouncementRequest) -> operations.CompanyAnnouncementResponse:
        r"""Retrieves announcement data
        Request full announcement data identified by announcement id
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/company/announcement/{id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CompanyAnnouncementResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.company_announcement_200_application_json_anies = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.company_announcement_default_application_json_any = out

        return res

    
    def company_deepsearch_isin(self, request: operations.CompanyDeepsearchIsinRequest) -> operations.CompanyDeepsearchIsinResponse:
        r"""Retrieves a list of stock exchange listings
        Lookup stock exchange listings identified by an ISIN (International Securities Identification Number) number. Search is forwarded to a provider.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v1/company/deepsearch/isin"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CompanyDeepsearchIsinResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.company_deepsearch_isin_200_application_json_anies = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.company_deepsearch_isin_default_application_json_any = out

        return res

    
    def company_deepsearch_lei(self, request: operations.CompanyDeepsearchLeiRequest) -> operations.CompanyDeepsearchLeiResponse:
        r"""Retrieves a list of companies
        Lookup companies identified by a LEI (Legal Entity Identifier) number. Search is forwarded to a provider.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/company/deepsearch/lei/{number}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CompanyDeepsearchLeiResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.company_deepsearch_lei_200_application_json_any = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.company_deepsearch_lei_default_application_json_any = out

        return res

    
    def company_deepsearch_name(self, request: operations.CompanyDeepsearchNameRequest) -> operations.CompanyDeepsearchNameResponse:
        r"""Retrieves a list of companies from the official business register
        Search for companies with a certain name. Search is forwarded to the respective business register of the country.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/company/deepsearch/name/{country}/{name}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CompanyDeepsearchNameResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.company_deepsearch_name_200_application_json_anies = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.company_deepsearch_name_default_application_json_any = out

        return res

    
    def company_deepsearch_number(self, request: operations.CompanyDeepsearchNumberRequest) -> operations.CompanyDeepsearchNumberResponse:
        r"""Retrieves a list of companies from the official business register
        Search for companies with a certain register number. Search is forwarded to the respective business register of the country.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/company/deepsearch/number/{country}/{number}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CompanyDeepsearchNumberResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.company_deepsearch_number_200_application_json_anies = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.company_deepsearch_number_default_application_json_any = out

        return res

    
    def company_id_announcements(self, request: operations.CompanyIDAnnouncementsRequest) -> operations.CompanyIDAnnouncementsResponse:
        r"""Retrieves company announcements
        Search announcements filed to the business register from a company identified by an id
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/company/{id}/announcements", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CompanyIDAnnouncementsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.company_id_announcements_200_application_json_anies = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.company_id_announcements_default_application_json_any = out

        return res

    
    def company_id_dataset(self, request: operations.CompanyIDDatasetRequest) -> operations.CompanyIDDatasetResponse:
        r"""Retrieves company details
        Get company details by id. The level of details is defined by the dataset parameter
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/company/{id}/{dataset}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CompanyIDDatasetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.oneapi_1v1_1company_1deepsearch_1lei_1_percent_7_bnumber_percent_7_d_get_responses_200_content_application_1json_schema_properties_company = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.company_id_dataset_default_application_json_any = out

        return res

    
    def company_id_super(self, request: operations.CompanyIDSuperRequest) -> operations.CompanyIDSuperResponse:
        r"""Retrieves structured data extracted from a company document
        Request company superdata identified by company id
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/company/{id}/super/{country}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CompanyIDSuperResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.company_id_super_200_application_json_anies = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.company_id_super_default_application_json_any = out

        return res

    
    def company_monitor_change_types_list(self, request: operations.CompanyMonitorChangeTypesListRequest) -> operations.CompanyMonitorChangeTypesListResponse:
        r"""Get available ChangeTypes
        Get current list of available ChangeTypes to subscribe to
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v1/company/monitoring/changeTypes"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CompanyMonitorChangeTypesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[str]])
                res.company_monitor_change_types_list_200_application_json_strings = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.company_monitor_change_types_list_default_application_json_any = out

        return res

    
    def company_monitor_id(self, request: operations.CompanyMonitorIDRequest) -> operations.CompanyMonitorIDResponse:
        r"""Get monitor status for specific company id
        Query status of registered monitors for a specific company identified by a company id
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/company/monitoring/list/{id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CompanyMonitorIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.company_monitor_id_200_application_json_anies = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.company_monitor_id_default_application_json_any = out

        return res

    
    def company_monitor_list(self, request: operations.CompanyMonitorListRequest) -> operations.CompanyMonitorListResponse:
        r"""Retrieves a list of registered monitors
        Query list of all registered monitors for logged in user
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v1/company/monitoring/list"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CompanyMonitorListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.company_monitor_list_200_application_json_anies = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.company_monitor_list_default_application_json_any = out

        return res

    
    def company_monitor_register(self, request: operations.CompanyMonitorRegisterRequest) -> operations.CompanyMonitorRegisterResponse:
        r"""Register a Company for monitoring
        Add a company to your perpetual monitoring list and register a callback URL to get monitoring alerts.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/company/monitoring/register/{id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CompanyMonitorRegisterResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.company_monitor_register_200_application_json_any = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.company_monitor_register_default_application_json_any = out

        return res

    
    def company_monitor_unregister(self, request: operations.CompanyMonitorUnregisterRequest) -> operations.CompanyMonitorUnregisterResponse:
        r"""Deactivates an active notification
        Deactivate a previously registered company monitor identified by the notifier id
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/company/monitoring/unregister/{id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CompanyMonitorUnregisterResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.company_monitor_unregister_default_application_json_any = out

        return res

    
    def company_notification_id(self, request: operations.CompanyNotificationIDRequest) -> operations.CompanyNotificationIDResponse:
        r"""Retrieves a list of registered notifications
        Query list of registered notifications for a specific company identified by a company id
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/company/notification/list/{id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CompanyNotificationIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.company_notification_id_200_application_json_anies = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.company_notification_id_default_application_json_any = out

        return res

    
    def company_notification_list(self, request: operations.CompanyNotificationListRequest) -> operations.CompanyNotificationListResponse:
        r"""Retrieves a list of registered notifications
        Query list of registered callback URLs for logged in user
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v1/company/notification/list"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CompanyNotificationListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.company_notification_list_200_application_json_anies = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.company_notification_list_default_application_json_any = out

        return res

    
    def company_notification_register(self, request: operations.CompanyNotificationRegisterRequest) -> operations.CompanyNotificationRegisterResponse:
        r"""Creates a new notification
        Register a new callback URL to get notifications about companies.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/company/notification/register/{id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CompanyNotificationRegisterResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.company_notification_register_200_application_json_any = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.company_notification_register_default_application_json_any = out

        return res

    
    def company_notification_unregister(self, request: operations.CompanyNotificationUnregisterRequest) -> operations.CompanyNotificationUnregisterResponse:
        r"""Unregister a company from Monitoring
        Deactivate a previously registered company monitor identified by the notifier id
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/company/notification/unregister/{id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CompanyNotificationUnregisterResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.company_notification_unregister_default_application_json_any = out

        return res

    
    def company_search_name(self, request: operations.CompanySearchNameRequest) -> operations.CompanySearchNameResponse:
        r"""Retrieves a list of companies from the KYC API company index
        KYC API company index lookup for companies with a certain name in a country.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/company/search/name/{country}/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CompanySearchNameResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.company_search_name_200_application_json_anies = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.company_search_name_default_application_json_any = out

        return res

    
    def company_search_number(self, request: operations.CompanySearchNumberRequest) -> operations.CompanySearchNumberResponse:
        r"""Retrieves a list of companies from the KYC API company index
        KYC API company index lookup for companies with a certain register number in a country.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/company/search/number/{country}/{number}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CompanySearchNumberResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.company_search_number_200_application_json_anies = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.company_search_number_default_application_json_any = out

        return res

    