import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ExternallyHostedApk } from "./externallyhostedapk";


// ApksAddExternallyHostedRequest
/** 
 * Request to create a new externally hosted APK.
**/
export class ApksAddExternallyHostedRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=externallyHostedApk" })
  externallyHostedApk?: ExternallyHostedApk;
}
