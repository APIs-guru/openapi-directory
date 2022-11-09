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
    AbusiveexperiencereportSitesGet(req: operations.AbusiveexperiencereportSitesGetRequest, config?: AxiosRequestConfig): Promise<operations.AbusiveexperiencereportSitesGetResponse>;
    AbusiveexperiencereportViolatingSitesList(req: operations.AbusiveexperiencereportViolatingSitesListRequest, config?: AxiosRequestConfig): Promise<operations.AbusiveexperiencereportViolatingSitesListResponse>;
}
export {};
