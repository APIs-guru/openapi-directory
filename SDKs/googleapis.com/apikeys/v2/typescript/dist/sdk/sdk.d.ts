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
    ApikeysKeysLookupKey(req: operations.ApikeysKeysLookupKeyRequest, config?: AxiosRequestConfig): Promise<operations.ApikeysKeysLookupKeyResponse>;
    ApikeysProjectsLocationsKeysCreate(req: operations.ApikeysProjectsLocationsKeysCreateRequest, config?: AxiosRequestConfig): Promise<operations.ApikeysProjectsLocationsKeysCreateResponse>;
    ApikeysProjectsLocationsKeysDelete(req: operations.ApikeysProjectsLocationsKeysDeleteRequest, config?: AxiosRequestConfig): Promise<operations.ApikeysProjectsLocationsKeysDeleteResponse>;
    ApikeysProjectsLocationsKeysGet(req: operations.ApikeysProjectsLocationsKeysGetRequest, config?: AxiosRequestConfig): Promise<operations.ApikeysProjectsLocationsKeysGetResponse>;
    ApikeysProjectsLocationsKeysGetKeyString(req: operations.ApikeysProjectsLocationsKeysGetKeyStringRequest, config?: AxiosRequestConfig): Promise<operations.ApikeysProjectsLocationsKeysGetKeyStringResponse>;
    ApikeysProjectsLocationsKeysList(req: operations.ApikeysProjectsLocationsKeysListRequest, config?: AxiosRequestConfig): Promise<operations.ApikeysProjectsLocationsKeysListResponse>;
    ApikeysProjectsLocationsKeysPatch(req: operations.ApikeysProjectsLocationsKeysPatchRequest, config?: AxiosRequestConfig): Promise<operations.ApikeysProjectsLocationsKeysPatchResponse>;
    ApikeysProjectsLocationsKeysUndelete(req: operations.ApikeysProjectsLocationsKeysUndeleteRequest, config?: AxiosRequestConfig): Promise<operations.ApikeysProjectsLocationsKeysUndeleteResponse>;
}
export {};
