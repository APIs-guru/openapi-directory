import { SpeakeasyBase } from "../../../internal/utils";
import { FirewallRuleGroupMetadata } from "./firewallrulegroupmetadata";
export declare class ListFirewallRuleGroupsResponse extends SpeakeasyBase {
    firewallRuleGroups?: FirewallRuleGroupMetadata[];
    nextToken?: string;
}
