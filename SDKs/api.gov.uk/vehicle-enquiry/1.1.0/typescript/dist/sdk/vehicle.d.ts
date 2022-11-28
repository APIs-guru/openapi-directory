import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Vehicle {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getVehicleDetailsByRegistrationNumber - Get vehicle details by registration number
     *
     * Returns vehicle details based on registration number
    **/
    getVehicleDetailsByRegistrationNumber(req: operations.GetVehicleDetailsByRegistrationNumberRequest, config?: AxiosRequestConfig): Promise<operations.GetVehicleDetailsByRegistrationNumberResponse>;
}
