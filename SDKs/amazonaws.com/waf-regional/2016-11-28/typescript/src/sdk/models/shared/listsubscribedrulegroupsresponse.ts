import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SubscribedRuleGroupSummary } from "./subscribedrulegroupsummary";



export class ListSubscribedRuleGroupsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextMarker" })
  nextMarker?: string;

  @SpeakeasyMetadata({ data: "json, name=RuleGroups", elemType: SubscribedRuleGroupSummary })
  ruleGroups?: SubscribedRuleGroupSummary[];
}
