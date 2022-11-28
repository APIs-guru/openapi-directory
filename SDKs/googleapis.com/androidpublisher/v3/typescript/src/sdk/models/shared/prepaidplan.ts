import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PrepaidPlan
/** 
 * Information related to a prepaid plan.
**/
export class PrepaidPlan extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowExtendAfterTime" })
  allowExtendAfterTime?: string;
}
