import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class Projects:
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

    
    def beyondcorp_projects_locations_app_connections_create(self, request: operations.BeyondcorpProjectsLocationsAppConnectionsCreateRequest) -> operations.BeyondcorpProjectsLocationsAppConnectionsCreateResponse:
        r"""Creates a new AppConnection in a given project and location.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha/{parent}/appConnections", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.BeyondcorpProjectsLocationsAppConnectionsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def beyondcorp_projects_locations_app_connections_list(self, request: operations.BeyondcorpProjectsLocationsAppConnectionsListRequest) -> operations.BeyondcorpProjectsLocationsAppConnectionsListResponse:
        r"""Lists AppConnections in a given project and location.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha/{parent}/appConnections", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BeyondcorpProjectsLocationsAppConnectionsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudBeyondcorpAppconnectionsV1alphaListAppConnectionsResponse])
                res.google_cloud_beyondcorp_appconnections_v1alpha_list_app_connections_response = out

        return res

    
    def beyondcorp_projects_locations_app_connections_resolve(self, request: operations.BeyondcorpProjectsLocationsAppConnectionsResolveRequest) -> operations.BeyondcorpProjectsLocationsAppConnectionsResolveResponse:
        r"""Resolves AppConnections details for a given AppConnector. An internal method called by a connector to find AppConnections to connect to.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha/{parent}/appConnections:resolve", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BeyondcorpProjectsLocationsAppConnectionsResolveResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudBeyondcorpAppconnectionsV1alphaResolveAppConnectionsResponse])
                res.google_cloud_beyondcorp_appconnections_v1alpha_resolve_app_connections_response = out

        return res

    
    def beyondcorp_projects_locations_app_connectors_create(self, request: operations.BeyondcorpProjectsLocationsAppConnectorsCreateRequest) -> operations.BeyondcorpProjectsLocationsAppConnectorsCreateResponse:
        r"""Creates a new AppConnector in a given project and location.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha/{parent}/appConnectors", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.BeyondcorpProjectsLocationsAppConnectorsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def beyondcorp_projects_locations_app_connectors_list(self, request: operations.BeyondcorpProjectsLocationsAppConnectorsListRequest) -> operations.BeyondcorpProjectsLocationsAppConnectorsListResponse:
        r"""Lists AppConnectors in a given project and location.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha/{parent}/appConnectors", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BeyondcorpProjectsLocationsAppConnectorsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudBeyondcorpAppconnectorsV1alphaListAppConnectorsResponse])
                res.google_cloud_beyondcorp_appconnectors_v1alpha_list_app_connectors_response = out

        return res

    
    def beyondcorp_projects_locations_app_connectors_report_status(self, request: operations.BeyondcorpProjectsLocationsAppConnectorsReportStatusRequest) -> operations.BeyondcorpProjectsLocationsAppConnectorsReportStatusResponse:
        r"""Report status for a given connector.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha/{appConnector}:reportStatus", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.BeyondcorpProjectsLocationsAppConnectorsReportStatusResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def beyondcorp_projects_locations_app_connectors_resolve_instance_config(self, request: operations.BeyondcorpProjectsLocationsAppConnectorsResolveInstanceConfigRequest) -> operations.BeyondcorpProjectsLocationsAppConnectorsResolveInstanceConfigResponse:
        r"""Gets instance configuration for a given AppConnector. An internal method called by a AppConnector to get its container config.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha/{appConnector}:resolveInstanceConfig", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BeyondcorpProjectsLocationsAppConnectorsResolveInstanceConfigResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudBeyondcorpAppconnectorsV1alphaResolveInstanceConfigResponse])
                res.google_cloud_beyondcorp_appconnectors_v1alpha_resolve_instance_config_response = out

        return res

    
    def beyondcorp_projects_locations_app_gateways_create(self, request: operations.BeyondcorpProjectsLocationsAppGatewaysCreateRequest) -> operations.BeyondcorpProjectsLocationsAppGatewaysCreateResponse:
        r"""Creates a new AppGateway in a given project and location.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha/{parent}/appGateways", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.BeyondcorpProjectsLocationsAppGatewaysCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def beyondcorp_projects_locations_app_gateways_list(self, request: operations.BeyondcorpProjectsLocationsAppGatewaysListRequest) -> operations.BeyondcorpProjectsLocationsAppGatewaysListResponse:
        r"""Lists AppGateways in a given project and location.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha/{parent}/appGateways", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BeyondcorpProjectsLocationsAppGatewaysListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListAppGatewaysResponse])
                res.list_app_gateways_response = out

        return res

    
    def beyondcorp_projects_locations_client_connector_services_create(self, request: operations.BeyondcorpProjectsLocationsClientConnectorServicesCreateRequest) -> operations.BeyondcorpProjectsLocationsClientConnectorServicesCreateResponse:
        r"""Creates a new ClientConnectorService in a given project and location.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha/{parent}/clientConnectorServices", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.BeyondcorpProjectsLocationsClientConnectorServicesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def beyondcorp_projects_locations_client_connector_services_list(self, request: operations.BeyondcorpProjectsLocationsClientConnectorServicesListRequest) -> operations.BeyondcorpProjectsLocationsClientConnectorServicesListResponse:
        r"""Lists ClientConnectorServices in a given project and location.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha/{parent}/clientConnectorServices", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BeyondcorpProjectsLocationsClientConnectorServicesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListClientConnectorServicesResponse])
                res.list_client_connector_services_response = out

        return res

    
    def beyondcorp_projects_locations_client_gateways_create(self, request: operations.BeyondcorpProjectsLocationsClientGatewaysCreateRequest) -> operations.BeyondcorpProjectsLocationsClientGatewaysCreateResponse:
        r"""Creates a new ClientGateway in a given project and location.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha/{parent}/clientGateways", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.BeyondcorpProjectsLocationsClientGatewaysCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def beyondcorp_projects_locations_client_gateways_list(self, request: operations.BeyondcorpProjectsLocationsClientGatewaysListRequest) -> operations.BeyondcorpProjectsLocationsClientGatewaysListResponse:
        r"""Lists ClientGateways in a given project and location.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha/{parent}/clientGateways", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BeyondcorpProjectsLocationsClientGatewaysListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListClientGatewaysResponse])
                res.list_client_gateways_response = out

        return res

    
    def beyondcorp_projects_locations_connections_create(self, request: operations.BeyondcorpProjectsLocationsConnectionsCreateRequest) -> operations.BeyondcorpProjectsLocationsConnectionsCreateResponse:
        r"""Creates a new Connection in a given project and location.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha/{parent}/connections", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.BeyondcorpProjectsLocationsConnectionsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def beyondcorp_projects_locations_connections_list(self, request: operations.BeyondcorpProjectsLocationsConnectionsListRequest) -> operations.BeyondcorpProjectsLocationsConnectionsListResponse:
        r"""Lists Connections in a given project and location.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha/{parent}/connections", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BeyondcorpProjectsLocationsConnectionsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListConnectionsResponse])
                res.list_connections_response = out

        return res

    
    def beyondcorp_projects_locations_connections_resolve(self, request: operations.BeyondcorpProjectsLocationsConnectionsResolveRequest) -> operations.BeyondcorpProjectsLocationsConnectionsResolveResponse:
        r"""Resolves connections details for a given connector. An internal method called by a connector to find connections to connect to.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha/{parent}/connections:resolve", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BeyondcorpProjectsLocationsConnectionsResolveResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ResolveConnectionsResponse])
                res.resolve_connections_response = out

        return res

    
    def beyondcorp_projects_locations_connectors_create(self, request: operations.BeyondcorpProjectsLocationsConnectorsCreateRequest) -> operations.BeyondcorpProjectsLocationsConnectorsCreateResponse:
        r"""Creates a new Connector in a given project and location.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha/{parent}/connectors", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.BeyondcorpProjectsLocationsConnectorsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def beyondcorp_projects_locations_connectors_list(self, request: operations.BeyondcorpProjectsLocationsConnectorsListRequest) -> operations.BeyondcorpProjectsLocationsConnectorsListResponse:
        r"""Lists Connectors in a given project and location.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha/{parent}/connectors", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BeyondcorpProjectsLocationsConnectorsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListConnectorsResponse])
                res.list_connectors_response = out

        return res

    
    def beyondcorp_projects_locations_connectors_patch(self, request: operations.BeyondcorpProjectsLocationsConnectorsPatchRequest) -> operations.BeyondcorpProjectsLocationsConnectorsPatchResponse:
        r"""Updates the parameters of a single Connector.
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

        res = operations.BeyondcorpProjectsLocationsConnectorsPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def beyondcorp_projects_locations_connectors_report_status(self, request: operations.BeyondcorpProjectsLocationsConnectorsReportStatusRequest) -> operations.BeyondcorpProjectsLocationsConnectorsReportStatusResponse:
        r"""Report status for a given connector.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha/{connector}:reportStatus", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.BeyondcorpProjectsLocationsConnectorsReportStatusResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def beyondcorp_projects_locations_connectors_resolve_instance_config(self, request: operations.BeyondcorpProjectsLocationsConnectorsResolveInstanceConfigRequest) -> operations.BeyondcorpProjectsLocationsConnectorsResolveInstanceConfigResponse:
        r"""Gets instance configuration for a given connector. An internal method called by a connector to get its container config.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha/{connector}:resolveInstanceConfig", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BeyondcorpProjectsLocationsConnectorsResolveInstanceConfigResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ResolveInstanceConfigResponse])
                res.resolve_instance_config_response = out

        return res

    
    def beyondcorp_projects_locations_insights_configured_insight(self, request: operations.BeyondcorpProjectsLocationsInsightsConfiguredInsightRequest) -> operations.BeyondcorpProjectsLocationsInsightsConfiguredInsightResponse:
        r"""Gets the value for a selected particular insight based on the provided filters. Use the organization level path for fetching at org level and project level path for fetching the insight value specific to a particular project.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha/{insight}:configuredInsight", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BeyondcorpProjectsLocationsInsightsConfiguredInsightResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudBeyondcorpSaasplatformInsightsV1alphaConfiguredInsightResponse])
                res.google_cloud_beyondcorp_saasplatform_insights_v1alpha_configured_insight_response = out

        return res

    
    def beyondcorp_projects_locations_insights_list(self, request: operations.BeyondcorpProjectsLocationsInsightsListRequest) -> operations.BeyondcorpProjectsLocationsInsightsListResponse:
        r"""Lists for all the available insights that could be fetched from the system. Allows to filter using category. Setting the `view` to `BASIC` will let you iterate over the list of insight metadatas.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha/{parent}/insights", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BeyondcorpProjectsLocationsInsightsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudBeyondcorpSaasplatformInsightsV1alphaListInsightsResponse])
                res.google_cloud_beyondcorp_saasplatform_insights_v1alpha_list_insights_response = out

        return res

    
    def beyondcorp_projects_locations_list(self, request: operations.BeyondcorpProjectsLocationsListRequest) -> operations.BeyondcorpProjectsLocationsListResponse:
        r"""Lists information about the supported locations for this service.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha/{name}/locations", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BeyondcorpProjectsLocationsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudLocationListLocationsResponse])
                res.google_cloud_location_list_locations_response = out

        return res

    
    def beyondcorp_projects_locations_net_connections_get_iam_policy(self, request: operations.BeyondcorpProjectsLocationsNetConnectionsGetIamPolicyRequest) -> operations.BeyondcorpProjectsLocationsNetConnectionsGetIamPolicyResponse:
        r"""Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha/{resource}:getIamPolicy", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BeyondcorpProjectsLocationsNetConnectionsGetIamPolicyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleIamV1Policy])
                res.google_iam_v1_policy = out

        return res

    
    def beyondcorp_projects_locations_net_connections_set_iam_policy(self, request: operations.BeyondcorpProjectsLocationsNetConnectionsSetIamPolicyRequest) -> operations.BeyondcorpProjectsLocationsNetConnectionsSetIamPolicyResponse:
        r"""Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha/{resource}:setIamPolicy", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.BeyondcorpProjectsLocationsNetConnectionsSetIamPolicyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleIamV1Policy])
                res.google_iam_v1_policy = out

        return res

    
    def beyondcorp_projects_locations_net_connections_test_iam_permissions(self, request: operations.BeyondcorpProjectsLocationsNetConnectionsTestIamPermissionsRequest) -> operations.BeyondcorpProjectsLocationsNetConnectionsTestIamPermissionsResponse:
        r"""Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may \"fail open\" without warning.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha/{resource}:testIamPermissions", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.BeyondcorpProjectsLocationsNetConnectionsTestIamPermissionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleIamV1TestIamPermissionsResponse])
                res.google_iam_v1_test_iam_permissions_response = out

        return res

    
    def beyondcorp_projects_locations_operations_cancel(self, request: operations.BeyondcorpProjectsLocationsOperationsCancelRequest) -> operations.BeyondcorpProjectsLocationsOperationsCancelResponse:
        r"""Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
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

        res = operations.BeyondcorpProjectsLocationsOperationsCancelResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def beyondcorp_projects_locations_operations_delete(self, request: operations.BeyondcorpProjectsLocationsOperationsDeleteRequest) -> operations.BeyondcorpProjectsLocationsOperationsDeleteResponse:
        r"""Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BeyondcorpProjectsLocationsOperationsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def beyondcorp_projects_locations_operations_get(self, request: operations.BeyondcorpProjectsLocationsOperationsGetRequest) -> operations.BeyondcorpProjectsLocationsOperationsGetResponse:
        r"""Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BeyondcorpProjectsLocationsOperationsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def beyondcorp_projects_locations_operations_list(self, request: operations.BeyondcorpProjectsLocationsOperationsListRequest) -> operations.BeyondcorpProjectsLocationsOperationsListResponse:
        r"""Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `\"/v1/{name=users/*}/operations\"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha/{name}/operations", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BeyondcorpProjectsLocationsOperationsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningListOperationsResponse])
                res.google_longrunning_list_operations_response = out

        return res

    