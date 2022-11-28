import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Internalappsharingartifacts {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * androidpublisherInternalappsharingartifactsUploadapk - Uploads an APK to internal app sharing. If you are using the Google API client libraries, please increase the timeout of the http request before calling this endpoint (a timeout of 2 minutes is recommended). See [Timeouts and Errors](https://developers.google.com/api-client-library/java/google-api-java-client/errors) for an example in java.
    **/
    androidpublisherInternalappsharingartifactsUploadapk(req: operations.AndroidpublisherInternalappsharingartifactsUploadapkRequest, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherInternalappsharingartifactsUploadapkResponse>;
    /**
     * androidpublisherInternalappsharingartifactsUploadbundle - Uploads an app bundle to internal app sharing. If you are using the Google API client libraries, please increase the timeout of the http request before calling this endpoint (a timeout of 2 minutes is recommended). See [Timeouts and Errors](https://developers.google.com/api-client-library/java/google-api-java-client/errors) for an example in java.
    **/
    androidpublisherInternalappsharingartifactsUploadbundle(req: operations.AndroidpublisherInternalappsharingartifactsUploadbundleRequest, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherInternalappsharingartifactsUploadbundleResponse>;
}
