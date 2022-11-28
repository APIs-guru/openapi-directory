import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeBolderRentalHousing {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchBolderRentalHousing - Search API for 'Boulder Rental Housing' entry type
     *
     * API to search for entries of type Boulder Rental Housing
    **/
    searchBolderRentalHousing(req: operations.SearchBolderRentalHousingRequest, config?: AxiosRequestConfig): Promise<operations.SearchBolderRentalHousingResponse>;
}
