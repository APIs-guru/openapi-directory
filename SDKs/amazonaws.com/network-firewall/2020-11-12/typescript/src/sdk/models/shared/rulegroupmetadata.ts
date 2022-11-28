import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RuleGroupMetadata
/** 
 * High-level information about a rule group, returned by <a>ListRuleGroups</a>. You can use the information provided in the metadata to retrieve and manage a rule group.
**/
export class RuleGroupMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;
}
