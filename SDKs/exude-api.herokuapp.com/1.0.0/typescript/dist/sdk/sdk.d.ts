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
    FilterFileDataStoppings(req: operations.FilterFileDataStoppingsRequest, config?: AxiosRequestConfig): Promise<operations.FilterFileDataStoppingsResponse>;
    FilterStoppings(req: operations.FilterStoppingsRequest, config?: AxiosRequestConfig): Promise<operations.FilterStoppingsResponse>;
}
export {};
