import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// MobileDeviceAccessMatchedRule
/** 
 * The rule that a simulated user matches.
**/
export class MobileDeviceAccessMatchedRule extends SpeakeasyBase {
  @Metadata({ data: "json, name=MobileDeviceAccessRuleId" })
  mobileDeviceAccessRuleId?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;
}
