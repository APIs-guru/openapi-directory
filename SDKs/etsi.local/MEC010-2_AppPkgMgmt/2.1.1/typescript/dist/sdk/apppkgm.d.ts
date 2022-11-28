import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class AppPkgm {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * appDget - Reads the content of the AppD of on-boarded individual application package resources.
     *
     * Reads the content of the AppD of on-boarded individual application package resources.
    **/
    appDget(req: operations.AppDgetRequest, config?: AxiosRequestConfig): Promise<operations.AppDgetResponse>;
    /**
     * appDIdGet - Fetch the onboarded application package content identified by appPkgId or appDId.
     *
     * Fetch the onboarded application package content identified by appPkgId or appDId.
    **/
    appDIdGet(req: operations.AppDIdGetRequest, config?: AxiosRequestConfig): Promise<operations.AppDIdGetResponse>;
    /**
     * appDIdPut - Uploads the content of application package.
     *
     * Uploads the content of application package.
    **/
    appDIdPut(req: operations.AppDIdPutRequest, config?: AxiosRequestConfig): Promise<operations.AppDIdPutResponse>;
    /**
     * appPkgGet - Fetch the onboarded application package content identified by appPkgId or appDId.
     *
     * Fetch the onboarded application package content identified by appPkgId or appDId.
    **/
    appPkgGet(req: operations.AppPkgGetRequest, config?: AxiosRequestConfig): Promise<operations.AppPkgGetResponse>;
    /**
     * appPkgIdGet - Reads the content of the AppD of on-boarded individual application package resources.
     *
     * Reads the content of the AppD of on-boarded individual application package resources.
    **/
    appPkgIdGet(req: operations.AppPkgIdGetRequest, config?: AxiosRequestConfig): Promise<operations.AppPkgIdGetResponse>;
    /**
     * appPkgPut - Uploads the content of application package.
     *
     * Uploads the content of application package.
    **/
    appPkgPut(req: operations.AppPkgPutRequest, config?: AxiosRequestConfig): Promise<operations.AppPkgPutResponse>;
    /**
     * appPackageDelete - Deletes an individual application package resources
     *
     * Deletes an individual application package resources
    **/
    appPackageDelete(req: operations.AppPackageDeleteRequest, config?: AxiosRequestConfig): Promise<operations.AppPackageDeleteResponse>;
    /**
     * appPackageGet - Queries the information related to individual application package resources
     *
     * Queries the information related to individual application package resources
    **/
    appPackageGet(req: operations.AppPackageGetRequest, config?: AxiosRequestConfig): Promise<operations.AppPackageGetResponse>;
    /**
     * appPackagePatch - Updates the operational state of an individual application package resource
     *
     * Updates the operational state of an individual application package resources
    **/
    appPackagePatch(req: operations.AppPackagePatchRequest, config?: AxiosRequestConfig): Promise<operations.AppPackagePatchResponse>;
    /**
     * appPackagesGet - Queries information relating to on-boarded application packages in the MEO
     *
     * queries information relating to on-boarded application packages in the MEO
    **/
    appPackagesGet(req: operations.AppPackagesGetRequest, config?: AxiosRequestConfig): Promise<operations.AppPackagesGetResponse>;
    /**
     * appPackagesPost - Create a resource for on-boarding an application package to a MEO
     *
     * Create a resource for on-boarding an application package to a MEO
    **/
    appPackagesPost(req: operations.AppPackagesPostRequest, config?: AxiosRequestConfig): Promise<operations.AppPackagesPostResponse>;
    /**
     * individualSubscriptionDelete - Deletes the individual subscription to notifications about application package changes in MEO.
     *
     * Deletes the individual subscription to notifications about application package changes in MEO.
    **/
    individualSubscriptionDelete(req: operations.IndividualSubscriptionDeleteRequest, config?: AxiosRequestConfig): Promise<operations.IndividualSubscriptionDeleteResponse>;
    /**
     * individualSubscriptionGet - Used to represent an individual subscription to notifications about application package changes.
     *
     * Used to represent an individual subscription to notifications about application package changes.
    **/
    individualSubscriptionGet(req: operations.IndividualSubscriptionGetRequest, config?: AxiosRequestConfig): Promise<operations.IndividualSubscriptionGetResponse>;
    /**
     * subscriptionsGet - used to retrieve the information of subscriptions to individual application package resource in MEO
     *
     * used to retrieve the information of subscriptions to individual application package resource in MEO package
    **/
    subscriptionsGet(config?: AxiosRequestConfig): Promise<operations.SubscriptionsGetResponse>;
}
