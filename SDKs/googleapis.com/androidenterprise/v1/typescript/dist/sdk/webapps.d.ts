import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Webapps {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * androidenterpriseWebappsDelete - Deletes an existing web app.
    **/
    androidenterpriseWebappsDelete(req: operations.AndroidenterpriseWebappsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.AndroidenterpriseWebappsDeleteResponse>;
    /**
     * androidenterpriseWebappsGet - Gets an existing web app.
    **/
    androidenterpriseWebappsGet(req: operations.AndroidenterpriseWebappsGetRequest, config?: AxiosRequestConfig): Promise<operations.AndroidenterpriseWebappsGetResponse>;
    /**
     * androidenterpriseWebappsInsert - Creates a new web app for the enterprise.
    **/
    androidenterpriseWebappsInsert(req: operations.AndroidenterpriseWebappsInsertRequest, config?: AxiosRequestConfig): Promise<operations.AndroidenterpriseWebappsInsertResponse>;
    /**
     * androidenterpriseWebappsList - Retrieves the details of all web apps for a given enterprise.
    **/
    androidenterpriseWebappsList(req: operations.AndroidenterpriseWebappsListRequest, config?: AxiosRequestConfig): Promise<operations.AndroidenterpriseWebappsListResponse>;
    /**
     * androidenterpriseWebappsUpdate - Updates an existing web app.
    **/
    androidenterpriseWebappsUpdate(req: operations.AndroidenterpriseWebappsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.AndroidenterpriseWebappsUpdateResponse>;
}
