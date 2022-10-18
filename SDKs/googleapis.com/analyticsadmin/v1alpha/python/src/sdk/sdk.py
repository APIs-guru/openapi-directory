import warnings
import requests
from typing import Any,List,Optional
from sdk.models import operations, shared
from . import utils


SERVERS = [
	"https://analyticsadmin.googleapis.com/",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
    
    
    def analyticsadmin_account_summaries_list(self, request: operations.AnalyticsadminAccountSummariesListRequest) -> operations.AnalyticsadminAccountSummariesListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/v1alpha/accountSummaries"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsadminAccountSummariesListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleAnalyticsAdminV1alphaListAccountSummariesResponse])
                res.google_analytics_admin_v1alpha_list_account_summaries_response = out

        return res

    
    
    def analyticsadmin_accounts_list(self, request: operations.AnalyticsadminAccountsListRequest) -> operations.AnalyticsadminAccountsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/v1alpha/accounts"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsadminAccountsListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleAnalyticsAdminV1alphaListAccountsResponse])
                res.google_analytics_admin_v1alpha_list_accounts_response = out

        return res

    
    
    def analyticsadmin_accounts_provision_account_ticket(self, request: operations.AnalyticsadminAccountsProvisionAccountTicketRequest) -> operations.AnalyticsadminAccountsProvisionAccountTicketResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/v1alpha/accounts:provisionAccountTicket"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsadminAccountsProvisionAccountTicketResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleAnalyticsAdminV1alphaProvisionAccountTicketResponse])
                res.google_analytics_admin_v1alpha_provision_account_ticket_response = out

        return res

    
    
    def analyticsadmin_accounts_search_change_history_events(self, request: operations.AnalyticsadminAccountsSearchChangeHistoryEventsRequest) -> operations.AnalyticsadminAccountsSearchChangeHistoryEventsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1alpha/{account}:searchChangeHistoryEvents", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsadminAccountsSearchChangeHistoryEventsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsResponse])
                res.google_analytics_admin_v1alpha_search_change_history_events_response = out

        return res

    
    
    def analyticsadmin_properties_acknowledge_user_data_collection(self, request: operations.AnalyticsadminPropertiesAcknowledgeUserDataCollectionRequest) -> operations.AnalyticsadminPropertiesAcknowledgeUserDataCollectionResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1alpha/{property}:acknowledgeUserDataCollection", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsadminPropertiesAcknowledgeUserDataCollectionResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.google_analytics_admin_v1alpha_acknowledge_user_data_collection_response = out

        return res

    
    
    def analyticsadmin_properties_audiences_create(self, request: operations.AnalyticsadminPropertiesAudiencesCreateRequest) -> operations.AnalyticsadminPropertiesAudiencesCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1alpha/{parent}/audiences", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsadminPropertiesAudiencesCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleAnalyticsAdminV1alphaAudience])
                res.google_analytics_admin_v1alpha_audience = out

        return res

    
    
    def analyticsadmin_properties_audiences_list(self, request: operations.AnalyticsadminPropertiesAudiencesListRequest) -> operations.AnalyticsadminPropertiesAudiencesListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1alpha/{parent}/audiences", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsadminPropertiesAudiencesListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleAnalyticsAdminV1alphaListAudiencesResponse])
                res.google_analytics_admin_v1alpha_list_audiences_response = out

        return res

    
    
    def analyticsadmin_properties_conversion_events_create(self, request: operations.AnalyticsadminPropertiesConversionEventsCreateRequest) -> operations.AnalyticsadminPropertiesConversionEventsCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1alpha/{parent}/conversionEvents", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsadminPropertiesConversionEventsCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleAnalyticsAdminV1alphaConversionEvent])
                res.google_analytics_admin_v1alpha_conversion_event = out

        return res

    
    
    def analyticsadmin_properties_conversion_events_list(self, request: operations.AnalyticsadminPropertiesConversionEventsListRequest) -> operations.AnalyticsadminPropertiesConversionEventsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1alpha/{parent}/conversionEvents", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsadminPropertiesConversionEventsListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleAnalyticsAdminV1alphaListConversionEventsResponse])
                res.google_analytics_admin_v1alpha_list_conversion_events_response = out

        return res

    
    
    def analyticsadmin_properties_create(self, request: operations.AnalyticsadminPropertiesCreateRequest) -> operations.AnalyticsadminPropertiesCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/v1alpha/properties"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsadminPropertiesCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleAnalyticsAdminV1alphaProperty])
                res.google_analytics_admin_v1alpha_property = out

        return res

    
    
    def analyticsadmin_properties_custom_dimensions_create(self, request: operations.AnalyticsadminPropertiesCustomDimensionsCreateRequest) -> operations.AnalyticsadminPropertiesCustomDimensionsCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1alpha/{parent}/customDimensions", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsadminPropertiesCustomDimensionsCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleAnalyticsAdminV1alphaCustomDimension])
                res.google_analytics_admin_v1alpha_custom_dimension = out

        return res

    
    
    def analyticsadmin_properties_custom_dimensions_list(self, request: operations.AnalyticsadminPropertiesCustomDimensionsListRequest) -> operations.AnalyticsadminPropertiesCustomDimensionsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1alpha/{parent}/customDimensions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsadminPropertiesCustomDimensionsListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleAnalyticsAdminV1alphaListCustomDimensionsResponse])
                res.google_analytics_admin_v1alpha_list_custom_dimensions_response = out

        return res

    
    
    def analyticsadmin_properties_custom_metrics_archive(self, request: operations.AnalyticsadminPropertiesCustomMetricsArchiveRequest) -> operations.AnalyticsadminPropertiesCustomMetricsArchiveResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1alpha/{name}:archive", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsadminPropertiesCustomMetricsArchiveResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.google_protobuf_empty = out

        return res

    
    
    def analyticsadmin_properties_custom_metrics_create(self, request: operations.AnalyticsadminPropertiesCustomMetricsCreateRequest) -> operations.AnalyticsadminPropertiesCustomMetricsCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1alpha/{parent}/customMetrics", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsadminPropertiesCustomMetricsCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleAnalyticsAdminV1alphaCustomMetric])
                res.google_analytics_admin_v1alpha_custom_metric = out

        return res

    
    
    def analyticsadmin_properties_custom_metrics_list(self, request: operations.AnalyticsadminPropertiesCustomMetricsListRequest) -> operations.AnalyticsadminPropertiesCustomMetricsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1alpha/{parent}/customMetrics", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsadminPropertiesCustomMetricsListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleAnalyticsAdminV1alphaListCustomMetricsResponse])
                res.google_analytics_admin_v1alpha_list_custom_metrics_response = out

        return res

    
    
    def analyticsadmin_properties_data_streams_create(self, request: operations.AnalyticsadminPropertiesDataStreamsCreateRequest) -> operations.AnalyticsadminPropertiesDataStreamsCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1alpha/{parent}/dataStreams", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsadminPropertiesDataStreamsCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleAnalyticsAdminV1alphaDataStream])
                res.google_analytics_admin_v1alpha_data_stream = out

        return res

    
    
    def analyticsadmin_properties_data_streams_list(self, request: operations.AnalyticsadminPropertiesDataStreamsListRequest) -> operations.AnalyticsadminPropertiesDataStreamsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1alpha/{parent}/dataStreams", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsadminPropertiesDataStreamsListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleAnalyticsAdminV1alphaListDataStreamsResponse])
                res.google_analytics_admin_v1alpha_list_data_streams_response = out

        return res

    
    
    def analyticsadmin_properties_data_streams_measurement_protocol_secrets_create(self, request: operations.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateRequest) -> operations.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1alpha/{parent}/measurementProtocolSecrets", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret])
                res.google_analytics_admin_v1alpha_measurement_protocol_secret = out

        return res

    
    
    def analyticsadmin_properties_data_streams_measurement_protocol_secrets_list(self, request: operations.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListRequest) -> operations.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1alpha/{parent}/measurementProtocolSecrets", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleAnalyticsAdminV1alphaListMeasurementProtocolSecretsResponse])
                res.google_analytics_admin_v1alpha_list_measurement_protocol_secrets_response = out

        return res

    
    
    def analyticsadmin_properties_display_video360_advertiser_link_proposals_approve(self, request: operations.AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsApproveRequest) -> operations.AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsApproveResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1alpha/{name}:approve", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsApproveResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleAnalyticsAdminV1alphaApproveDisplayVideo360AdvertiserLinkProposalResponse])
                res.google_analytics_admin_v1alpha_approve_display_video360_advertiser_link_proposal_response = out

        return res

    
    
    def analyticsadmin_properties_display_video360_advertiser_link_proposals_cancel(self, request: operations.AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCancelRequest) -> operations.AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCancelResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1alpha/{name}:cancel", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCancelResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal])
                res.google_analytics_admin_v1alpha_display_video360_advertiser_link_proposal = out

        return res

    
    
    def analyticsadmin_properties_display_video360_advertiser_link_proposals_create(self, request: operations.AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCreateRequest) -> operations.AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1alpha/{parent}/displayVideo360AdvertiserLinkProposals", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal])
                res.google_analytics_admin_v1alpha_display_video360_advertiser_link_proposal = out

        return res

    
    
    def analyticsadmin_properties_display_video360_advertiser_link_proposals_list(self, request: operations.AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsListRequest) -> operations.AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1alpha/{parent}/displayVideo360AdvertiserLinkProposals", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleAnalyticsAdminV1alphaListDisplayVideo360AdvertiserLinkProposalsResponse])
                res.google_analytics_admin_v1alpha_list_display_video360_advertiser_link_proposals_response = out

        return res

    
    
    def analyticsadmin_properties_display_video360_advertiser_links_create(self, request: operations.AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksCreateRequest) -> operations.AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1alpha/{parent}/displayVideo360AdvertiserLinks", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink])
                res.google_analytics_admin_v1alpha_display_video360_advertiser_link = out

        return res

    
    
    def analyticsadmin_properties_display_video360_advertiser_links_list(self, request: operations.AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksListRequest) -> operations.AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1alpha/{parent}/displayVideo360AdvertiserLinks", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleAnalyticsAdminV1alphaListDisplayVideo360AdvertiserLinksResponse])
                res.google_analytics_admin_v1alpha_list_display_video360_advertiser_links_response = out

        return res

    
    
    def analyticsadmin_properties_firebase_links_create(self, request: operations.AnalyticsadminPropertiesFirebaseLinksCreateRequest) -> operations.AnalyticsadminPropertiesFirebaseLinksCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1alpha/{parent}/firebaseLinks", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsadminPropertiesFirebaseLinksCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleAnalyticsAdminV1alphaFirebaseLink])
                res.google_analytics_admin_v1alpha_firebase_link = out

        return res

    
    
    def analyticsadmin_properties_firebase_links_list(self, request: operations.AnalyticsadminPropertiesFirebaseLinksListRequest) -> operations.AnalyticsadminPropertiesFirebaseLinksListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1alpha/{parent}/firebaseLinks", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsadminPropertiesFirebaseLinksListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleAnalyticsAdminV1alphaListFirebaseLinksResponse])
                res.google_analytics_admin_v1alpha_list_firebase_links_response = out

        return res

    
    
    def analyticsadmin_properties_google_ads_links_create(self, request: operations.AnalyticsadminPropertiesGoogleAdsLinksCreateRequest) -> operations.AnalyticsadminPropertiesGoogleAdsLinksCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1alpha/{parent}/googleAdsLinks", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsadminPropertiesGoogleAdsLinksCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleAnalyticsAdminV1alphaGoogleAdsLink])
                res.google_analytics_admin_v1alpha_google_ads_link = out

        return res

    
    
    def analyticsadmin_properties_google_ads_links_list(self, request: operations.AnalyticsadminPropertiesGoogleAdsLinksListRequest) -> operations.AnalyticsadminPropertiesGoogleAdsLinksListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1alpha/{parent}/googleAdsLinks", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsadminPropertiesGoogleAdsLinksListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleAnalyticsAdminV1alphaListGoogleAdsLinksResponse])
                res.google_analytics_admin_v1alpha_list_google_ads_links_response = out

        return res

    
    
    def analyticsadmin_properties_list(self, request: operations.AnalyticsadminPropertiesListRequest) -> operations.AnalyticsadminPropertiesListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/v1alpha/properties"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsadminPropertiesListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleAnalyticsAdminV1alphaListPropertiesResponse])
                res.google_analytics_admin_v1alpha_list_properties_response = out

        return res

    
    
    def analyticsadmin_properties_run_access_report(self, request: operations.AnalyticsadminPropertiesRunAccessReportRequest) -> operations.AnalyticsadminPropertiesRunAccessReportResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1alpha/{entity}:runAccessReport", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsadminPropertiesRunAccessReportResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleAnalyticsAdminV1alphaRunAccessReportResponse])
                res.google_analytics_admin_v1alpha_run_access_report_response = out

        return res

    
    
    def analyticsadmin_properties_search_ads360_links_create(self, request: operations.AnalyticsadminPropertiesSearchAds360LinksCreateRequest) -> operations.AnalyticsadminPropertiesSearchAds360LinksCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1alpha/{parent}/searchAds360Links", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsadminPropertiesSearchAds360LinksCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleAnalyticsAdminV1alphaSearchAds360Link])
                res.google_analytics_admin_v1alpha_search_ads360_link = out

        return res

    
    
    def analyticsadmin_properties_search_ads360_links_list(self, request: operations.AnalyticsadminPropertiesSearchAds360LinksListRequest) -> operations.AnalyticsadminPropertiesSearchAds360LinksListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1alpha/{parent}/searchAds360Links", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsadminPropertiesSearchAds360LinksListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleAnalyticsAdminV1alphaListSearchAds360LinksResponse])
                res.google_analytics_admin_v1alpha_list_search_ads360_links_response = out

        return res

    
    
    def analyticsadmin_properties_user_links_audit(self, request: operations.AnalyticsadminPropertiesUserLinksAuditRequest) -> operations.AnalyticsadminPropertiesUserLinksAuditResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1alpha/{parent}/userLinks:audit", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsadminPropertiesUserLinksAuditResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleAnalyticsAdminV1alphaAuditUserLinksResponse])
                res.google_analytics_admin_v1alpha_audit_user_links_response = out

        return res

    
    
    def analyticsadmin_properties_user_links_batch_create(self, request: operations.AnalyticsadminPropertiesUserLinksBatchCreateRequest) -> operations.AnalyticsadminPropertiesUserLinksBatchCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1alpha/{parent}/userLinks:batchCreate", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsadminPropertiesUserLinksBatchCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleAnalyticsAdminV1alphaBatchCreateUserLinksResponse])
                res.google_analytics_admin_v1alpha_batch_create_user_links_response = out

        return res

    
    
    def analyticsadmin_properties_user_links_batch_delete(self, request: operations.AnalyticsadminPropertiesUserLinksBatchDeleteRequest) -> operations.AnalyticsadminPropertiesUserLinksBatchDeleteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1alpha/{parent}/userLinks:batchDelete", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsadminPropertiesUserLinksBatchDeleteResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.google_protobuf_empty = out

        return res

    
    
    def analyticsadmin_properties_user_links_batch_get(self, request: operations.AnalyticsadminPropertiesUserLinksBatchGetRequest) -> operations.AnalyticsadminPropertiesUserLinksBatchGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1alpha/{parent}/userLinks:batchGet", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsadminPropertiesUserLinksBatchGetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleAnalyticsAdminV1alphaBatchGetUserLinksResponse])
                res.google_analytics_admin_v1alpha_batch_get_user_links_response = out

        return res

    
    
    def analyticsadmin_properties_user_links_batch_update(self, request: operations.AnalyticsadminPropertiesUserLinksBatchUpdateRequest) -> operations.AnalyticsadminPropertiesUserLinksBatchUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1alpha/{parent}/userLinks:batchUpdate", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsadminPropertiesUserLinksBatchUpdateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleAnalyticsAdminV1alphaBatchUpdateUserLinksResponse])
                res.google_analytics_admin_v1alpha_batch_update_user_links_response = out

        return res

    
    
    def analyticsadmin_properties_user_links_create(self, request: operations.AnalyticsadminPropertiesUserLinksCreateRequest) -> operations.AnalyticsadminPropertiesUserLinksCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1alpha/{parent}/userLinks", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsadminPropertiesUserLinksCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleAnalyticsAdminV1alphaUserLink])
                res.google_analytics_admin_v1alpha_user_link = out

        return res

    
    
    def analyticsadmin_properties_user_links_delete(self, request: operations.AnalyticsadminPropertiesUserLinksDeleteRequest) -> operations.AnalyticsadminPropertiesUserLinksDeleteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1alpha/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsadminPropertiesUserLinksDeleteResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.google_protobuf_empty = out

        return res

    
    
    def analyticsadmin_properties_user_links_get(self, request: operations.AnalyticsadminPropertiesUserLinksGetRequest) -> operations.AnalyticsadminPropertiesUserLinksGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1alpha/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsadminPropertiesUserLinksGetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleAnalyticsAdminV1alphaUserLink])
                res.google_analytics_admin_v1alpha_user_link = out

        return res

    
    
    def analyticsadmin_properties_user_links_list(self, request: operations.AnalyticsadminPropertiesUserLinksListRequest) -> operations.AnalyticsadminPropertiesUserLinksListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1alpha/{parent}/userLinks", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsadminPropertiesUserLinksListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleAnalyticsAdminV1alphaListUserLinksResponse])
                res.google_analytics_admin_v1alpha_list_user_links_response = out

        return res

    
    
    def analyticsadmin_properties_user_links_patch(self, request: operations.AnalyticsadminPropertiesUserLinksPatchRequest) -> operations.AnalyticsadminPropertiesUserLinksPatchResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1alpha/{name}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsadminPropertiesUserLinksPatchResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleAnalyticsAdminV1alphaUserLink])
                res.google_analytics_admin_v1alpha_user_link = out

        return res

    