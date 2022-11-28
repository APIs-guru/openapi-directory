import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class RateLimit {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * rateLimitGet - Get rate limit status for the authenticated user
     *
     * **Note:** Accessing this endpoint does not count against your REST API rate limit.
     *
     * **Note:** The `rate` object is deprecated. If you're writing new API client code or updating existing code, you should use the `core` object instead of the `rate` object. The `core` object contains the same information that is present in the `rate` object.
     *
     * https://docs.github.com/enterprise-server@2.21/rest/reference/rate-limit#get-rate-limit-status-for-the-authenticated-user - API method documentation
    **/
    rateLimitGet(config?: AxiosRequestConfig): Promise<operations.RateLimitGetResponse>;
}
