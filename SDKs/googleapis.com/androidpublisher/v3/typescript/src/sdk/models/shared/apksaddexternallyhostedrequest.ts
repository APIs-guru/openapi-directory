import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ExternallyHostedApk } from "./externallyhostedapk";



// ApksAddExternallyHostedRequest
/** 
 * Request to create a new externally hosted APK.
**/
export class ApksAddExternallyHostedRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=externallyHostedApk" })
  externallyHostedApk?: ExternallyHostedApk;
}
