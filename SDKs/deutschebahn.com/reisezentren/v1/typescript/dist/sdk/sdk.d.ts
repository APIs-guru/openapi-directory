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
     * Get all station infos
    **/
    GetReisezentren(req: operations.GetReisezentrenRequest, config?: AxiosRequestConfig): Promise<operations.GetReisezentrenResponse>;
    /**
     * Get information about a specific station
    **/
    GetReisezentrenId(req: operations.GetReisezentrenIdRequest, config?: AxiosRequestConfig): Promise<operations.GetReisezentrenIdResponse>;
    /**
     * Get information about a station near a location
    **/
    GetReisezentrenLocLatLon(req: operations.GetReisezentrenLocLatLonRequest, config?: AxiosRequestConfig): Promise<operations.GetReisezentrenLocLatLonResponse>;
    /**
     * Get stations in a given radius
    **/
    GetReisezentrenLocLatLonDist(req: operations.GetReisezentrenLocLatLonDistRequest, config?: AxiosRequestConfig): Promise<operations.GetReisezentrenLocLatLonDistResponse>;
}
export {};
