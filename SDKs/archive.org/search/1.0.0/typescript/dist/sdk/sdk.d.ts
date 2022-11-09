import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
declare type OptsFunc = (sdk: SDK) => void;
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    defaultClient?: AxiosInstance;
    securityClient?: AxiosInstance;
    security?: any;
    serverURL: string;
    constructor(...opts: OptsFunc[]);
    GetSearchV1Fields(req: operations.GetSearchV1FieldsRequest, config?: AxiosRequestConfig): Promise<operations.GetSearchV1FieldsResponse>;
    GetSearchV1Organic(req: operations.GetSearchV1OrganicRequest, config?: AxiosRequestConfig): Promise<operations.GetSearchV1OrganicResponse>;
    GetSearchV1Scrape(req: operations.GetSearchV1ScrapeRequest, config?: AxiosRequestConfig): Promise<operations.GetSearchV1ScrapeResponse>;
}
export {};
