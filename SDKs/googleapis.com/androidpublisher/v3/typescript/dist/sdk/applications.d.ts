import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Applications {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * androidpublisherApplicationsDeviceTierConfigsCreate - Creates a new device tier config for an app.
    **/
    androidpublisherApplicationsDeviceTierConfigsCreate(req: operations.AndroidpublisherApplicationsDeviceTierConfigsCreateRequest, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherApplicationsDeviceTierConfigsCreateResponse>;
    /**
     * androidpublisherApplicationsDeviceTierConfigsGet - Returns a particular device tier config.
    **/
    androidpublisherApplicationsDeviceTierConfigsGet(req: operations.AndroidpublisherApplicationsDeviceTierConfigsGetRequest, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherApplicationsDeviceTierConfigsGetResponse>;
    /**
     * androidpublisherApplicationsDeviceTierConfigsList - Returns created device tier configs, ordered by descending creation time.
    **/
    androidpublisherApplicationsDeviceTierConfigsList(req: operations.AndroidpublisherApplicationsDeviceTierConfigsListRequest, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherApplicationsDeviceTierConfigsListResponse>;
}
