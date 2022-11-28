import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetRuleGroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=RuleGroupId" })
  ruleGroupId: string;
}
