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
    AdexchangebuyerAccountsGet(req: operations.AdexchangebuyerAccountsGetRequest, config?: AxiosRequestConfig): Promise<operations.AdexchangebuyerAccountsGetResponse>;
    AdexchangebuyerAccountsList(req: operations.AdexchangebuyerAccountsListRequest, config?: AxiosRequestConfig): Promise<operations.AdexchangebuyerAccountsListResponse>;
    AdexchangebuyerAccountsPatch(req: operations.AdexchangebuyerAccountsPatchRequest, config?: AxiosRequestConfig): Promise<operations.AdexchangebuyerAccountsPatchResponse>;
    AdexchangebuyerAccountsUpdate(req: operations.AdexchangebuyerAccountsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.AdexchangebuyerAccountsUpdateResponse>;
    AdexchangebuyerCreativesGet(req: operations.AdexchangebuyerCreativesGetRequest, config?: AxiosRequestConfig): Promise<operations.AdexchangebuyerCreativesGetResponse>;
    AdexchangebuyerCreativesInsert(req: operations.AdexchangebuyerCreativesInsertRequest, config?: AxiosRequestConfig): Promise<operations.AdexchangebuyerCreativesInsertResponse>;
    AdexchangebuyerCreativesList(req: operations.AdexchangebuyerCreativesListRequest, config?: AxiosRequestConfig): Promise<operations.AdexchangebuyerCreativesListResponse>;
}
export {};
