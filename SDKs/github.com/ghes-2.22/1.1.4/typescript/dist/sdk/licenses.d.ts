import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Licenses {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * licensesGet - Get a license
     *
     * https://docs.github.com/enterprise-server@2.22/rest/reference/licenses#get-a-license - API method documentation
    **/
    licensesGet(req: operations.LicensesGetRequest, config?: AxiosRequestConfig): Promise<operations.LicensesGetResponse>;
    /**
     * licensesGetAllCommonlyUsed - Get all commonly used licenses
     *
     * https://docs.github.com/enterprise-server@2.22/rest/reference/licenses#get-all-commonly-used-licenses - API method documentation
    **/
    licensesGetAllCommonlyUsed(req: operations.LicensesGetAllCommonlyUsedRequest, config?: AxiosRequestConfig): Promise<operations.LicensesGetAllCommonlyUsedResponse>;
    /**
     * licensesGetForRepo - Get the license for a repository
     *
     * This method returns the contents of the repository's license file, if one is detected.
     *
     * Similar to [Get repository content](https://docs.github.com/enterprise-server@2.22/rest/reference/repos#get-repository-content), this method also supports [custom media types](https://docs.github.com/enterprise-server@2.22/rest/overview/media-types) for retrieving the raw license content or rendered license HTML.
     *
     * https://docs.github.com/enterprise-server@2.22/rest/reference/licenses/#get-the-license-for-a-repository - API method documentation
    **/
    licensesGetForRepo(req: operations.LicensesGetForRepoRequest, config?: AxiosRequestConfig): Promise<operations.LicensesGetForRepoResponse>;
}
