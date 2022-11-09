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
    AccesscontextmanagerAccessPoliciesAccessLevelsCreate(req: operations.AccesscontextmanagerAccessPoliciesAccessLevelsCreateRequest, config?: AxiosRequestConfig): Promise<operations.AccesscontextmanagerAccessPoliciesAccessLevelsCreateResponse>;
    AccesscontextmanagerAccessPoliciesAccessLevelsList(req: operations.AccesscontextmanagerAccessPoliciesAccessLevelsListRequest, config?: AxiosRequestConfig): Promise<operations.AccesscontextmanagerAccessPoliciesAccessLevelsListResponse>;
    AccesscontextmanagerAccessPoliciesCreate(req: operations.AccesscontextmanagerAccessPoliciesCreateRequest, config?: AxiosRequestConfig): Promise<operations.AccesscontextmanagerAccessPoliciesCreateResponse>;
    AccesscontextmanagerAccessPoliciesList(req: operations.AccesscontextmanagerAccessPoliciesListRequest, config?: AxiosRequestConfig): Promise<operations.AccesscontextmanagerAccessPoliciesListResponse>;
    AccesscontextmanagerAccessPoliciesServicePerimetersCreate(req: operations.AccesscontextmanagerAccessPoliciesServicePerimetersCreateRequest, config?: AxiosRequestConfig): Promise<operations.AccesscontextmanagerAccessPoliciesServicePerimetersCreateResponse>;
    AccesscontextmanagerAccessPoliciesServicePerimetersDelete(req: operations.AccesscontextmanagerAccessPoliciesServicePerimetersDeleteRequest, config?: AxiosRequestConfig): Promise<operations.AccesscontextmanagerAccessPoliciesServicePerimetersDeleteResponse>;
    AccesscontextmanagerAccessPoliciesServicePerimetersList(req: operations.AccesscontextmanagerAccessPoliciesServicePerimetersListRequest, config?: AxiosRequestConfig): Promise<operations.AccesscontextmanagerAccessPoliciesServicePerimetersListResponse>;
    AccesscontextmanagerAccessPoliciesServicePerimetersPatch(req: operations.AccesscontextmanagerAccessPoliciesServicePerimetersPatchRequest, config?: AxiosRequestConfig): Promise<operations.AccesscontextmanagerAccessPoliciesServicePerimetersPatchResponse>;
    AccesscontextmanagerOperationsGet(req: operations.AccesscontextmanagerOperationsGetRequest, config?: AxiosRequestConfig): Promise<operations.AccesscontextmanagerOperationsGetResponse>;
}
export {};
