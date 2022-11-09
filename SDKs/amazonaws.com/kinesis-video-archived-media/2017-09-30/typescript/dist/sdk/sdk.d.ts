import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
declare type OptsFunc = (sdk: SDK) => void;
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare function WithSecurity(security: Security): OptsFunc;
export declare class SDK {
    defaultClient?: AxiosInstance;
    securityClient?: AxiosInstance;
    security?: any;
    serverURL: string;
    constructor(...opts: OptsFunc[]);
    GetClip(req: operations.GetClipRequest, config?: AxiosRequestConfig): Promise<operations.GetClipResponse>;
    GetDashStreamingSessionUrl(req: operations.GetDashStreamingSessionUrlRequest, config?: AxiosRequestConfig): Promise<operations.GetDashStreamingSessionUrlResponse>;
    GetHlsStreamingSessionUrl(req: operations.GetHlsStreamingSessionUrlRequest, config?: AxiosRequestConfig): Promise<operations.GetHlsStreamingSessionUrlResponse>;
    GetMediaForFragmentList(req: operations.GetMediaForFragmentListRequest, config?: AxiosRequestConfig): Promise<operations.GetMediaForFragmentListResponse>;
    ListFragments(req: operations.ListFragmentsRequest, config?: AxiosRequestConfig): Promise<operations.ListFragmentsResponse>;
}
export {};
