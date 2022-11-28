import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeBoulderCountyVoterDetails {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchBoulderCountyVoterDetails - Search API for 'Boulder County Voter Details' entry type
     *
     * API to search for entries of type Boulder County Voter Details
    **/
    searchBoulderCountyVoterDetails(req: operations.SearchBoulderCountyVoterDetailsRequest, config?: AxiosRequestConfig): Promise<operations.SearchBoulderCountyVoterDetailsResponse>;
}
