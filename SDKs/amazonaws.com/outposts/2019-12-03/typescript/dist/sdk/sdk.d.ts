import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://outposts.{region}.amazonaws.com", "https://outposts.{region}.amazonaws.com", "http://outposts.{region}.amazonaws.com.cn", "https://outposts.{region}.amazonaws.com.cn"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare function WithSecurity(security: Security): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _security?: Security;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * createOrder - Creates an order for an Outpost.
    **/
    createOrder(req: operations.CreateOrderRequest, config?: AxiosRequestConfig): Promise<operations.CreateOrderResponse>;
    /**
     * createOutpost - <p>Creates an Outpost.</p> <p>You can specify <code>AvailabilityZone</code> or <code>AvailabilityZoneId</code>.</p>
    **/
    createOutpost(req: operations.CreateOutpostRequest, config?: AxiosRequestConfig): Promise<operations.CreateOutpostResponse>;
    /**
     * deleteOutpost - Deletes the Outpost.
    **/
    deleteOutpost(req: operations.DeleteOutpostRequest, config?: AxiosRequestConfig): Promise<operations.DeleteOutpostResponse>;
    /**
     * deleteSite - Deletes the site.
    **/
    deleteSite(req: operations.DeleteSiteRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSiteResponse>;
    /**
     * getOutpost - Gets information about the specified Outpost.
    **/
    getOutpost(req: operations.GetOutpostRequest, config?: AxiosRequestConfig): Promise<operations.GetOutpostResponse>;
    /**
     * getOutpostInstanceTypes - Lists the instance types for the specified Outpost.
    **/
    getOutpostInstanceTypes(req: operations.GetOutpostInstanceTypesRequest, config?: AxiosRequestConfig): Promise<operations.GetOutpostInstanceTypesResponse>;
    /**
     * listOutposts - <p>Create a list of the Outposts for your AWS account. Add filters to your request to return a more specific list of results. Use filters to match an Outpost lifecycle status, Availibility Zone (<code>us-east-1a</code>), and AZ ID (<code>use1-az1</code>). </p> <p>If you specify multiple filters, the filters are joined with an <code>AND</code>, and the request returns only results that match all of the specified filters.</p>
    **/
    listOutposts(req: operations.ListOutpostsRequest, config?: AxiosRequestConfig): Promise<operations.ListOutpostsResponse>;
    /**
     * listSites - Lists the sites for the specified AWS account.
    **/
    listSites(req: operations.ListSitesRequest, config?: AxiosRequestConfig): Promise<operations.ListSitesResponse>;
    /**
     * listTagsForResource - Lists the tags for the specified resource.
    **/
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * tagResource - Adds tags to the specified resource.
    **/
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * untagResource - Removes tags from the specified resource.
    **/
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
}
export {};
