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
    /**
     * API to verify Conversion Certificate.
    **/
    Cncer(req: operations.CncerRequest, config?: AxiosRequestConfig): Promise<operations.CncerResponse>;
    /**
     * API to verify Mutation Report/ePattadar Passbook.
    **/
    Mutan(req: operations.MutanRequest, config?: AxiosRequestConfig): Promise<operations.MutanResponse>;
}
export {};
