import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://api.ebay.com{basePath}"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * createItemDraft - This call gives Partners the ability to create an eBay draft of a item for their seller using information from their site. This lets the Partner increase the exposure of items on their site and leverage the eBay user listing experience seamlessly. This experience provides guidance on pricing, aspects, etc. and recommendations that help create a listing that is complete and improves the exposure of the listing in search results. After the listing draft is created, the seller logs into their eBay account and uses the listing experience to finish the listing and publish the item on eBay.
    **/
    createItemDraft(req: operations.CreateItemDraftRequest, config?: AxiosRequestConfig): Promise<operations.CreateItemDraftResponse>;
}
export {};
