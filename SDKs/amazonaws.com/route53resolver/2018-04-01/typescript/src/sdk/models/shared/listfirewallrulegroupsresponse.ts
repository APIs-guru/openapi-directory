import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FirewallRuleGroupMetadata } from "./firewallrulegroupmetadata";


export class ListFirewallRuleGroupsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=FirewallRuleGroups", elemType: shared.FirewallRuleGroupMetadata })
  firewallRuleGroups?: FirewallRuleGroupMetadata[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
