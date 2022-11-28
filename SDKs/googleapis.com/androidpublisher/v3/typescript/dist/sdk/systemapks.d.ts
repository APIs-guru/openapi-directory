import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Systemapks {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * androidpublisherSystemapksVariantsCreate - Creates an APK which is suitable for inclusion in a system image from an already uploaded Android App Bundle.
    **/
    androidpublisherSystemapksVariantsCreate(req: operations.AndroidpublisherSystemapksVariantsCreateRequest, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherSystemapksVariantsCreateResponse>;
    /**
     * androidpublisherSystemapksVariantsDownload - Downloads a previously created system APK which is suitable for inclusion in a system image.
    **/
    androidpublisherSystemapksVariantsDownload(req: operations.AndroidpublisherSystemapksVariantsDownloadRequest, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherSystemapksVariantsDownloadResponse>;
    /**
     * androidpublisherSystemapksVariantsGet - Returns a previously created system APK variant.
    **/
    androidpublisherSystemapksVariantsGet(req: operations.AndroidpublisherSystemapksVariantsGetRequest, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherSystemapksVariantsGetResponse>;
    /**
     * androidpublisherSystemapksVariantsList - Returns the list of previously created system APK variants.
    **/
    androidpublisherSystemapksVariantsList(req: operations.AndroidpublisherSystemapksVariantsListRequest, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherSystemapksVariantsListResponse>;
}
