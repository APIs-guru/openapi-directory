import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ExternallyHostedApkUsesPermission
/** 
 * A permission used by this APK.
**/
export class ExternallyHostedApkUsesPermission extends SpeakeasyBase {
  @Metadata({ data: "json, name=maxSdkVersion" })
  maxSdkVersion?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
