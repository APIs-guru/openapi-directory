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
     * API to verify Scheme Certificate.
    **/
    Epfsc(req: operations.EpfscRequest, config?: AxiosRequestConfig): Promise<operations.EpfscResponse>;
    /**
     * API to verify Pension Certificate.
    **/
    Pecer(req: operations.PecerRequest, config?: AxiosRequestConfig): Promise<operations.PecerResponse>;
    /**
     * API to verify UAN Card.
    **/
    Uncrd(req: operations.UncrdRequest, config?: AxiosRequestConfig): Promise<operations.UncrdResponse>;
}
export {};
