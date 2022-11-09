import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ExternallyHostedApkUsesPermission } from "./externallyhostedapkusespermission";


// ExternallyHostedApk
/** 
 * Defines an APK available for this application that is hosted externally and not uploaded to Google Play. This function is only available to enterprises who are using Google Play for Work, and whos application is restricted to the enterprise private channel
**/
export class ExternallyHostedApk extends SpeakeasyBase {
  @Metadata({ data: "json, name=applicationLabel" })
  applicationLabel?: string;

  @Metadata({ data: "json, name=certificateBase64s" })
  certificateBase64s?: string[];

  @Metadata({ data: "json, name=externallyHostedUrl" })
  externallyHostedUrl?: string;

  @Metadata({ data: "json, name=fileSha1Base64" })
  fileSha1Base64?: string;

  @Metadata({ data: "json, name=fileSha256Base64" })
  fileSha256Base64?: string;

  @Metadata({ data: "json, name=fileSize" })
  fileSize?: string;

  @Metadata({ data: "json, name=iconBase64" })
  iconBase64?: string;

  @Metadata({ data: "json, name=maximumSdk" })
  maximumSdk?: number;

  @Metadata({ data: "json, name=minimumSdk" })
  minimumSdk?: number;

  @Metadata({ data: "json, name=nativeCodes" })
  nativeCodes?: string[];

  @Metadata({ data: "json, name=packageName" })
  packageName?: string;

  @Metadata({ data: "json, name=usesFeatures" })
  usesFeatures?: string[];

  @Metadata({ data: "json, name=usesPermissions", elemType: shared.ExternallyHostedApkUsesPermission })
  usesPermissions?: ExternallyHostedApkUsesPermission[];

  @Metadata({ data: "json, name=versionCode" })
  versionCode?: number;

  @Metadata({ data: "json, name=versionName" })
  versionName?: string;
}
