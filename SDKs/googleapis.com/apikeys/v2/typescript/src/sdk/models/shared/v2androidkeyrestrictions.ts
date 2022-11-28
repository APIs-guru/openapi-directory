import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { V2AndroidApplication } from "./v2androidapplication";



// V2AndroidKeyRestrictions
/** 
 * The Android apps that are allowed to use the key.
**/
export class V2AndroidKeyRestrictions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowedApplications", elemType: V2AndroidApplication })
  allowedApplications?: V2AndroidApplication[];
}
