import { SpeakeasyBase } from "../../../internal/utils";
import { ExternallyHostedApkUsesPermission } from "./externallyhostedapkusespermission";
/**
 * Defines an APK available for this application that is hosted externally and not uploaded to Google Play. This function is only available to enterprises who are using Google Play for Work, and whos application is restricted to the enterprise private channel
**/
export declare class ExternallyHostedApk extends SpeakeasyBase {
    applicationLabel?: string;
    certificateBase64s?: string[];
    externallyHostedUrl?: string;
    fileSha1Base64?: string;
    fileSha256Base64?: string;
    fileSize?: string;
    iconBase64?: string;
    maximumSdk?: number;
    minimumSdk?: number;
    nativeCodes?: string[];
    packageName?: string;
    usesFeatures?: string[];
    usesPermissions?: ExternallyHostedApkUsesPermission[];
    versionCode?: number;
    versionName?: string;
}
