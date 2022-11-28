import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class UsageSnapshots {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getUsageSnapshots - List Usage Snapshots
     *
     * List Usage Snapshots
    **/
    getUsageSnapshots(req: operations.GetUsageSnapshotsRequest, config?: AxiosRequestConfig): Promise<operations.GetUsageSnapshotsResponse>;
}
