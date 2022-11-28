import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class V1System {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * healthCheck - Returns the health information for the official business registers based on usage.
     *
     * Returns the health information for the official business registers based on usage.
    **/
    healthCheck(req: operations.HealthCheckRequest, config?: AxiosRequestConfig): Promise<operations.HealthCheckResponse>;
    /**
     * systemCountries - Returns a list of countries
     *
     * Retrieve the list of all currently enabled countries
    **/
    systemCountries(req: operations.SystemCountriesRequest, config?: AxiosRequestConfig): Promise<operations.SystemCountriesResponse>;
    /**
     * systemPricelist - Returns a list of products with prices
     *
     * Retrieve pricing rules for your subscription plan
    **/
    systemPricelist(req: operations.SystemPricelistRequest, config?: AxiosRequestConfig): Promise<operations.SystemPricelistResponse>;
}
