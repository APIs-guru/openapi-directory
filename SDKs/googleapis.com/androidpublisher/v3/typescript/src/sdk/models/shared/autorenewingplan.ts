import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AutoRenewingPlan
/** 
 * Information related to an auto renewing plan.
**/
export class AutoRenewingPlan extends SpeakeasyBase {
  @Metadata({ data: "json, name=autoRenewEnabled" })
  autoRenewEnabled?: boolean;
}
