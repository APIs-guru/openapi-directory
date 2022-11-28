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
        
        url = utils.generate_url(base_url, "/v1alpha/apps/{appsId}/authorizedCertificates", request.path_params)
        
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
        
        url = utils.generate_url(base_url, "/v1alpha/apps/{appsId}/authorizedCertificates/{authorizedCertificatesId}", request.path_params)
        
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
        
        url = utils.generate_url(base_url, "/v1alpha/apps/{appsId}/authorizedCertificates/{authorizedCertificatesId}", request.path_params)
        
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
        
        url = utils.generate_url(base_url, "/v1alpha/apps/{appsId}/authorizedCertificates", request.path_params)
        
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
        
        url = utils.generate_url(base_url, "/v1alpha/apps/{appsId}/authorizedCertificates/{authorizedCertificatesId}", request.path_params)
        
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
        
        url = utils.generate_url(base_url, "/v1alpha/apps/{appsId}/authorizedDomains", request.path_params)
        
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

    
    def appengine_apps_domain_mappings_create(self, request: operations.AppengineAppsDomainMappingsCreateRequest) -> operations.AppengineAppsDomainMappingsCreateResponse:
        r"""Maps a domain to an application. A user must be authorized to administer a domain in order to map it to an application. For a list of available authorized domains, see AuthorizedDomains.ListAuthorizedDomains.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha/apps/{appsId}/domainMappings", request.path_params)
        
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
        
        url = utils.generate_url(base_url, "/v1alpha/apps/{appsId}/domainMappings/{domainMappingsId}", request.path_params)
        
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
        
        url = utils.generate_url(base_url, "/v1alpha/apps/{appsId}/domainMappings/{domainMappingsId}", request.path_params)
        
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
        
        url = utils.generate_url(base_url, "/v1alpha/apps/{appsId}/domainMappings", request.path_params)
        
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
        
        url = utils.generate_url(base_url, "/v1alpha/apps/{appsId}/domainMappings/{domainMappingsId}", request.path_params)
        
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

    
    def appengine_apps_locations_get(self, request: operations.AppengineAppsLocationsGetRequest) -> operations.AppengineAppsLocationsGetResponse:
        r"""Gets information about a location.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha/apps/{appsId}/locations/{locationsId}", request.path_params)
        
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
        
        url = utils.generate_url(base_url, "/v1alpha/apps/{appsId}/locations", request.path_params)
        
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
        
        url = utils.generate_url(base_url, "/v1alpha/apps/{appsId}/operations/{operationsId}", request.path_params)
        
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
        
        url = utils.generate_url(base_url, "/v1alpha/apps/{appsId}/operations", request.path_params)
        
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

    