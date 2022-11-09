import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SubscribedRuleGroupSummary } from "./subscribedrulegroupsummary";


export class ListSubscribedRuleGroupsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextMarker" })
  nextMarker?: string;

  @Metadata({ data: "json, name=RuleGroups", elemType: shared.SubscribedRuleGroupSummary })
  ruleGroups?: SubscribedRuleGroupSummary[];
}
