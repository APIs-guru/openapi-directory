import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ExternallyHostedApk } from "./externallyhostedapk";



// ApksAddExternallyHostedResponse
/** 
 * Response for creating a new externally hosted APK.
**/
export class ApksAddExternallyHostedResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=externallyHostedApk" })
  externallyHostedApk?: ExternallyHostedApk;
}
