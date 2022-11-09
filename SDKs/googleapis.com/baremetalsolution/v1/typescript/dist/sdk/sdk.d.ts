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
    BaremetalsolutionOperationsCancel(req: operations.BaremetalsolutionOperationsCancelRequest, config?: AxiosRequestConfig): Promise<operations.BaremetalsolutionOperationsCancelResponse>;
    BaremetalsolutionOperationsDelete(req: operations.BaremetalsolutionOperationsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.BaremetalsolutionOperationsDeleteResponse>;
    BaremetalsolutionOperationsList(req: operations.BaremetalsolutionOperationsListRequest, config?: AxiosRequestConfig): Promise<operations.BaremetalsolutionOperationsListResponse>;
}
export {};
