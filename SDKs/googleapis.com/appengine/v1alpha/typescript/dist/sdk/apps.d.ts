import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Apps {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * appengineAppsAuthorizedCertificatesCreate - Uploads the specified SSL certificate.
    **/
    appengineAppsAuthorizedCertificatesCreate(req: operations.AppengineAppsAuthorizedCertificatesCreateRequest, config?: AxiosRequestConfig): Promise<operations.AppengineAppsAuthorizedCertificatesCreateResponse>;
    /**
     * appengineAppsAuthorizedCertificatesDelete - Deletes the specified SSL certificate.
    **/
    appengineAppsAuthorizedCertificatesDelete(req: operations.AppengineAppsAuthorizedCertificatesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.AppengineAppsAuthorizedCertificatesDeleteResponse>;
    /**
     * appengineAppsAuthorizedCertificatesGet - Gets the specified SSL certificate.
    **/
    appengineAppsAuthorizedCertificatesGet(req: operations.AppengineAppsAuthorizedCertificatesGetRequest, config?: AxiosRequestConfig): Promise<operations.AppengineAppsAuthorizedCertificatesGetResponse>;
    /**
     * appengineAppsAuthorizedCertificatesList - Lists all SSL certificates the user is authorized to administer.
    **/
    appengineAppsAuthorizedCertificatesList(req: operations.AppengineAppsAuthorizedCertificatesListRequest, config?: AxiosRequestConfig): Promise<operations.AppengineAppsAuthorizedCertificatesListResponse>;
    /**
     * appengineAppsAuthorizedCertificatesPatch - Updates the specified SSL certificate. To renew a certificate and maintain its existing domain mappings, update certificate_data with a new certificate. The new certificate must be applicable to the same domains as the original certificate. The certificate display_name may also be updated.
    **/
    appengineAppsAuthorizedCertificatesPatch(req: operations.AppengineAppsAuthorizedCertificatesPatchRequest, config?: AxiosRequestConfig): Promise<operations.AppengineAppsAuthorizedCertificatesPatchResponse>;
    /**
     * appengineAppsAuthorizedDomainsList - Lists all domains the user is authorized to administer.
    **/
    appengineAppsAuthorizedDomainsList(req: operations.AppengineAppsAuthorizedDomainsListRequest, config?: AxiosRequestConfig): Promise<operations.AppengineAppsAuthorizedDomainsListResponse>;
    /**
     * appengineAppsDomainMappingsCreate - Maps a domain to an application. A user must be authorized to administer a domain in order to map it to an application. For a list of available authorized domains, see AuthorizedDomains.ListAuthorizedDomains.
    **/
    appengineAppsDomainMappingsCreate(req: operations.AppengineAppsDomainMappingsCreateRequest, config?: AxiosRequestConfig): Promise<operations.AppengineAppsDomainMappingsCreateResponse>;
    /**
     * appengineAppsDomainMappingsDelete - Deletes the specified domain mapping. A user must be authorized to administer the associated domain in order to delete a DomainMapping resource.
    **/
    appengineAppsDomainMappingsDelete(req: operations.AppengineAppsDomainMappingsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.AppengineAppsDomainMappingsDeleteResponse>;
    /**
     * appengineAppsDomainMappingsGet - Gets the specified domain mapping.
    **/
    appengineAppsDomainMappingsGet(req: operations.AppengineAppsDomainMappingsGetRequest, config?: AxiosRequestConfig): Promise<operations.AppengineAppsDomainMappingsGetResponse>;
    /**
     * appengineAppsDomainMappingsList - Lists the domain mappings on an application.
    **/
    appengineAppsDomainMappingsList(req: operations.AppengineAppsDomainMappingsListRequest, config?: AxiosRequestConfig): Promise<operations.AppengineAppsDomainMappingsListResponse>;
    /**
     * appengineAppsDomainMappingsPatch - Updates the specified domain mapping. To map an SSL certificate to a domain mapping, update certificate_id to point to an AuthorizedCertificate resource. A user must be authorized to administer the associated domain in order to update a DomainMapping resource.
    **/
    appengineAppsDomainMappingsPatch(req: operations.AppengineAppsDomainMappingsPatchRequest, config?: AxiosRequestConfig): Promise<operations.AppengineAppsDomainMappingsPatchResponse>;
    /**
     * appengineAppsLocationsGet - Gets information about a location.
    **/
    appengineAppsLocationsGet(req: operations.AppengineAppsLocationsGetRequest, config?: AxiosRequestConfig): Promise<operations.AppengineAppsLocationsGetResponse>;
    /**
     * appengineAppsLocationsList - Lists information about the supported locations for this service.
    **/
    appengineAppsLocationsList(req: operations.AppengineAppsLocationsListRequest, config?: AxiosRequestConfig): Promise<operations.AppengineAppsLocationsListResponse>;
    /**
     * appengineAppsOperationsGet - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
    **/
    appengineAppsOperationsGet(req: operations.AppengineAppsOperationsGetRequest, config?: AxiosRequestConfig): Promise<operations.AppengineAppsOperationsGetResponse>;
    /**
     * appengineAppsOperationsList - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.NOTE: the name binding allows API services to override the binding to use different resource name schemes, such as users/* /operations. To override the binding, API services can add a binding such as "/v1/{name=users/*}/operations" to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
    **/
    appengineAppsOperationsList(req: operations.AppengineAppsOperationsListRequest, config?: AxiosRequestConfig): Promise<operations.AppengineAppsOperationsListResponse>;
}
