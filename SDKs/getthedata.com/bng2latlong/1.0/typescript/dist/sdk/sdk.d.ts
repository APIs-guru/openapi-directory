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
     * Takes an OSGB36 easting and northing (British National Grid) and returns the geographically equivalent WGS84 latitude and longitude.
     * #### A successful request returns the following fields:
     * * status - this will be `ok`
     * * easting - the easting provided in the request
     * * northing - the northing provided in the request
     * * latitude - the latitude of the converted coordinates
     * * longitude - the longitude of the converted coordinates
     * #### An unsuccessful request returns the following fields:
     * * status - this will be `error`
     * * error - an error message
     *
    **/
    GetBng2latlongEastingNorthing(req: operations.GetBng2latlongEastingNorthingRequest, config?: AxiosRequestConfig): Promise<operations.GetBng2latlongEastingNorthingResponse>;
}
export {};
