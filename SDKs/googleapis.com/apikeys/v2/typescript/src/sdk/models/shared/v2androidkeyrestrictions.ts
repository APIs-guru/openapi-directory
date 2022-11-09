import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { V2AndroidApplication } from "./v2androidapplication";


// V2AndroidKeyRestrictions
/** 
 * The Android apps that are allowed to use the key.
**/
export class V2AndroidKeyRestrictions extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowedApplications", elemType: shared.V2AndroidApplication })
  allowedApplications?: V2AndroidApplication[];
}
