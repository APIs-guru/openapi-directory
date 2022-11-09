import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// IpRuleItem
/** 
 * Describes a rule for an IP access control group.
**/
export class IpRuleItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=ipRule" })
  ipRule?: string;

  @Metadata({ data: "json, name=ruleDesc" })
  ruleDesc?: string;
}
