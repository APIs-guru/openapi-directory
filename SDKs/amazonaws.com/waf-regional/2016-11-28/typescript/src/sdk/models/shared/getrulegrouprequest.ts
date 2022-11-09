import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetRuleGroupRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=RuleGroupId" })
  ruleGroupId: string;
}
