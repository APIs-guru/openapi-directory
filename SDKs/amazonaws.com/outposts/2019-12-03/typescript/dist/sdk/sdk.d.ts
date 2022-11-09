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
    CreateOrder(req: operations.CreateOrderRequest, config?: AxiosRequestConfig): Promise<operations.CreateOrderResponse>;
    CreateOutpost(req: operations.CreateOutpostRequest, config?: AxiosRequestConfig): Promise<operations.CreateOutpostResponse>;
    DeleteOutpost(req: operations.DeleteOutpostRequest, config?: AxiosRequestConfig): Promise<operations.DeleteOutpostResponse>;
    DeleteSite(req: operations.DeleteSiteRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSiteResponse>;
    GetOutpost(req: operations.GetOutpostRequest, config?: AxiosRequestConfig): Promise<operations.GetOutpostResponse>;
    GetOutpostInstanceTypes(req: operations.GetOutpostInstanceTypesRequest, config?: AxiosRequestConfig): Promise<operations.GetOutpostInstanceTypesResponse>;
    ListOutposts(req: operations.ListOutpostsRequest, config?: AxiosRequestConfig): Promise<operations.ListOutpostsResponse>;
    ListSites(req: operations.ListSitesRequest, config?: AxiosRequestConfig): Promise<operations.ListSitesResponse>;
    ListTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    TagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    UntagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
}
export {};
