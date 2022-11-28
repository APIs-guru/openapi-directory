import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class CustomFieldSettings {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getCustomFieldSettingsForPortfolio - Get a portfolio's custom fields
     *
     * Returns a list of all of the custom fields settings on a portfolio, in compact form.
    **/
    getCustomFieldSettingsForPortfolio(req: operations.GetCustomFieldSettingsForPortfolioRequest, config?: AxiosRequestConfig): Promise<operations.GetCustomFieldSettingsForPortfolioResponse>;
    /**
     * getCustomFieldSettingsForProject - Get a project's custom fields
     *
     * Returns a list of all of the custom fields settings on a project, in compact form. Note that, as in all queries to collections which return compact representation, `opt_fields` can be used to include more data than is returned in the compact representation. See the [getting started guide on input/output options](https://developers.asana.com/docs/#input-output-options) for more information.
    **/
    getCustomFieldSettingsForProject(req: operations.GetCustomFieldSettingsForProjectRequest, config?: AxiosRequestConfig): Promise<operations.GetCustomFieldSettingsForProjectResponse>;
}
