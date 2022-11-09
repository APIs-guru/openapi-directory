import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AppManualAppInfo
/** 
 * Information provided for manual apps which are not linked to an application store (Example: Google Play, App Store).
**/
export class AppManualAppInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayName" })
  displayName?: string;
}
