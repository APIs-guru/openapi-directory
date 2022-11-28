import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ExternallyHostedApkUsesPermission } from "./externallyhostedapkusespermission";



// ExternallyHostedApk
/** 
 * Defines an APK available for this application that is hosted externally and not uploaded to Google Play. This function is only available to enterprises who are using Google Play for Work, and whos application is restricted to the enterprise private channel
**/
export class ExternallyHostedApk extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=applicationLabel" })
  applicationLabel?: string;

  @SpeakeasyMetadata({ data: "json, name=certificateBase64s" })
  certificateBase64s?: string[];

  @SpeakeasyMetadata({ data: "json, name=externallyHostedUrl" })
  externallyHostedUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=fileSha1Base64" })
  fileSha1Base64?: string;

  @SpeakeasyMetadata({ data: "json, name=fileSha256Base64" })
  fileSha256Base64?: string;

  @SpeakeasyMetadata({ data: "json, name=fileSize" })
  fileSize?: string;

  @SpeakeasyMetadata({ data: "json, name=iconBase64" })
  iconBase64?: string;

  @SpeakeasyMetadata({ data: "json, name=maximumSdk" })
  maximumSdk?: number;

  @SpeakeasyMetadata({ data: "json, name=minimumSdk" })
  minimumSdk?: number;

  @SpeakeasyMetadata({ data: "json, name=nativeCodes" })
  nativeCodes?: string[];

  @SpeakeasyMetadata({ data: "json, name=packageName" })
  packageName?: string;

  @SpeakeasyMetadata({ data: "json, name=usesFeatures" })
  usesFeatures?: string[];

  @SpeakeasyMetadata({ data: "json, name=usesPermissions", elemType: ExternallyHostedApkUsesPermission })
  usesPermissions?: ExternallyHostedApkUsesPermission[];

  @SpeakeasyMetadata({ data: "json, name=versionCode" })
  versionCode?: number;

  @SpeakeasyMetadata({ data: "json, name=versionName" })
  versionName?: string;
}
