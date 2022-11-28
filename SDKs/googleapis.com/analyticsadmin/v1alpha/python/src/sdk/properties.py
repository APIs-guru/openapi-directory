import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class Properties:
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

    
    def analyticsadmin_properties_acknowledge_user_data_collection(self, request: operations.AnalyticsadminPropertiesAcknowledgeUserDataCollectionRequest) -> operations.AnalyticsadminPropertiesAcknowledgeUserDataCollectionResponse:
        r"""Acknowledges the terms of user data collection for the specified property. This acknowledgement must be completed (either in the Google Analytics UI or via this API) before MeasurementProtocolSecret resources may be created.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha/{property}:acknowledgeUserDataCollection", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsadminPropertiesAcknowledgeUserDataCollectionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.google_analytics_admin_v1alpha_acknowledge_user_data_collection_response = out

        return res

    
    def analyticsadmin_properties_audiences_create(self, request: operations.AnalyticsadminPropertiesAudiencesCreateRequest) -> operations.AnalyticsadminPropertiesAudiencesCreateResponse:
        r"""Creates an Audience.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha/{parent}/audiences", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsadminPropertiesAudiencesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleAnalyticsAdminV1alphaAudience])
                res.google_analytics_admin_v1alpha_audience = out

        return res

    
    def analyticsadmin_properties_audiences_list(self, request: operations.AnalyticsadminPropertiesAudiencesListRequest) -> operations.AnalyticsadminPropertiesAudiencesListResponse:
        r"""Lists Audiences on a property. Audiences created before 2020 may not be supported. Default audiences will not show filter definitions.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha/{parent}/audiences", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsadminPropertiesAudiencesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleAnalyticsAdminV1alphaListAudiencesResponse])
                res.google_analytics_admin_v1alpha_list_audiences_response = out

        return res

    
    def analyticsadmin_properties_conversion_events_create(self, request: operations.AnalyticsadminPropertiesConversionEventsCreateRequest) -> operations.AnalyticsadminPropertiesConversionEventsCreateResponse:
        r"""Creates a conversion event with the specified attributes.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha/{parent}/conversionEvents", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsadminPropertiesConversionEventsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleAnalyticsAdminV1alphaConversionEvent])
                res.google_analytics_admin_v1alpha_conversion_event = out

        return res

    
    def analyticsadmin_properties_conversion_events_list(self, request: operations.AnalyticsadminPropertiesConversionEventsListRequest) -> operations.AnalyticsadminPropertiesConversionEventsListResponse:
        r"""Returns a list of conversion events in the specified parent property. Returns an empty list if no conversion events are found.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha/{parent}/conversionEvents", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsadminPropertiesConversionEventsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleAnalyticsAdminV1alphaListConversionEventsResponse])
                res.google_analytics_admin_v1alpha_list_conversion_events_response = out

        return res

    
    def analyticsadmin_properties_create(self, request: operations.AnalyticsadminPropertiesCreateRequest) -> operations.AnalyticsadminPropertiesCreateResponse:
        r"""Creates an \"GA4\" property with the specified location and attributes.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1alpha/properties"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsadminPropertiesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleAnalyticsAdminV1alphaProperty])
                res.google_analytics_admin_v1alpha_property = out

        return res

    
    def analyticsadmin_properties_custom_dimensions_create(self, request: operations.AnalyticsadminPropertiesCustomDimensionsCreateRequest) -> operations.AnalyticsadminPropertiesCustomDimensionsCreateResponse:
        r"""Creates a CustomDimension.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha/{parent}/customDimensions", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsadminPropertiesCustomDimensionsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleAnalyticsAdminV1alphaCustomDimension])
                res.google_analytics_admin_v1alpha_custom_dimension = out

        return res

    
    def analyticsadmin_properties_custom_dimensions_list(self, request: operations.AnalyticsadminPropertiesCustomDimensionsListRequest) -> operations.AnalyticsadminPropertiesCustomDimensionsListResponse:
        r"""Lists CustomDimensions on a property.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha/{parent}/customDimensions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsadminPropertiesCustomDimensionsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleAnalyticsAdminV1alphaListCustomDimensionsResponse])
                res.google_analytics_admin_v1alpha_list_custom_dimensions_response = out

        return res

    
    def analyticsadmin_properties_custom_metrics_archive(self, request: operations.AnalyticsadminPropertiesCustomMetricsArchiveRequest) -> operations.AnalyticsadminPropertiesCustomMetricsArchiveResponse:
        r"""Archives a CustomMetric on a property.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha/{name}:archive", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsadminPropertiesCustomMetricsArchiveResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.google_protobuf_empty = out

        return res

    
    def analyticsadmin_properties_custom_metrics_create(self, request: operations.AnalyticsadminPropertiesCustomMetricsCreateRequest) -> operations.AnalyticsadminPropertiesCustomMetricsCreateResponse:
        r"""Creates a CustomMetric.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha/{parent}/customMetrics", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsadminPropertiesCustomMetricsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleAnalyticsAdminV1alphaCustomMetric])
                res.google_analytics_admin_v1alpha_custom_metric = out

        return res

    
    def analyticsadmin_properties_custom_metrics_list(self, request: operations.AnalyticsadminPropertiesCustomMetricsListRequest) -> operations.AnalyticsadminPropertiesCustomMetricsListResponse:
        r"""Lists CustomMetrics on a property.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha/{parent}/customMetrics", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsadminPropertiesCustomMetricsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleAnalyticsAdminV1alphaListCustomMetricsResponse])
                res.google_analytics_admin_v1alpha_list_custom_metrics_response = out

        return res

    
    def analyticsadmin_properties_data_streams_create(self, request: operations.AnalyticsadminPropertiesDataStreamsCreateRequest) -> operations.AnalyticsadminPropertiesDataStreamsCreateResponse:
        r"""Creates a DataStream.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha/{parent}/dataStreams", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsadminPropertiesDataStreamsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleAnalyticsAdminV1alphaDataStream])
                res.google_analytics_admin_v1alpha_data_stream = out

        return res

    
    def analyticsadmin_properties_data_streams_list(self, request: operations.AnalyticsadminPropertiesDataStreamsListRequest) -> operations.AnalyticsadminPropertiesDataStreamsListResponse:
        r"""Lists DataStreams on a property.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha/{parent}/dataStreams", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsadminPropertiesDataStreamsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleAnalyticsAdminV1alphaListDataStreamsResponse])
                res.google_analytics_admin_v1alpha_list_data_streams_response = out

        return res

    
    def analyticsadmin_properties_data_streams_measurement_protocol_secrets_create(self, request: operations.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateRequest) -> operations.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateResponse:
        r"""Creates a measurement protocol secret.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha/{parent}/measurementProtocolSecrets", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret])
                res.google_analytics_admin_v1alpha_measurement_protocol_secret = out

        return res

    
    def analyticsadmin_properties_data_streams_measurement_protocol_secrets_list(self, request: operations.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListRequest) -> operations.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListResponse:
        r"""Returns child MeasurementProtocolSecrets under the specified parent Property.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha/{parent}/measurementProtocolSecrets", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleAnalyticsAdminV1alphaListMeasurementProtocolSecretsResponse])
                res.google_analytics_admin_v1alpha_list_measurement_protocol_secrets_response = out

        return res

    
    def analyticsadmin_properties_display_video360_advertiser_link_proposals_approve(self, request: operations.AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsApproveRequest) -> operations.AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsApproveResponse:
        r"""Approves a DisplayVideo360AdvertiserLinkProposal. The DisplayVideo360AdvertiserLinkProposal will be deleted and a new DisplayVideo360AdvertiserLink will be created.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha/{name}:approve", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsApproveResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleAnalyticsAdminV1alphaApproveDisplayVideo360AdvertiserLinkProposalResponse])
                res.google_analytics_admin_v1alpha_approve_display_video360_advertiser_link_proposal_response = out

        return res

    
    def analyticsadmin_properties_display_video360_advertiser_link_proposals_cancel(self, request: operations.AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCancelRequest) -> operations.AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCancelResponse:
        r"""Cancels a DisplayVideo360AdvertiserLinkProposal. Cancelling can mean either: - Declining a proposal initiated from Display & Video 360 - Withdrawing a proposal initiated from Google Analytics After being cancelled, a proposal will eventually be deleted automatically.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha/{name}:cancel", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCancelResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal])
                res.google_analytics_admin_v1alpha_display_video360_advertiser_link_proposal = out

        return res

    
    def analyticsadmin_properties_display_video360_advertiser_link_proposals_create(self, request: operations.AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCreateRequest) -> operations.AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCreateResponse:
        r"""Creates a DisplayVideo360AdvertiserLinkProposal.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha/{parent}/displayVideo360AdvertiserLinkProposals", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal])
                res.google_analytics_admin_v1alpha_display_video360_advertiser_link_proposal = out

        return res

    
    def analyticsadmin_properties_display_video360_advertiser_link_proposals_list(self, request: operations.AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsListRequest) -> operations.AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsListResponse:
        r"""Lists DisplayVideo360AdvertiserLinkProposals on a property.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha/{parent}/displayVideo360AdvertiserLinkProposals", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleAnalyticsAdminV1alphaListDisplayVideo360AdvertiserLinkProposalsResponse])
                res.google_analytics_admin_v1alpha_list_display_video360_advertiser_link_proposals_response = out

        return res

    
    def analyticsadmin_properties_display_video360_advertiser_links_create(self, request: operations.AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksCreateRequest) -> operations.AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksCreateResponse:
        r"""Creates a DisplayVideo360AdvertiserLink. This can only be utilized by users who have proper authorization both on the Google Analytics property and on the Display & Video 360 advertiser. Users who do not have access to the Display & Video 360 advertiser should instead seek to create a DisplayVideo360LinkProposal.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha/{parent}/displayVideo360AdvertiserLinks", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink])
                res.google_analytics_admin_v1alpha_display_video360_advertiser_link = out

        return res

    
    def analyticsadmin_properties_display_video360_advertiser_links_list(self, request: operations.AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksListRequest) -> operations.AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksListResponse:
        r"""Lists all DisplayVideo360AdvertiserLinks on a property.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha/{parent}/displayVideo360AdvertiserLinks", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleAnalyticsAdminV1alphaListDisplayVideo360AdvertiserLinksResponse])
                res.google_analytics_admin_v1alpha_list_display_video360_advertiser_links_response = out

        return res

    
    def analyticsadmin_properties_firebase_links_create(self, request: operations.AnalyticsadminPropertiesFirebaseLinksCreateRequest) -> operations.AnalyticsadminPropertiesFirebaseLinksCreateResponse:
        r"""Creates a FirebaseLink. Properties can have at most one FirebaseLink.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha/{parent}/firebaseLinks", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsadminPropertiesFirebaseLinksCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleAnalyticsAdminV1alphaFirebaseLink])
                res.google_analytics_admin_v1alpha_firebase_link = out

        return res

    
    def analyticsadmin_properties_firebase_links_list(self, request: operations.AnalyticsadminPropertiesFirebaseLinksListRequest) -> operations.AnalyticsadminPropertiesFirebaseLinksListResponse:
        r"""Lists FirebaseLinks on a property. Properties can have at most one FirebaseLink.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha/{parent}/firebaseLinks", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsadminPropertiesFirebaseLinksListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleAnalyticsAdminV1alphaListFirebaseLinksResponse])
                res.google_analytics_admin_v1alpha_list_firebase_links_response = out

        return res

    
    def analyticsadmin_properties_google_ads_links_create(self, request: operations.AnalyticsadminPropertiesGoogleAdsLinksCreateRequest) -> operations.AnalyticsadminPropertiesGoogleAdsLinksCreateResponse:
        r"""Creates a GoogleAdsLink.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha/{parent}/googleAdsLinks", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsadminPropertiesGoogleAdsLinksCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleAnalyticsAdminV1alphaGoogleAdsLink])
                res.google_analytics_admin_v1alpha_google_ads_link = out

        return res

    
    def analyticsadmin_properties_google_ads_links_list(self, request: operations.AnalyticsadminPropertiesGoogleAdsLinksListRequest) -> operations.AnalyticsadminPropertiesGoogleAdsLinksListResponse:
        r"""Lists GoogleAdsLinks on a property.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha/{parent}/googleAdsLinks", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsadminPropertiesGoogleAdsLinksListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleAnalyticsAdminV1alphaListGoogleAdsLinksResponse])
                res.google_analytics_admin_v1alpha_list_google_ads_links_response = out

        return res

    
    def analyticsadmin_properties_list(self, request: operations.AnalyticsadminPropertiesListRequest) -> operations.AnalyticsadminPropertiesListResponse:
        r"""Returns child Properties under the specified parent Account. Only \"GA4\" properties will be returned. Properties will be excluded if the caller does not have access. Soft-deleted (ie: \"trashed\") properties are excluded by default. Returns an empty list if no relevant properties are found.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1alpha/properties"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsadminPropertiesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleAnalyticsAdminV1alphaListPropertiesResponse])
                res.google_analytics_admin_v1alpha_list_properties_response = out

        return res

    
    def analyticsadmin_properties_run_access_report(self, request: operations.AnalyticsadminPropertiesRunAccessReportRequest) -> operations.AnalyticsadminPropertiesRunAccessReportResponse:
        r"""Returns a customized report of data access records. The report provides records of each time a user reads Google Analytics reporting data. Access records are retained for up to 2 years. Data Access Reports can be requested for a property. The property must be in Google Analytics 360. This method is only available to Administrators. These data access records include GA4 UI Reporting, GA4 UI Explorations, GA4 Data API, and other products like Firebase & Admob that can retrieve data from Google Analytics through a linkage. These records don't include property configuration changes like adding a stream or changing a property's time zone. For configuration change history, see [searchChangeHistoryEvents](https://developers.google.com/analytics/devguides/config/admin/v1/rest/v1alpha/accounts/searchChangeHistoryEvents).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha/{entity}:runAccessReport", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsadminPropertiesRunAccessReportResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleAnalyticsAdminV1alphaRunAccessReportResponse])
                res.google_analytics_admin_v1alpha_run_access_report_response = out

        return res

    
    def analyticsadmin_properties_search_ads360_links_create(self, request: operations.AnalyticsadminPropertiesSearchAds360LinksCreateRequest) -> operations.AnalyticsadminPropertiesSearchAds360LinksCreateResponse:
        r"""Creates a SearchAds360Link.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha/{parent}/searchAds360Links", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsadminPropertiesSearchAds360LinksCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleAnalyticsAdminV1alphaSearchAds360Link])
                res.google_analytics_admin_v1alpha_search_ads360_link = out

        return res

    
    def analyticsadmin_properties_search_ads360_links_list(self, request: operations.AnalyticsadminPropertiesSearchAds360LinksListRequest) -> operations.AnalyticsadminPropertiesSearchAds360LinksListResponse:
        r"""Lists all SearchAds360Links on a property.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha/{parent}/searchAds360Links", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsadminPropertiesSearchAds360LinksListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleAnalyticsAdminV1alphaListSearchAds360LinksResponse])
                res.google_analytics_admin_v1alpha_list_search_ads360_links_response = out

        return res

    
    def analyticsadmin_properties_user_links_audit(self, request: operations.AnalyticsadminPropertiesUserLinksAuditRequest) -> operations.AnalyticsadminPropertiesUserLinksAuditResponse:
        r"""Lists all user links on an account or property, including implicit ones that come from effective permissions granted by groups or organization admin roles. If a returned user link does not have direct permissions, they cannot be removed from the account or property directly with the DeleteUserLink command. They have to be removed from the group/etc that gives them permissions, which is currently only usable/discoverable in the GA or GMP UIs.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha/{parent}/userLinks:audit", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsadminPropertiesUserLinksAuditResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleAnalyticsAdminV1alphaAuditUserLinksResponse])
                res.google_analytics_admin_v1alpha_audit_user_links_response = out

        return res

    
    def analyticsadmin_properties_user_links_batch_create(self, request: operations.AnalyticsadminPropertiesUserLinksBatchCreateRequest) -> operations.AnalyticsadminPropertiesUserLinksBatchCreateResponse:
        r"""Creates information about multiple users' links to an account or property. This method is transactional. If any UserLink cannot be created, none of the UserLinks will be created.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha/{parent}/userLinks:batchCreate", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsadminPropertiesUserLinksBatchCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleAnalyticsAdminV1alphaBatchCreateUserLinksResponse])
                res.google_analytics_admin_v1alpha_batch_create_user_links_response = out

        return res

    
    def analyticsadmin_properties_user_links_batch_delete(self, request: operations.AnalyticsadminPropertiesUserLinksBatchDeleteRequest) -> operations.AnalyticsadminPropertiesUserLinksBatchDeleteResponse:
        r"""Deletes information about multiple users' links to an account or property.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha/{parent}/userLinks:batchDelete", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsadminPropertiesUserLinksBatchDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.google_protobuf_empty = out

        return res

    
    def analyticsadmin_properties_user_links_batch_get(self, request: operations.AnalyticsadminPropertiesUserLinksBatchGetRequest) -> operations.AnalyticsadminPropertiesUserLinksBatchGetResponse:
        r"""Gets information about multiple users' links to an account or property.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha/{parent}/userLinks:batchGet", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsadminPropertiesUserLinksBatchGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleAnalyticsAdminV1alphaBatchGetUserLinksResponse])
                res.google_analytics_admin_v1alpha_batch_get_user_links_response = out

        return res

    
    def analyticsadmin_properties_user_links_batch_update(self, request: operations.AnalyticsadminPropertiesUserLinksBatchUpdateRequest) -> operations.AnalyticsadminPropertiesUserLinksBatchUpdateResponse:
        r"""Updates information about multiple users' links to an account or property.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha/{parent}/userLinks:batchUpdate", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsadminPropertiesUserLinksBatchUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleAnalyticsAdminV1alphaBatchUpdateUserLinksResponse])
                res.google_analytics_admin_v1alpha_batch_update_user_links_response = out

        return res

    
    def analyticsadmin_properties_user_links_create(self, request: operations.AnalyticsadminPropertiesUserLinksCreateRequest) -> operations.AnalyticsadminPropertiesUserLinksCreateResponse:
        r"""Creates a user link on an account or property. If the user with the specified email already has permissions on the account or property, then the user's existing permissions will be unioned with the permissions specified in the new UserLink.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha/{parent}/userLinks", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsadminPropertiesUserLinksCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleAnalyticsAdminV1alphaUserLink])
                res.google_analytics_admin_v1alpha_user_link = out

        return res

    
    def analyticsadmin_properties_user_links_delete(self, request: operations.AnalyticsadminPropertiesUserLinksDeleteRequest) -> operations.AnalyticsadminPropertiesUserLinksDeleteResponse:
        r"""Deletes a user link on an account or property.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsadminPropertiesUserLinksDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.google_protobuf_empty = out

        return res

    
    def analyticsadmin_properties_user_links_get(self, request: operations.AnalyticsadminPropertiesUserLinksGetRequest) -> operations.AnalyticsadminPropertiesUserLinksGetResponse:
        r"""Gets information about a user's link to an account or property.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsadminPropertiesUserLinksGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleAnalyticsAdminV1alphaUserLink])
                res.google_analytics_admin_v1alpha_user_link = out

        return res

    
    def analyticsadmin_properties_user_links_list(self, request: operations.AnalyticsadminPropertiesUserLinksListRequest) -> operations.AnalyticsadminPropertiesUserLinksListResponse:
        r"""Lists all user links on an account or property.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha/{parent}/userLinks", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsadminPropertiesUserLinksListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleAnalyticsAdminV1alphaListUserLinksResponse])
                res.google_analytics_admin_v1alpha_list_user_links_response = out

        return res

    
    def analyticsadmin_properties_user_links_patch(self, request: operations.AnalyticsadminPropertiesUserLinksPatchRequest) -> operations.AnalyticsadminPropertiesUserLinksPatchResponse:
        r"""Updates a user link on an account or property.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha/{name}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsadminPropertiesUserLinksPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleAnalyticsAdminV1alphaUserLink])
                res.google_analytics_admin_v1alpha_user_link = out

        return res

    