import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Accounts {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * analyticsadminAccountsList - Returns all accounts accessible by the caller. Note that these accounts might not currently have GA4 properties. Soft-deleted (ie: "trashed") accounts are excluded by default. Returns an empty list if no relevant accounts are found.
    **/
    analyticsadminAccountsList(req: operations.AnalyticsadminAccountsListRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsadminAccountsListResponse>;
    /**
     * analyticsadminAccountsProvisionAccountTicket - Requests a ticket for creating an account.
    **/
    analyticsadminAccountsProvisionAccountTicket(req: operations.AnalyticsadminAccountsProvisionAccountTicketRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsadminAccountsProvisionAccountTicketResponse>;
    /**
     * analyticsadminAccountsSearchChangeHistoryEvents - Searches through all changes to an account or its children given the specified set of filters.
    **/
    analyticsadminAccountsSearchChangeHistoryEvents(req: operations.AnalyticsadminAccountsSearchChangeHistoryEventsRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsadminAccountsSearchChangeHistoryEventsResponse>;
}
