import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FirewallRuleGroupMetadata } from "./firewallrulegroupmetadata";



export class ListFirewallRuleGroupsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FirewallRuleGroups", elemType: FirewallRuleGroupMetadata })
  firewallRuleGroups?: FirewallRuleGroupMetadata[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
