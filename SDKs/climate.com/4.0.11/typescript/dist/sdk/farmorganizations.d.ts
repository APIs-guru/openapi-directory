import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class FarmOrganizations {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * fetchFarmOrganizationByTypeAndId - Retrieve a specific farm organization by organization type and ID
     *
     * Retrieve a given **farm organization** by organization type and ID.
    **/
    fetchFarmOrganizationByTypeAndId(req: operations.FetchFarmOrganizationByTypeAndIdRequest, config?: AxiosRequestConfig): Promise<operations.FetchFarmOrganizationByTypeAndIdResponse>;
}
