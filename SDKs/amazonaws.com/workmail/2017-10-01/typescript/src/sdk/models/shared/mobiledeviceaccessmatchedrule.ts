import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MobileDeviceAccessMatchedRule
/** 
 * The rule that a simulated user matches.
**/
export class MobileDeviceAccessMatchedRule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MobileDeviceAccessRuleId" })
  mobileDeviceAccessRuleId?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;
}
