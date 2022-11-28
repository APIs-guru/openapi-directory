import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AppManualAppInfo
/** 
 * Information provided for manual apps which are not linked to an application store (Example: Google Play, App Store).
**/
export class AppManualAppInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;
}
