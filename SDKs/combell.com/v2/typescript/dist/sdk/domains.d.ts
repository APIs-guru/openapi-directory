import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Domains {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * configureDomain - Edit domain name renew state
     *
     * Allowed if can_toggle_renew is true on the domain detail:<br /><ul><li>If there are no unpaid invoices for the domain name anymore.</li><li>If the renewal won't start within 1 month.</li></ul>
     * Allowed if the requesting user has the finance role.
    **/
    configureDomain(req: operations.ConfigureDomainRequest, config?: AxiosRequestConfig): Promise<operations.ConfigureDomainResponse>;
    /**
     * domains - Overviews of domains
    **/
    domains(req: operations.DomainsRequest, config?: AxiosRequestConfig): Promise<operations.DomainsResponse>;
    /**
     * getDomainsDomainName - Details of a domain
    **/
    getDomainsDomainName(req: operations.GetDomainsDomainNameRequest, config?: AxiosRequestConfig): Promise<operations.GetDomainsDomainNameResponse>;
    /**
     * postDomainsRegistrations - Register a domain
     *
     * Registers an available domain.<br />Domain names with extension '.ca' are only available for registrants with country code 'CA'.
    **/
    postDomainsRegistrations(req: operations.PostDomainsRegistrationsRequest, config?: AxiosRequestConfig): Promise<operations.PostDomainsRegistrationsResponse>;
    /**
     * putDomainsDomainNameNameservers - Edit domain name servers
    **/
    putDomainsDomainNameNameservers(req: operations.PutDomainsDomainNameNameserversRequest, config?: AxiosRequestConfig): Promise<operations.PutDomainsDomainNameNameserversResponse>;
}
