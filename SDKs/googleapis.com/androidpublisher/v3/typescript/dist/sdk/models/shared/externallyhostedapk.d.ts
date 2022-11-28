import { SpeakeasyBase } from "../../../internal/utils";
import { UsesPermission } from "./usespermission";
/**
 * Defines an APK available for this application that is hosted externally and not uploaded to Google Play. This function is only available to organizations using Managed Play whose application is configured to restrict distribution to the organizations.
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
    usesPermissions?: UsesPermission[];
    versionCode?: number;
    versionName?: string;
}
