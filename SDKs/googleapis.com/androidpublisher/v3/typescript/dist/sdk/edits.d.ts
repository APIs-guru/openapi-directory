import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Edits {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * androidpublisherEditsApksAddexternallyhosted - Creates a new APK without uploading the APK itself to Google Play, instead hosting the APK at a specified URL. This function is only available to organizations using Managed Play whose application is configured to restrict distribution to the organizations.
    **/
    androidpublisherEditsApksAddexternallyhosted(req: operations.AndroidpublisherEditsApksAddexternallyhostedRequest, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsApksAddexternallyhostedResponse>;
    /**
     * androidpublisherEditsApksList - Lists all current APKs of the app and edit.
    **/
    androidpublisherEditsApksList(req: operations.AndroidpublisherEditsApksListRequest, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsApksListResponse>;
    /**
     * androidpublisherEditsApksUpload - Uploads an APK and adds to the current edit.
    **/
    androidpublisherEditsApksUpload(req: operations.AndroidpublisherEditsApksUploadRequest, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsApksUploadResponse>;
    /**
     * androidpublisherEditsBundlesList - Lists all current Android App Bundles of the app and edit.
    **/
    androidpublisherEditsBundlesList(req: operations.AndroidpublisherEditsBundlesListRequest, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsBundlesListResponse>;
    /**
     * androidpublisherEditsBundlesUpload - Uploads a new Android App Bundle to this edit. If you are using the Google API client libraries, please increase the timeout of the http request before calling this endpoint (a timeout of 2 minutes is recommended). See [Timeouts and Errors](https://developers.google.com/api-client-library/java/google-api-java-client/errors) for an example in java.
    **/
    androidpublisherEditsBundlesUpload(req: operations.AndroidpublisherEditsBundlesUploadRequest, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsBundlesUploadResponse>;
    /**
     * androidpublisherEditsCommit - Commits an app edit.
    **/
    androidpublisherEditsCommit(req: operations.AndroidpublisherEditsCommitRequest, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsCommitResponse>;
    /**
     * androidpublisherEditsCountryavailabilityGet - Gets country availability.
    **/
    androidpublisherEditsCountryavailabilityGet(req: operations.AndroidpublisherEditsCountryavailabilityGetRequest, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsCountryavailabilityGetResponse>;
    /**
     * androidpublisherEditsDelete - Deletes an app edit.
    **/
    androidpublisherEditsDelete(req: operations.AndroidpublisherEditsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsDeleteResponse>;
    /**
     * androidpublisherEditsDeobfuscationfilesUpload - Uploads a new deobfuscation file and attaches to the specified APK.
    **/
    androidpublisherEditsDeobfuscationfilesUpload(req: operations.AndroidpublisherEditsDeobfuscationfilesUploadRequest, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsDeobfuscationfilesUploadResponse>;
    /**
     * androidpublisherEditsDetailsGet - Gets details of an app.
    **/
    androidpublisherEditsDetailsGet(req: operations.AndroidpublisherEditsDetailsGetRequest, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsDetailsGetResponse>;
    /**
     * androidpublisherEditsDetailsPatch - Patches details of an app.
    **/
    androidpublisherEditsDetailsPatch(req: operations.AndroidpublisherEditsDetailsPatchRequest, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsDetailsPatchResponse>;
    /**
     * androidpublisherEditsDetailsUpdate - Updates details of an app.
    **/
    androidpublisherEditsDetailsUpdate(req: operations.AndroidpublisherEditsDetailsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsDetailsUpdateResponse>;
    /**
     * androidpublisherEditsExpansionfilesGet - Fetches the expansion file configuration for the specified APK.
    **/
    androidpublisherEditsExpansionfilesGet(req: operations.AndroidpublisherEditsExpansionfilesGetRequest, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsExpansionfilesGetResponse>;
    /**
     * androidpublisherEditsExpansionfilesPatch - Patches the APK's expansion file configuration to reference another APK's expansion file. To add a new expansion file use the Upload method.
    **/
    androidpublisherEditsExpansionfilesPatch(req: operations.AndroidpublisherEditsExpansionfilesPatchRequest, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsExpansionfilesPatchResponse>;
    /**
     * androidpublisherEditsExpansionfilesUpdate - Updates the APK's expansion file configuration to reference another APK's expansion file. To add a new expansion file use the Upload method.
    **/
    androidpublisherEditsExpansionfilesUpdate(req: operations.AndroidpublisherEditsExpansionfilesUpdateRequest, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsExpansionfilesUpdateResponse>;
    /**
     * androidpublisherEditsExpansionfilesUpload - Uploads a new expansion file and attaches to the specified APK.
    **/
    androidpublisherEditsExpansionfilesUpload(req: operations.AndroidpublisherEditsExpansionfilesUploadRequest, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsExpansionfilesUploadResponse>;
    /**
     * androidpublisherEditsGet - Gets an app edit.
    **/
    androidpublisherEditsGet(req: operations.AndroidpublisherEditsGetRequest, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsGetResponse>;
    /**
     * androidpublisherEditsImagesDelete - Deletes the image (specified by id) from the edit.
    **/
    androidpublisherEditsImagesDelete(req: operations.AndroidpublisherEditsImagesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsImagesDeleteResponse>;
    /**
     * androidpublisherEditsImagesDeleteall - Deletes all images for the specified language and image type. Returns an empty response if no images are found.
    **/
    androidpublisherEditsImagesDeleteall(req: operations.AndroidpublisherEditsImagesDeleteallRequest, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsImagesDeleteallResponse>;
    /**
     * androidpublisherEditsImagesList - Lists all images. The response may be empty.
    **/
    androidpublisherEditsImagesList(req: operations.AndroidpublisherEditsImagesListRequest, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsImagesListResponse>;
    /**
     * androidpublisherEditsImagesUpload - Uploads an image of the specified language and image type, and adds to the edit.
    **/
    androidpublisherEditsImagesUpload(req: operations.AndroidpublisherEditsImagesUploadRequest, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsImagesUploadResponse>;
    /**
     * androidpublisherEditsInsert - Creates a new edit for an app.
    **/
    androidpublisherEditsInsert(req: operations.AndroidpublisherEditsInsertRequest, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsInsertResponse>;
    /**
     * androidpublisherEditsListingsDelete - Deletes a localized store listing.
    **/
    androidpublisherEditsListingsDelete(req: operations.AndroidpublisherEditsListingsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsListingsDeleteResponse>;
    /**
     * androidpublisherEditsListingsDeleteall - Deletes all store listings.
    **/
    androidpublisherEditsListingsDeleteall(req: operations.AndroidpublisherEditsListingsDeleteallRequest, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsListingsDeleteallResponse>;
    /**
     * androidpublisherEditsListingsGet - Gets a localized store listing.
    **/
    androidpublisherEditsListingsGet(req: operations.AndroidpublisherEditsListingsGetRequest, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsListingsGetResponse>;
    /**
     * androidpublisherEditsListingsList - Lists all localized store listings.
    **/
    androidpublisherEditsListingsList(req: operations.AndroidpublisherEditsListingsListRequest, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsListingsListResponse>;
    /**
     * androidpublisherEditsListingsPatch - Patches a localized store listing.
    **/
    androidpublisherEditsListingsPatch(req: operations.AndroidpublisherEditsListingsPatchRequest, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsListingsPatchResponse>;
    /**
     * androidpublisherEditsListingsUpdate - Creates or updates a localized store listing.
    **/
    androidpublisherEditsListingsUpdate(req: operations.AndroidpublisherEditsListingsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsListingsUpdateResponse>;
    /**
     * androidpublisherEditsTestersGet - Gets testers. Note: Testers resource does not support email lists.
    **/
    androidpublisherEditsTestersGet(req: operations.AndroidpublisherEditsTestersGetRequest, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsTestersGetResponse>;
    /**
     * androidpublisherEditsTestersPatch - Patches testers. Note: Testers resource does not support email lists.
    **/
    androidpublisherEditsTestersPatch(req: operations.AndroidpublisherEditsTestersPatchRequest, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsTestersPatchResponse>;
    /**
     * androidpublisherEditsTestersUpdate - Updates testers. Note: Testers resource does not support email lists.
    **/
    androidpublisherEditsTestersUpdate(req: operations.AndroidpublisherEditsTestersUpdateRequest, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsTestersUpdateResponse>;
    /**
     * androidpublisherEditsTracksGet - Gets a track.
    **/
    androidpublisherEditsTracksGet(req: operations.AndroidpublisherEditsTracksGetRequest, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsTracksGetResponse>;
    /**
     * androidpublisherEditsTracksList - Lists all tracks.
    **/
    androidpublisherEditsTracksList(req: operations.AndroidpublisherEditsTracksListRequest, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsTracksListResponse>;
    /**
     * androidpublisherEditsTracksPatch - Patches a track.
    **/
    androidpublisherEditsTracksPatch(req: operations.AndroidpublisherEditsTracksPatchRequest, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsTracksPatchResponse>;
    /**
     * androidpublisherEditsTracksUpdate - Updates a track.
    **/
    androidpublisherEditsTracksUpdate(req: operations.AndroidpublisherEditsTracksUpdateRequest, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsTracksUpdateResponse>;
    /**
     * androidpublisherEditsValidate - Validates an app edit.
    **/
    androidpublisherEditsValidate(req: operations.AndroidpublisherEditsValidateRequest, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsValidateResponse>;
}
