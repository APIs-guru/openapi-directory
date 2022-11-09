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
    GetArrivalsAndDeparturesByCrs(req: operations.GetArrivalsAndDeparturesByCrsRequest, config?: AxiosRequestConfig): Promise<operations.GetArrivalsAndDeparturesByCrsResponse>;
    GetArrivalsByCrs(req: operations.GetArrivalsByCrsRequest, config?: AxiosRequestConfig): Promise<operations.GetArrivalsByCrsResponse>;
    GetDeparturesByCrs(req: operations.GetDeparturesByCrsRequest, config?: AxiosRequestConfig): Promise<operations.GetDeparturesByCrsResponse>;
    GetFastestDeparturesByCrs(req: operations.GetFastestDeparturesByCrsRequest, config?: AxiosRequestConfig): Promise<operations.GetFastestDeparturesByCrsResponse>;
    GetNextDeparturesByCrs(req: operations.GetNextDeparturesByCrsRequest, config?: AxiosRequestConfig): Promise<operations.GetNextDeparturesByCrsResponse>;
    GetServiceDetailsById(req: operations.GetServiceDetailsByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetServiceDetailsByIdResponse>;
}
export {};
