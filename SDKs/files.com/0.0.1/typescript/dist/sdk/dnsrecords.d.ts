import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class DnsRecords {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getDnsRecords - Show site DNS configuration.
     *
     * Show site DNS configuration.
    **/
    getDnsRecords(req: operations.GetDnsRecordsRequest, config?: AxiosRequestConfig): Promise<operations.GetDnsRecordsResponse>;
}
