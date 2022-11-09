import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RuleGroupMetadata } from "./rulegroupmetadata";


export class ListRuleGroupsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=RuleGroups", elemType: shared.RuleGroupMetadata })
  ruleGroups?: RuleGroupMetadata[];
}
