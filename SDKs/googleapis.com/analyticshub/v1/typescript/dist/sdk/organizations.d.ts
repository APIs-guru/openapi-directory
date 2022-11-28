import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Organizations {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * analyticshubOrganizationsLocationsDataExchangesList - Lists all data exchanges from projects in a given organization and location.
    **/
    analyticshubOrganizationsLocationsDataExchangesList(req: operations.AnalyticshubOrganizationsLocationsDataExchangesListRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticshubOrganizationsLocationsDataExchangesListResponse>;
}
