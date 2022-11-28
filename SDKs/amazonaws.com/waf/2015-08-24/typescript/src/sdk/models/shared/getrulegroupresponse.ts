import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RuleGroup } from "./rulegroup";



export class GetRuleGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=RuleGroup" })
  ruleGroup?: RuleGroup;
}
