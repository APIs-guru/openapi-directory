import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RuleGroupSummary } from "./rulegroupsummary";



export class ListRuleGroupsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextMarker" })
  nextMarker?: string;

  @SpeakeasyMetadata({ data: "json, name=RuleGroups", elemType: RuleGroupSummary })
  ruleGroups?: RuleGroupSummary[];
}
