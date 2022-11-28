import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TaxRates {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * taxRatesAdd - Create Tax Rate
     *
     * Create Tax Rate
    **/
    taxRatesAdd(req: operations.TaxRatesAddRequest, config?: AxiosRequestConfig): Promise<operations.TaxRatesAddResponse>;
    /**
     * taxRatesAll - List Tax Rates
     *
     * List Tax Rates. Note: Not all connectors return the actual rate/percentage value. In this case, only the tax code or reference is returned. Connectors Affected: Quickbooks
     *
    **/
    taxRatesAll(req: operations.TaxRatesAllRequest, config?: AxiosRequestConfig): Promise<operations.TaxRatesAllResponse>;
    /**
     * taxRatesDelete - Delete Tax Rate
     *
     * Delete Tax Rate
    **/
    taxRatesDelete(req: operations.TaxRatesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.TaxRatesDeleteResponse>;
    /**
     * taxRatesOne - Get Tax Rate
     *
     * Get Tax Rate. Note: Not all connectors return the actual rate/percentage value. In this case, only the tax code or reference is returned. Support will soon be added to return the actual rate/percentage by doing additional calls in the background to provide the full view of a given tax rate. Connectors Affected: Quickbooks
     *
    **/
    taxRatesOne(req: operations.TaxRatesOneRequest, config?: AxiosRequestConfig): Promise<operations.TaxRatesOneResponse>;
    /**
     * taxRatesUpdate - Update Tax Rate
     *
     * Update Tax Rate
    **/
    taxRatesUpdate(req: operations.TaxRatesUpdateRequest, config?: AxiosRequestConfig): Promise<operations.TaxRatesUpdateResponse>;
}
