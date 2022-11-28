import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// IpRuleItem
/** 
 * Describes a rule for an IP access control group.
**/
export class IpRuleItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ipRule" })
  ipRule?: string;

  @SpeakeasyMetadata({ data: "json, name=ruleDesc" })
  ruleDesc?: string;
}
