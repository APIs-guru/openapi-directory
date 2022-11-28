import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class UsageDailySnapshots {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getUsageDailySnapshots - List Usage Daily Snapshots
     *
     * List Usage Daily Snapshots
    **/
    getUsageDailySnapshots(req: operations.GetUsageDailySnapshotsRequest, config?: AxiosRequestConfig): Promise<operations.GetUsageDailySnapshotsResponse>;
}
