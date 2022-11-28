import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Provisioning {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * analyticsProvisioningCreateAccountTicket - Creates an account ticket.
    **/
    analyticsProvisioningCreateAccountTicket(req: operations.AnalyticsProvisioningCreateAccountTicketRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsProvisioningCreateAccountTicketResponse>;
    /**
     * analyticsProvisioningCreateAccountTree - Provision account.
    **/
    analyticsProvisioningCreateAccountTree(req: operations.AnalyticsProvisioningCreateAccountTreeRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsProvisioningCreateAccountTreeResponse>;
}
