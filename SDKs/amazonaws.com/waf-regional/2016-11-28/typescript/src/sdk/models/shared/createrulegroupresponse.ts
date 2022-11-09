import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RuleGroup } from "./rulegroup";


export class CreateRuleGroupResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ChangeToken" })
  changeToken?: string;

  @Metadata({ data: "json, name=RuleGroup" })
  ruleGroup?: RuleGroup;
}
