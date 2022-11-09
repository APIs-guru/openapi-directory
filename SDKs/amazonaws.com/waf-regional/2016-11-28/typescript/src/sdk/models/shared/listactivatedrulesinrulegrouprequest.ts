import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListActivatedRulesInRuleGroupRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Limit" })
  limit?: number;

  @Metadata({ data: "json, name=NextMarker" })
  nextMarker?: string;

  @Metadata({ data: "json, name=RuleGroupId" })
  ruleGroupId?: string;
}
