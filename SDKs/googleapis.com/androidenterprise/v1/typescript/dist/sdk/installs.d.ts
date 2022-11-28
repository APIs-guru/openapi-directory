import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Installs {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * androidenterpriseInstallsDelete - Requests to remove an app from a device. A call to get or list will still show the app as installed on the device until it is actually removed.
    **/
    androidenterpriseInstallsDelete(req: operations.AndroidenterpriseInstallsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.AndroidenterpriseInstallsDeleteResponse>;
    /**
     * androidenterpriseInstallsGet - Retrieves details of an installation of an app on a device.
    **/
    androidenterpriseInstallsGet(req: operations.AndroidenterpriseInstallsGetRequest, config?: AxiosRequestConfig): Promise<operations.AndroidenterpriseInstallsGetResponse>;
    /**
     * androidenterpriseInstallsList - Retrieves the details of all apps installed on the specified device.
    **/
    androidenterpriseInstallsList(req: operations.AndroidenterpriseInstallsListRequest, config?: AxiosRequestConfig): Promise<operations.AndroidenterpriseInstallsListResponse>;
    /**
     * androidenterpriseInstallsUpdate - Requests to install the latest version of an app to a device. If the app is already installed, then it is updated to the latest version if necessary.
    **/
    androidenterpriseInstallsUpdate(req: operations.AndroidenterpriseInstallsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.AndroidenterpriseInstallsUpdateResponse>;
}
