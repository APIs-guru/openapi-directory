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
    DatatransferApplicationsGet(req: operations.DatatransferApplicationsGetRequest, config?: AxiosRequestConfig): Promise<operations.DatatransferApplicationsGetResponse>;
    DatatransferApplicationsList(req: operations.DatatransferApplicationsListRequest, config?: AxiosRequestConfig): Promise<operations.DatatransferApplicationsListResponse>;
    DatatransferTransfersGet(req: operations.DatatransferTransfersGetRequest, config?: AxiosRequestConfig): Promise<operations.DatatransferTransfersGetResponse>;
    DatatransferTransfersInsert(req: operations.DatatransferTransfersInsertRequest, config?: AxiosRequestConfig): Promise<operations.DatatransferTransfersInsertResponse>;
    DatatransferTransfersList(req: operations.DatatransferTransfersListRequest, config?: AxiosRequestConfig): Promise<operations.DatatransferTransfersListResponse>;
}
export {};
