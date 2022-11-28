import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Site {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getSite - Show site settings
     *
     * Show site settings
    **/
    getSite(config?: AxiosRequestConfig): Promise<operations.GetSiteResponse>;
    /**
     * getSiteApiKeys - List Api Keys
     *
     * List Api Keys
    **/
    getSiteApiKeys(req: operations.GetSiteApiKeysRequest, config?: AxiosRequestConfig): Promise<operations.GetSiteApiKeysResponse>;
    /**
     * getSiteDnsRecords - Show site DNS configuration.
     *
     * Show site DNS configuration.
    **/
    getSiteDnsRecords(req: operations.GetSiteDnsRecordsRequest, config?: AxiosRequestConfig): Promise<operations.GetSiteDnsRecordsResponse>;
    /**
     * getSiteIpAddresses - List IP Addresses associated with the current site
     *
     * List IP Addresses associated with the current site
    **/
    getSiteIpAddresses(req: operations.GetSiteIpAddressesRequest, config?: AxiosRequestConfig): Promise<operations.GetSiteIpAddressesResponse>;
    /**
     * getSiteUsage - Get the most recent usage snapshot (usage data for billing purposes) for a Site.
     *
     * Get the most recent usage snapshot (usage data for billing purposes) for a Site.
    **/
    getSiteUsage(config?: AxiosRequestConfig): Promise<operations.GetSiteUsageResponse>;
    /**
     * patchSite - Update site settings.
     *
     * Update site settings.
    **/
    patchSite(req: operations.PatchSiteRequest, config?: AxiosRequestConfig): Promise<operations.PatchSiteResponse>;
    /**
     * postSiteApiKeys - Create Api Key
     *
     * Create Api Key
    **/
    postSiteApiKeys(req: operations.PostSiteApiKeysRequest, config?: AxiosRequestConfig): Promise<operations.PostSiteApiKeysResponse>;
    /**
     * postSiteTestWebhook - Test webhook.
     *
     * Test webhook.
    **/
    postSiteTestWebhook(req: operations.PostSiteTestWebhookRequest, config?: AxiosRequestConfig): Promise<operations.PostSiteTestWebhookResponse>;
}
