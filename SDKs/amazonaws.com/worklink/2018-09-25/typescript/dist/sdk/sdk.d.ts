import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://worklink.{region}.amazonaws.com", "https://worklink.{region}.amazonaws.com", "http://worklink.{region}.amazonaws.com.cn", "https://worklink.{region}.amazonaws.com.cn"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare function WithSecurity(security: Security): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _security?: Security;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * associateDomain - Specifies a domain to be associated to Amazon WorkLink.
    **/
    associateDomain(req: operations.AssociateDomainRequest, config?: AxiosRequestConfig): Promise<operations.AssociateDomainResponse>;
    /**
     * associateWebsiteAuthorizationProvider - Associates a website authorization provider with a specified fleet. This is used to authorize users against associated websites in the company network.
    **/
    associateWebsiteAuthorizationProvider(req: operations.AssociateWebsiteAuthorizationProviderRequest, config?: AxiosRequestConfig): Promise<operations.AssociateWebsiteAuthorizationProviderResponse>;
    /**
     * associateWebsiteCertificateAuthority - Imports the root certificate of a certificate authority (CA) used to obtain TLS certificates used by associated websites within the company network.
    **/
    associateWebsiteCertificateAuthority(req: operations.AssociateWebsiteCertificateAuthorityRequest, config?: AxiosRequestConfig): Promise<operations.AssociateWebsiteCertificateAuthorityResponse>;
    /**
     * createFleet - Creates a fleet. A fleet consists of resources and the configuration that delivers associated websites to authorized users who download and set up the Amazon WorkLink app.
    **/
    createFleet(req: operations.CreateFleetRequest, config?: AxiosRequestConfig): Promise<operations.CreateFleetResponse>;
    /**
     * deleteFleet - Deletes a fleet. Prevents users from accessing previously associated websites.
    **/
    deleteFleet(req: operations.DeleteFleetRequest, config?: AxiosRequestConfig): Promise<operations.DeleteFleetResponse>;
    /**
     * describeAuditStreamConfiguration - Describes the configuration for delivering audit streams to the customer account.
    **/
    describeAuditStreamConfiguration(req: operations.DescribeAuditStreamConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.DescribeAuditStreamConfigurationResponse>;
    /**
     * describeCompanyNetworkConfiguration - Describes the networking configuration to access the internal websites associated with the specified fleet.
    **/
    describeCompanyNetworkConfiguration(req: operations.DescribeCompanyNetworkConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.DescribeCompanyNetworkConfigurationResponse>;
    /**
     * describeDevice - Provides information about a user's device.
    **/
    describeDevice(req: operations.DescribeDeviceRequest, config?: AxiosRequestConfig): Promise<operations.DescribeDeviceResponse>;
    /**
     * describeDevicePolicyConfiguration - Describes the device policy configuration for the specified fleet.
    **/
    describeDevicePolicyConfiguration(req: operations.DescribeDevicePolicyConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.DescribeDevicePolicyConfigurationResponse>;
    /**
     * describeDomain - Provides information about the domain.
    **/
    describeDomain(req: operations.DescribeDomainRequest, config?: AxiosRequestConfig): Promise<operations.DescribeDomainResponse>;
    /**
     * describeFleetMetadata - Provides basic information for the specified fleet, excluding identity provider, networking, and device configuration details.
    **/
    describeFleetMetadata(req: operations.DescribeFleetMetadataRequest, config?: AxiosRequestConfig): Promise<operations.DescribeFleetMetadataResponse>;
    /**
     * describeIdentityProviderConfiguration - Describes the identity provider configuration of the specified fleet.
    **/
    describeIdentityProviderConfiguration(req: operations.DescribeIdentityProviderConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.DescribeIdentityProviderConfigurationResponse>;
    /**
     * describeWebsiteCertificateAuthority - Provides information about the certificate authority.
    **/
    describeWebsiteCertificateAuthority(req: operations.DescribeWebsiteCertificateAuthorityRequest, config?: AxiosRequestConfig): Promise<operations.DescribeWebsiteCertificateAuthorityResponse>;
    /**
     * disassociateDomain - Disassociates a domain from Amazon WorkLink. End users lose the ability to access the domain with Amazon WorkLink.
    **/
    disassociateDomain(req: operations.DisassociateDomainRequest, config?: AxiosRequestConfig): Promise<operations.DisassociateDomainResponse>;
    /**
     * disassociateWebsiteAuthorizationProvider - Disassociates a website authorization provider from a specified fleet. After the disassociation, users can't load any associated websites that require this authorization provider.
    **/
    disassociateWebsiteAuthorizationProvider(req: operations.DisassociateWebsiteAuthorizationProviderRequest, config?: AxiosRequestConfig): Promise<operations.DisassociateWebsiteAuthorizationProviderResponse>;
    /**
     * disassociateWebsiteCertificateAuthority - Removes a certificate authority (CA).
    **/
    disassociateWebsiteCertificateAuthority(req: operations.DisassociateWebsiteCertificateAuthorityRequest, config?: AxiosRequestConfig): Promise<operations.DisassociateWebsiteCertificateAuthorityResponse>;
    /**
     * listDevices - Retrieves a list of devices registered with the specified fleet.
    **/
    listDevices(req: operations.ListDevicesRequest, config?: AxiosRequestConfig): Promise<operations.ListDevicesResponse>;
    /**
     * listDomains - Retrieves a list of domains associated to a specified fleet.
    **/
    listDomains(req: operations.ListDomainsRequest, config?: AxiosRequestConfig): Promise<operations.ListDomainsResponse>;
    /**
     * listFleets - Retrieves a list of fleets for the current account and Region.
    **/
    listFleets(req: operations.ListFleetsRequest, config?: AxiosRequestConfig): Promise<operations.ListFleetsResponse>;
    /**
     * listTagsForResource - Retrieves a list of tags for the specified resource.
    **/
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * listWebsiteAuthorizationProviders - Retrieves a list of website authorization providers associated with a specified fleet.
    **/
    listWebsiteAuthorizationProviders(req: operations.ListWebsiteAuthorizationProvidersRequest, config?: AxiosRequestConfig): Promise<operations.ListWebsiteAuthorizationProvidersResponse>;
    /**
     * listWebsiteCertificateAuthorities - Retrieves a list of certificate authorities added for the current account and Region.
    **/
    listWebsiteCertificateAuthorities(req: operations.ListWebsiteCertificateAuthoritiesRequest, config?: AxiosRequestConfig): Promise<operations.ListWebsiteCertificateAuthoritiesResponse>;
    /**
     * restoreDomainAccess - Moves a domain to ACTIVE status if it was in the INACTIVE status.
    **/
    restoreDomainAccess(req: operations.RestoreDomainAccessRequest, config?: AxiosRequestConfig): Promise<operations.RestoreDomainAccessResponse>;
    /**
     * revokeDomainAccess - Moves a domain to INACTIVE status if it was in the ACTIVE status.
    **/
    revokeDomainAccess(req: operations.RevokeDomainAccessRequest, config?: AxiosRequestConfig): Promise<operations.RevokeDomainAccessResponse>;
    /**
     * signOutUser - Signs the user out from all of their devices. The user can sign in again if they have valid credentials.
    **/
    signOutUser(req: operations.SignOutUserRequest, config?: AxiosRequestConfig): Promise<operations.SignOutUserResponse>;
    /**
     * tagResource - Adds or overwrites one or more tags for the specified resource, such as a fleet. Each tag consists of a key and an optional value. If a resource already has a tag with the same key, this operation updates its value.
    **/
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * untagResource - Removes one or more tags from the specified resource.
    **/
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * updateAuditStreamConfiguration - Updates the audit stream configuration for the fleet.
    **/
    updateAuditStreamConfiguration(req: operations.UpdateAuditStreamConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateAuditStreamConfigurationResponse>;
    /**
     * updateCompanyNetworkConfiguration - Updates the company network configuration for the fleet.
    **/
    updateCompanyNetworkConfiguration(req: operations.UpdateCompanyNetworkConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateCompanyNetworkConfigurationResponse>;
    /**
     * updateDevicePolicyConfiguration - Updates the device policy configuration for the fleet.
    **/
    updateDevicePolicyConfiguration(req: operations.UpdateDevicePolicyConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDevicePolicyConfigurationResponse>;
    /**
     * updateDomainMetadata - Updates domain metadata, such as DisplayName.
    **/
    updateDomainMetadata(req: operations.UpdateDomainMetadataRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDomainMetadataResponse>;
    /**
     * updateFleetMetadata - Updates fleet metadata, such as DisplayName.
    **/
    updateFleetMetadata(req: operations.UpdateFleetMetadataRequest, config?: AxiosRequestConfig): Promise<operations.UpdateFleetMetadataResponse>;
    /**
     * updateIdentityProviderConfiguration - Updates the identity provider configuration for the fleet.
    **/
    updateIdentityProviderConfiguration(req: operations.UpdateIdentityProviderConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateIdentityProviderConfigurationResponse>;
}
export {};
