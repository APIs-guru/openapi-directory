import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Locations {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * locationsAdd - Create Location
     *
     * Create Location
    **/
    locationsAdd(req: operations.LocationsAddRequest, config?: AxiosRequestConfig): Promise<operations.LocationsAddResponse>;
    /**
     * locationsAll - List Locations
     *
     * List Locations
    **/
    locationsAll(req: operations.LocationsAllRequest, config?: AxiosRequestConfig): Promise<operations.LocationsAllResponse>;
    /**
     * locationsDelete - Delete Location
     *
     * Delete Location
    **/
    locationsDelete(req: operations.LocationsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.LocationsDeleteResponse>;
    /**
     * locationsOne - Get Location
     *
     * Get Location
    **/
    locationsOne(req: operations.LocationsOneRequest, config?: AxiosRequestConfig): Promise<operations.LocationsOneResponse>;
    /**
     * locationsUpdate - Update Location
     *
     * Update Location
    **/
    locationsUpdate(req: operations.LocationsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.LocationsUpdateResponse>;
}
