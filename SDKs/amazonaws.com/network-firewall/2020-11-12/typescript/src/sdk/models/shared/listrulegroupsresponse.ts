import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RuleGroupMetadata } from "./rulegroupmetadata";



export class ListRuleGroupsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=RuleGroups", elemType: RuleGroupMetadata })
  ruleGroups?: RuleGroupMetadata[];
}
