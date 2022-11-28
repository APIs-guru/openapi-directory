import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class BandwidthSnapshots {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getBandwidthSnapshots - List Bandwidth Snapshots
     *
     * List Bandwidth Snapshots
    **/
    getBandwidthSnapshots(req: operations.GetBandwidthSnapshotsRequest, config?: AxiosRequestConfig): Promise<operations.GetBandwidthSnapshotsResponse>;
}
