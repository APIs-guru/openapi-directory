import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ExternallyHostedApk } from "./externallyhostedapk";


// ApksAddExternallyHostedResponse
/** 
 * Response for creating a new externally hosted APK.
**/
export class ApksAddExternallyHostedResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=externallyHostedApk" })
  externallyHostedApk?: ExternallyHostedApk;
}
