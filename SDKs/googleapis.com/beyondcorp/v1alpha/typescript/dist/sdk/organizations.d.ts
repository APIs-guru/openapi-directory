import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Organizations {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * beyondcorpOrganizationsLocationsSubscriptionsCreate - Creates a new BeyondCorp Enterprise Subscription in a given organization. Location will always be global as BeyondCorp subscriptions are per organization.
    **/
    beyondcorpOrganizationsLocationsSubscriptionsCreate(req: operations.BeyondcorpOrganizationsLocationsSubscriptionsCreateRequest, config?: AxiosRequestConfig): Promise<operations.BeyondcorpOrganizationsLocationsSubscriptionsCreateResponse>;
    /**
     * beyondcorpOrganizationsLocationsSubscriptionsList - Lists Subscriptions in a given organization and location.
    **/
    beyondcorpOrganizationsLocationsSubscriptionsList(req: operations.BeyondcorpOrganizationsLocationsSubscriptionsListRequest, config?: AxiosRequestConfig): Promise<operations.BeyondcorpOrganizationsLocationsSubscriptionsListResponse>;
}
