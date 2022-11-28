import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class OrganizationExports {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createOrganizationExport - Create an organization export request
     *
     * This method creates a request to export an Organization. Asana will complete the export at some point after you create the request.
    **/
    createOrganizationExport(req: operations.CreateOrganizationExportRequest, config?: AxiosRequestConfig): Promise<operations.CreateOrganizationExportResponse>;
    /**
     * getOrganizationExport - Get details on an org export request
     *
     * Returns details of a previously-requested Organization export.
    **/
    getOrganizationExport(req: operations.GetOrganizationExportRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationExportResponse>;
}
