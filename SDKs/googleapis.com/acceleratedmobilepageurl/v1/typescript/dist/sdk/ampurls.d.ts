import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class AmpUrls {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * acceleratedmobilepageurlAmpUrlsBatchGet - Returns AMP URL(s) and equivalent [AMP Cache URL(s)](/amp/cache/overview#amp-cache-url-format).
    **/
    acceleratedmobilepageurlAmpUrlsBatchGet(req: operations.AcceleratedmobilepageurlAmpUrlsBatchGetRequest, config?: AxiosRequestConfig): Promise<operations.AcceleratedmobilepageurlAmpUrlsBatchGetResponse>;
}
