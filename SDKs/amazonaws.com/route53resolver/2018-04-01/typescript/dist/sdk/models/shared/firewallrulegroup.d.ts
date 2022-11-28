import { SpeakeasyBase } from "../../../internal/utils";
import { ShareStatusEnum } from "./sharestatusenum";
import { FirewallRuleGroupStatusEnum } from "./firewallrulegroupstatusenum";
/**
 * High-level information for a firewall rule group. A firewall rule group is a collection of rules that DNS Firewall uses to filter DNS network traffic for a VPC. To retrieve the rules for the rule group, call <a>ListFirewallRules</a>.
**/
export declare class FirewallRuleGroup extends SpeakeasyBase {
    arn?: string;
    creationTime?: string;
    creatorRequestId?: string;
    id?: string;
    modificationTime?: string;
    name?: string;
    ownerId?: string;
    ruleCount?: number;
    shareStatus?: ShareStatusEnum;
    status?: FirewallRuleGroupStatusEnum;
    statusMessage?: string;
}
