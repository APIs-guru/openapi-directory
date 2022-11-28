import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ExternallyHostedApkUsesPermission
/** 
 * A permission used by this APK.
**/
export class ExternallyHostedApkUsesPermission extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=maxSdkVersion" })
  maxSdkVersion?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
