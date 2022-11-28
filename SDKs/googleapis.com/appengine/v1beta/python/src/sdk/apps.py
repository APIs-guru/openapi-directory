import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class Apps:
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

    
    def appengine_apps_authorized_certificates_create(self, request: operations.AppengineAppsAuthorizedCertificatesCreateRequest) -> operations.AppengineAppsAuthorizedCertificatesCreateResponse:
        r"""Uploads the specified SSL certificate.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta/apps/{appsId}/authorizedCertificates", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AppengineAppsAuthorizedCertificatesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AuthorizedCertificate])
                res.authorized_certificate = out

        return res

    
    def appengine_apps_authorized_certificates_delete(self, request: operations.AppengineAppsAuthorizedCertificatesDeleteRequest) -> operations.AppengineAppsAuthorizedCertificatesDeleteResponse:
        r"""Deletes the specified SSL certificate.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta/apps/{appsId}/authorizedCertificates/{authorizedCertificatesId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AppengineAppsAuthorizedCertificatesDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def appengine_apps_authorized_certificates_get(self, request: operations.AppengineAppsAuthorizedCertificatesGetRequest) -> operations.AppengineAppsAuthorizedCertificatesGetResponse:
        r"""Gets the specified SSL certificate.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta/apps/{appsId}/authorizedCertificates/{authorizedCertificatesId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AppengineAppsAuthorizedCertificatesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AuthorizedCertificate])
                res.authorized_certificate = out

        return res

    
    def appengine_apps_authorized_certificates_list(self, request: operations.AppengineAppsAuthorizedCertificatesListRequest) -> operations.AppengineAppsAuthorizedCertificatesListResponse:
        r"""Lists all SSL certificates the user is authorized to administer.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta/apps/{appsId}/authorizedCertificates", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AppengineAppsAuthorizedCertificatesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListAuthorizedCertificatesResponse])
                res.list_authorized_certificates_response = out

        return res

    
    def appengine_apps_authorized_certificates_patch(self, request: operations.AppengineAppsAuthorizedCertificatesPatchRequest) -> operations.AppengineAppsAuthorizedCertificatesPatchResponse:
        r"""Updates the specified SSL certificate. To renew a certificate and maintain its existing domain mappings, update certificate_data with a new certificate. The new certificate must be applicable to the same domains as the original certificate. The certificate display_name may also be updated.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta/apps/{appsId}/authorizedCertificates/{authorizedCertificatesId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AppengineAppsAuthorizedCertificatesPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AuthorizedCertificate])
                res.authorized_certificate = out

        return res

    
    def appengine_apps_authorized_domains_list(self, request: operations.AppengineAppsAuthorizedDomainsListRequest) -> operations.AppengineAppsAuthorizedDomainsListResponse:
        r"""Lists all domains the user is authorized to administer.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta/apps/{appsId}/authorizedDomains", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AppengineAppsAuthorizedDomainsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListAuthorizedDomainsResponse])
                res.list_authorized_domains_response = out

        return res

    
    def appengine_apps_create(self, request: operations.AppengineAppsCreateRequest) -> operations.AppengineAppsCreateResponse:
        r"""Creates an App Engine application for a Google Cloud Platform project. Required fields: id - The ID of the target Cloud Platform project. location - The region (https://cloud.google.com/appengine/docs/locations) where you want the App Engine application located.For more information about App Engine applications, see Managing Projects, Applications, and Billing (https://cloud.google.com/appengine/docs/standard/python/console/).
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1beta/apps"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AppengineAppsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def appengine_apps_domain_mappings_create(self, request: operations.AppengineAppsDomainMappingsCreateRequest) -> operations.AppengineAppsDomainMappingsCreateResponse:
        r"""Maps a domain to an application. A user must be authorized to administer a domain in order to map it to an application. For a list of available authorized domains, see AuthorizedDomains.ListAuthorizedDomains.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta/apps/{appsId}/domainMappings", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AppengineAppsDomainMappingsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def appengine_apps_domain_mappings_delete(self, request: operations.AppengineAppsDomainMappingsDeleteRequest) -> operations.AppengineAppsDomainMappingsDeleteResponse:
        r"""Deletes the specified domain mapping. A user must be authorized to administer the associated domain in order to delete a DomainMapping resource.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta/apps/{appsId}/domainMappings/{domainMappingsId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AppengineAppsDomainMappingsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def appengine_apps_domain_mappings_get(self, request: operations.AppengineAppsDomainMappingsGetRequest) -> operations.AppengineAppsDomainMappingsGetResponse:
        r"""Gets the specified domain mapping.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta/apps/{appsId}/domainMappings/{domainMappingsId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AppengineAppsDomainMappingsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DomainMapping])
                res.domain_mapping = out

        return res

    
    def appengine_apps_domain_mappings_list(self, request: operations.AppengineAppsDomainMappingsListRequest) -> operations.AppengineAppsDomainMappingsListResponse:
        r"""Lists the domain mappings on an application.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta/apps/{appsId}/domainMappings", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AppengineAppsDomainMappingsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListDomainMappingsResponse])
                res.list_domain_mappings_response = out

        return res

    
    def appengine_apps_domain_mappings_patch(self, request: operations.AppengineAppsDomainMappingsPatchRequest) -> operations.AppengineAppsDomainMappingsPatchResponse:
        r"""Updates the specified domain mapping. To map an SSL certificate to a domain mapping, update certificate_id to point to an AuthorizedCertificate resource. A user must be authorized to administer the associated domain in order to update a DomainMapping resource.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta/apps/{appsId}/domainMappings/{domainMappingsId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AppengineAppsDomainMappingsPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def appengine_apps_firewall_ingress_rules_batch_update(self, request: operations.AppengineAppsFirewallIngressRulesBatchUpdateRequest) -> operations.AppengineAppsFirewallIngressRulesBatchUpdateResponse:
        r"""Replaces the entire firewall ruleset in one bulk operation. This overrides and replaces the rules of an existing firewall with the new rules.If the final rule does not match traffic with the '*' wildcard IP range, then an \"allow all\" rule is explicitly added to the end of the list.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta/apps/{appsId}/firewall/ingressRules:batchUpdate", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AppengineAppsFirewallIngressRulesBatchUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BatchUpdateIngressRulesResponse])
                res.batch_update_ingress_rules_response = out

        return res

    
    def appengine_apps_firewall_ingress_rules_create(self, request: operations.AppengineAppsFirewallIngressRulesCreateRequest) -> operations.AppengineAppsFirewallIngressRulesCreateResponse:
        r"""Creates a firewall rule for the application.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta/apps/{appsId}/firewall/ingressRules", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AppengineAppsFirewallIngressRulesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FirewallRule])
                res.firewall_rule = out

        return res

    
    def appengine_apps_firewall_ingress_rules_delete(self, request: operations.AppengineAppsFirewallIngressRulesDeleteRequest) -> operations.AppengineAppsFirewallIngressRulesDeleteResponse:
        r"""Deletes the specified firewall rule.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta/apps/{appsId}/firewall/ingressRules/{ingressRulesId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AppengineAppsFirewallIngressRulesDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def appengine_apps_firewall_ingress_rules_get(self, request: operations.AppengineAppsFirewallIngressRulesGetRequest) -> operations.AppengineAppsFirewallIngressRulesGetResponse:
        r"""Gets the specified firewall rule.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta/apps/{appsId}/firewall/ingressRules/{ingressRulesId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AppengineAppsFirewallIngressRulesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FirewallRule])
                res.firewall_rule = out

        return res

    
    def appengine_apps_firewall_ingress_rules_list(self, request: operations.AppengineAppsFirewallIngressRulesListRequest) -> operations.AppengineAppsFirewallIngressRulesListResponse:
        r"""Lists the firewall rules of an application.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta/apps/{appsId}/firewall/ingressRules", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AppengineAppsFirewallIngressRulesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListIngressRulesResponse])
                res.list_ingress_rules_response = out

        return res

    
    def appengine_apps_firewall_ingress_rules_patch(self, request: operations.AppengineAppsFirewallIngressRulesPatchRequest) -> operations.AppengineAppsFirewallIngressRulesPatchResponse:
        r"""Updates the specified firewall rule.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta/apps/{appsId}/firewall/ingressRules/{ingressRulesId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AppengineAppsFirewallIngressRulesPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FirewallRule])
                res.firewall_rule = out

        return res

    
    def appengine_apps_get(self, request: operations.AppengineAppsGetRequest) -> operations.AppengineAppsGetResponse:
        r"""Gets information about an application.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta/apps/{appsId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AppengineAppsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Application])
                res.application = out

        return res

    
    def appengine_apps_locations_get(self, request: operations.AppengineAppsLocationsGetRequest) -> operations.AppengineAppsLocationsGetResponse:
        r"""Gets information about a location.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta/apps/{appsId}/locations/{locationsId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AppengineAppsLocationsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Location])
                res.location = out

        return res

    
    def appengine_apps_locations_list(self, request: operations.AppengineAppsLocationsListRequest) -> operations.AppengineAppsLocationsListResponse:
        r"""Lists information about the supported locations for this service.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta/apps/{appsId}/locations", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AppengineAppsLocationsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListLocationsResponse])
                res.list_locations_response = out

        return res

    
    def appengine_apps_operations_get(self, request: operations.AppengineAppsOperationsGetRequest) -> operations.AppengineAppsOperationsGetResponse:
        r"""Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta/apps/{appsId}/operations/{operationsId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AppengineAppsOperationsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def appengine_apps_operations_list(self, request: operations.AppengineAppsOperationsListRequest) -> operations.AppengineAppsOperationsListResponse:
        r"""Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.NOTE: the name binding allows API services to override the binding to use different resource name schemes, such as users/*/operations. To override the binding, API services can add a binding such as \"/v1/{name=users/*}/operations\" to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta/apps/{appsId}/operations", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AppengineAppsOperationsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListOperationsResponse])
                res.list_operations_response = out

        return res

    
    def appengine_apps_patch(self, request: operations.AppengineAppsPatchRequest) -> operations.AppengineAppsPatchResponse:
        r"""Updates the specified Application resource. You can update the following fields: auth_domain - Google authentication domain for controlling user access to the application. default_cookie_expiration - Cookie expiration policy for the application. iap - Identity-Aware Proxy properties for the application.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta/apps/{appsId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AppengineAppsPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def appengine_apps_repair(self, request: operations.AppengineAppsRepairRequest) -> operations.AppengineAppsRepairResponse:
        r"""Recreates the required App Engine features for the specified App Engine application, for example a Cloud Storage bucket or App Engine service account. Use this method if you receive an error message about a missing feature, for example, Error retrieving the App Engine service account. If you have deleted your App Engine service account, this will not be able to recreate it. Instead, you should attempt to use the IAM undelete API if possible at https://cloud.google.com/iam/reference/rest/v1/projects.serviceAccounts/undelete?apix_params=%7B\"name\"%3A\"projects%2F-%2FserviceAccounts%2Funique_id\"%2C\"resource\"%3A%7B%7D%7D . If the deletion was recent, the numeric ID can be found in the Cloud Console Activity Log.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta/apps/{appsId}:repair", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AppengineAppsRepairResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def appengine_apps_services_delete(self, request: operations.AppengineAppsServicesDeleteRequest) -> operations.AppengineAppsServicesDeleteResponse:
        r"""Deletes the specified service and all enclosed versions.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta/apps/{appsId}/services/{servicesId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AppengineAppsServicesDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def appengine_apps_services_get(self, request: operations.AppengineAppsServicesGetRequest) -> operations.AppengineAppsServicesGetResponse:
        r"""Gets the current configuration of the specified service.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta/apps/{appsId}/services/{servicesId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AppengineAppsServicesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Service])
                res.service = out

        return res

    
    def appengine_apps_services_list(self, request: operations.AppengineAppsServicesListRequest) -> operations.AppengineAppsServicesListResponse:
        r"""Lists all the services in the application.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta/apps/{appsId}/services", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AppengineAppsServicesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListServicesResponse])
                res.list_services_response = out

        return res

    
    def appengine_apps_services_patch(self, request: operations.AppengineAppsServicesPatchRequest) -> operations.AppengineAppsServicesPatchResponse:
        r"""Updates the configuration of the specified service.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta/apps/{appsId}/services/{servicesId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AppengineAppsServicesPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def appengine_apps_services_versions_create(self, request: operations.AppengineAppsServicesVersionsCreateRequest) -> operations.AppengineAppsServicesVersionsCreateResponse:
        r"""Deploys code and resource files to a new version.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta/apps/{appsId}/services/{servicesId}/versions", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AppengineAppsServicesVersionsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def appengine_apps_services_versions_delete(self, request: operations.AppengineAppsServicesVersionsDeleteRequest) -> operations.AppengineAppsServicesVersionsDeleteResponse:
        r"""Deletes an existing Version resource.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta/apps/{appsId}/services/{servicesId}/versions/{versionsId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AppengineAppsServicesVersionsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def appengine_apps_services_versions_get(self, request: operations.AppengineAppsServicesVersionsGetRequest) -> operations.AppengineAppsServicesVersionsGetResponse:
        r"""Gets the specified Version resource. By default, only a BASIC_VIEW will be returned. Specify the FULL_VIEW parameter to get the full resource.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta/apps/{appsId}/services/{servicesId}/versions/{versionsId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AppengineAppsServicesVersionsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Version])
                res.version = out

        return res

    
    def appengine_apps_services_versions_instances_debug(self, request: operations.AppengineAppsServicesVersionsInstancesDebugRequest) -> operations.AppengineAppsServicesVersionsInstancesDebugResponse:
        r"""Enables debugging on a VM instance. This allows you to use the SSH command to connect to the virtual machine where the instance lives. While in \"debug mode\", the instance continues to serve live traffic. You should delete the instance when you are done debugging and then allow the system to take over and determine if another instance should be started.Only applicable for instances in App Engine flexible environment.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta/apps/{appsId}/services/{servicesId}/versions/{versionsId}/instances/{instancesId}:debug", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AppengineAppsServicesVersionsInstancesDebugResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def appengine_apps_services_versions_instances_delete(self, request: operations.AppengineAppsServicesVersionsInstancesDeleteRequest) -> operations.AppengineAppsServicesVersionsInstancesDeleteResponse:
        r"""Stops a running instance.The instance might be automatically recreated based on the scaling settings of the version. For more information, see \"How Instances are Managed\" (standard environment (https://cloud.google.com/appengine/docs/standard/python/how-instances-are-managed) | flexible environment (https://cloud.google.com/appengine/docs/flexible/python/how-instances-are-managed)).To ensure that instances are not re-created and avoid getting billed, you can stop all instances within the target version by changing the serving status of the version to STOPPED with the apps.services.versions.patch (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions/patch) method.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta/apps/{appsId}/services/{servicesId}/versions/{versionsId}/instances/{instancesId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AppengineAppsServicesVersionsInstancesDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def appengine_apps_services_versions_instances_get(self, request: operations.AppengineAppsServicesVersionsInstancesGetRequest) -> operations.AppengineAppsServicesVersionsInstancesGetResponse:
        r"""Gets instance information.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta/apps/{appsId}/services/{servicesId}/versions/{versionsId}/instances/{instancesId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AppengineAppsServicesVersionsInstancesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Instance])
                res.instance = out

        return res

    
    def appengine_apps_services_versions_instances_list(self, request: operations.AppengineAppsServicesVersionsInstancesListRequest) -> operations.AppengineAppsServicesVersionsInstancesListResponse:
        r"""Lists the instances of a version.Tip: To aggregate details about instances over time, see the Stackdriver Monitoring API (https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.timeSeries/list).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta/apps/{appsId}/services/{servicesId}/versions/{versionsId}/instances", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AppengineAppsServicesVersionsInstancesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListInstancesResponse])
                res.list_instances_response = out

        return res

    
    def appengine_apps_services_versions_list(self, request: operations.AppengineAppsServicesVersionsListRequest) -> operations.AppengineAppsServicesVersionsListResponse:
        r"""Lists the versions of a service.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta/apps/{appsId}/services/{servicesId}/versions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AppengineAppsServicesVersionsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListVersionsResponse])
                res.list_versions_response = out

        return res

    
    def appengine_apps_services_versions_patch(self, request: operations.AppengineAppsServicesVersionsPatchRequest) -> operations.AppengineAppsServicesVersionsPatchResponse:
        r"""Updates the specified Version resource. You can specify the following fields depending on the App Engine environment and type of scaling that the version resource uses:Standard environment instance_class (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#Version.FIELDS.instance_class)automatic scaling in the standard environment: automatic_scaling.min_idle_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#Version.FIELDS.automatic_scaling) automatic_scaling.max_idle_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#Version.FIELDS.automatic_scaling) automaticScaling.standard_scheduler_settings.max_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#StandardSchedulerSettings) automaticScaling.standard_scheduler_settings.min_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#StandardSchedulerSettings) automaticScaling.standard_scheduler_settings.target_cpu_utilization (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#StandardSchedulerSettings) automaticScaling.standard_scheduler_settings.target_throughput_utilization (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#StandardSchedulerSettings)basic scaling or manual scaling in the standard environment: serving_status (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#Version.FIELDS.serving_status) manual_scaling.instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#manualscaling)Flexible environment serving_status (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#Version.FIELDS.serving_status)automatic scaling in the flexible environment: automatic_scaling.min_total_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#Version.FIELDS.automatic_scaling) automatic_scaling.max_total_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#Version.FIELDS.automatic_scaling) automatic_scaling.cool_down_period_sec (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#Version.FIELDS.automatic_scaling) automatic_scaling.cpu_utilization.target_utilization (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#Version.FIELDS.automatic_scaling)manual scaling in the flexible environment: manual_scaling.instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#manualscaling)
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta/apps/{appsId}/services/{servicesId}/versions/{versionsId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AppengineAppsServicesVersionsPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    