import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TariffPriceApi {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * tariffSlph0 - Energy Tariff information
     *
     * Provides pricing data for private households with standard load profiles (Standardlastprofil H0).
     *
    **/
    tariffSlph0(req: operations.TariffSlph0Request, config?: AxiosRequestConfig): Promise<operations.TariffSlph0Response>;
    /**
     * tariffcomponents - Energy Tariff price components
     *
     * Provides insides into the different cost components of energy for a private household.
     * Sample Request: https://api.corrently.io/v2.0/tariff/components?email=demo%40corrently.io&zip=69168&kwha=3300
     *
    **/
    tariffcomponents(req: operations.TariffcomponentsRequest, config?: AxiosRequestConfig): Promise<operations.TariffcomponentsResponse>;
}
