import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PrepaidPlan
/** 
 * Information related to a prepaid plan.
**/
export class PrepaidPlan extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowExtendAfterTime" })
  allowExtendAfterTime?: string;
}
