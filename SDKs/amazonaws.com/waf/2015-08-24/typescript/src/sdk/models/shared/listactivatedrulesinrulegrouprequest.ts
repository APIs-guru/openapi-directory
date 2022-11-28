import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListActivatedRulesInRuleGroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "json, name=NextMarker" })
  nextMarker?: string;

  @SpeakeasyMetadata({ data: "json, name=RuleGroupId" })
  ruleGroupId?: string;
}
