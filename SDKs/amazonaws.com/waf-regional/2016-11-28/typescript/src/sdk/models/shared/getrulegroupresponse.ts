import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RuleGroup } from "./rulegroup";


export class GetRuleGroupResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=RuleGroup" })
  ruleGroup?: RuleGroup;
}
