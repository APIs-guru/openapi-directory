import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RuleGroupSummary } from "./rulegroupsummary";


export class ListRuleGroupsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextMarker" })
  nextMarker?: string;

  @Metadata({ data: "json, name=RuleGroups", elemType: shared.RuleGroupSummary })
  ruleGroups?: RuleGroupSummary[];
}
