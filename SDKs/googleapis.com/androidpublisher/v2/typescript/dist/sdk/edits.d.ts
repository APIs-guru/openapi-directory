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
     * androidpublisherEditsApklistingsDelete - Deletes the APK-specific localized listing for a specified APK and language code.
    **/
    androidpublisherEditsApklistingsDelete(req: operations.AndroidpublisherEditsApklistingsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsApklistingsDeleteResponse>;
    /**
     * androidpublisherEditsApklistingsDeleteall - Deletes all the APK-specific localized listings for a specified APK.
    **/
    androidpublisherEditsApklistingsDeleteall(req: operations.AndroidpublisherEditsApklistingsDeleteallRequest, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsApklistingsDeleteallResponse>;
    /**
     * androidpublisherEditsApklistingsGet - Fetches the APK-specific localized listing for a specified APK and language code.
    **/
    androidpublisherEditsApklistingsGet(req: operations.AndroidpublisherEditsApklistingsGetRequest, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsApklistingsGetResponse>;
    /**
     * androidpublisherEditsApklistingsList - Lists all the APK-specific localized listings for a specified APK.
    **/
    androidpublisherEditsApklistingsList(req: operations.AndroidpublisherEditsApklistingsListRequest, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsApklistingsListResponse>;
    /**
     * androidpublisherEditsApklistingsPatch - Updates or creates the APK-specific localized listing for a specified APK and language code. This method supports patch semantics.
    **/
    androidpublisherEditsApklistingsPatch(req: operations.AndroidpublisherEditsApklistingsPatchRequest, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsApklistingsPatchResponse>;
    /**
     * androidpublisherEditsApklistingsUpdate - Updates or creates the APK-specific localized listing for a specified APK and language code.
    **/
    androidpublisherEditsApklistingsUpdate(req: operations.AndroidpublisherEditsApklistingsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsApklistingsUpdateResponse>;
    /**
     * androidpublisherEditsApksAddexternallyhosted - Creates a new APK without uploading the APK itself to Google Play, instead hosting the APK at a specified URL. This function is only available to enterprises using Google Play for Work whose application is configured to restrict distribution to the enterprise domain.
    **/
    androidpublisherEditsApksAddexternallyhosted(req: operations.AndroidpublisherEditsApksAddexternallyhostedRequest, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsApksAddexternallyhostedResponse>;
    androidpublisherEditsApksList(req: operations.AndroidpublisherEditsApksListRequest, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsApksListResponse>;
    androidpublisherEditsApksUpload(req: operations.AndroidpublisherEditsApksUploadRequest, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsApksUploadResponse>;
    androidpublisherEditsBundlesList(req: operations.AndroidpublisherEditsBundlesListRequest, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsBundlesListResponse>;
    /**
     * androidpublisherEditsBundlesUpload - Uploads a new Android App Bundle to this edit. If you are using the Google API client libraries, please increase the timeout of the http request before calling this endpoint (a timeout of 2 minutes is recommended). See: https://developers.google.com/api-client-library/java/google-api-java-client/errors for an example in java.
    **/
    androidpublisherEditsBundlesUpload(req: operations.AndroidpublisherEditsBundlesUploadRequest, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsBundlesUploadResponse>;
    /**
     * androidpublisherEditsCommit - Commits/applies the changes made in this edit back to the app.
    **/
    androidpublisherEditsCommit(req: operations.AndroidpublisherEditsCommitRequest, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsCommitResponse>;
    /**
     * androidpublisherEditsDelete - Deletes an edit for an app. Creating a new edit will automatically delete any of your previous edits so this method need only be called if you want to preemptively abandon an edit.
    **/
    androidpublisherEditsDelete(req: operations.AndroidpublisherEditsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsDeleteResponse>;
    /**
     * androidpublisherEditsDeobfuscationfilesUpload - Uploads the deobfuscation file of the specified APK. If a deobfuscation or symbolication file already exists, it will be replaced. See https://developer.android.com/studio/build/shrink-code to learn more about deobfuscation files.
    **/
    androidpublisherEditsDeobfuscationfilesUpload(req: operations.AndroidpublisherEditsDeobfuscationfilesUploadRequest, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsDeobfuscationfilesUploadResponse>;
    /**
     * androidpublisherEditsDetailsGet - Fetches app details for this edit. This includes the default language and developer support contact information.
    **/
    androidpublisherEditsDetailsGet(req: operations.AndroidpublisherEditsDetailsGetRequest, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsDetailsGetResponse>;
    /**
     * androidpublisherEditsDetailsPatch - Updates app details for this edit. This method supports patch semantics.
    **/
    androidpublisherEditsDetailsPatch(req: operations.AndroidpublisherEditsDetailsPatchRequest, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsDetailsPatchResponse>;
    /**
     * androidpublisherEditsDetailsUpdate - Updates app details for this edit.
    **/
    androidpublisherEditsDetailsUpdate(req: operations.AndroidpublisherEditsDetailsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsDetailsUpdateResponse>;
    /**
     * androidpublisherEditsExpansionfilesGet - Fetches the Expansion File configuration for the APK specified.
    **/
    androidpublisherEditsExpansionfilesGet(req: operations.AndroidpublisherEditsExpansionfilesGetRequest, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsExpansionfilesGetResponse>;
    /**
     * androidpublisherEditsExpansionfilesPatch - Updates the APK's Expansion File configuration to reference another APK's Expansion Files. To add a new Expansion File use the Upload method. This method supports patch semantics.
    **/
    androidpublisherEditsExpansionfilesPatch(req: operations.AndroidpublisherEditsExpansionfilesPatchRequest, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsExpansionfilesPatchResponse>;
    /**
     * androidpublisherEditsExpansionfilesUpdate - Updates the APK's Expansion File configuration to reference another APK's Expansion Files. To add a new Expansion File use the Upload method.
    **/
    androidpublisherEditsExpansionfilesUpdate(req: operations.AndroidpublisherEditsExpansionfilesUpdateRequest, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsExpansionfilesUpdateResponse>;
    /**
     * androidpublisherEditsExpansionfilesUpload - Uploads and attaches a new Expansion File to the APK specified.
    **/
    androidpublisherEditsExpansionfilesUpload(req: operations.AndroidpublisherEditsExpansionfilesUploadRequest, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsExpansionfilesUploadResponse>;
    /**
     * androidpublisherEditsGet - Returns information about the edit specified. Calls will fail if the edit is no long active (e.g. has been deleted, superseded or expired).
    **/
    androidpublisherEditsGet(req: operations.AndroidpublisherEditsGetRequest, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsGetResponse>;
    /**
     * androidpublisherEditsImagesDelete - Deletes the image (specified by id) from the edit.
    **/
    androidpublisherEditsImagesDelete(req: operations.AndroidpublisherEditsImagesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsImagesDeleteResponse>;
    /**
     * androidpublisherEditsImagesDeleteall - Deletes all images for the specified language and image type.
    **/
    androidpublisherEditsImagesDeleteall(req: operations.AndroidpublisherEditsImagesDeleteallRequest, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsImagesDeleteallResponse>;
    /**
     * androidpublisherEditsImagesList - Lists all images for the specified language and image type.
    **/
    androidpublisherEditsImagesList(req: operations.AndroidpublisherEditsImagesListRequest, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsImagesListResponse>;
    /**
     * androidpublisherEditsImagesUpload - Uploads a new image and adds it to the list of images for the specified language and image type.
    **/
    androidpublisherEditsImagesUpload(req: operations.AndroidpublisherEditsImagesUploadRequest, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsImagesUploadResponse>;
    /**
     * androidpublisherEditsInsert - Creates a new edit for an app, populated with the app's current state.
    **/
    androidpublisherEditsInsert(req: operations.AndroidpublisherEditsInsertRequest, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsInsertResponse>;
    /**
     * androidpublisherEditsListingsDelete - Deletes the specified localized store listing from an edit.
    **/
    androidpublisherEditsListingsDelete(req: operations.AndroidpublisherEditsListingsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsListingsDeleteResponse>;
    /**
     * androidpublisherEditsListingsDeleteall - Deletes all localized listings from an edit.
    **/
    androidpublisherEditsListingsDeleteall(req: operations.AndroidpublisherEditsListingsDeleteallRequest, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsListingsDeleteallResponse>;
    /**
     * androidpublisherEditsListingsGet - Fetches information about a localized store listing.
    **/
    androidpublisherEditsListingsGet(req: operations.AndroidpublisherEditsListingsGetRequest, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsListingsGetResponse>;
    /**
     * androidpublisherEditsListingsList - Returns all of the localized store listings attached to this edit.
    **/
    androidpublisherEditsListingsList(req: operations.AndroidpublisherEditsListingsListRequest, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsListingsListResponse>;
    /**
     * androidpublisherEditsListingsPatch - Creates or updates a localized store listing. This method supports patch semantics.
    **/
    androidpublisherEditsListingsPatch(req: operations.AndroidpublisherEditsListingsPatchRequest, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsListingsPatchResponse>;
    /**
     * androidpublisherEditsListingsUpdate - Creates or updates a localized store listing.
    **/
    androidpublisherEditsListingsUpdate(req: operations.AndroidpublisherEditsListingsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsListingsUpdateResponse>;
    androidpublisherEditsTestersGet(req: operations.AndroidpublisherEditsTestersGetRequest, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsTestersGetResponse>;
    androidpublisherEditsTestersPatch(req: operations.AndroidpublisherEditsTestersPatchRequest, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsTestersPatchResponse>;
    androidpublisherEditsTestersUpdate(req: operations.AndroidpublisherEditsTestersUpdateRequest, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsTestersUpdateResponse>;
    /**
     * androidpublisherEditsTracksGet - Fetches the track configuration for the specified track type. Includes the APK version codes that are in this track.
    **/
    androidpublisherEditsTracksGet(req: operations.AndroidpublisherEditsTracksGetRequest, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsTracksGetResponse>;
    /**
     * androidpublisherEditsTracksList - Lists all the track configurations for this edit.
    **/
    androidpublisherEditsTracksList(req: operations.AndroidpublisherEditsTracksListRequest, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsTracksListResponse>;
    /**
     * androidpublisherEditsTracksPatch - Updates the track configuration for the specified track type. This method supports patch semantics.
    **/
    androidpublisherEditsTracksPatch(req: operations.AndroidpublisherEditsTracksPatchRequest, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsTracksPatchResponse>;
    /**
     * androidpublisherEditsTracksUpdate - Updates the track configuration for the specified track type.
    **/
    androidpublisherEditsTracksUpdate(req: operations.AndroidpublisherEditsTracksUpdateRequest, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsTracksUpdateResponse>;
    /**
     * androidpublisherEditsValidate - Checks that the edit can be successfully committed. The edit's changes are not applied to the live app.
    **/
    androidpublisherEditsValidate(req: operations.AndroidpublisherEditsValidateRequest, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsValidateResponse>;
}
