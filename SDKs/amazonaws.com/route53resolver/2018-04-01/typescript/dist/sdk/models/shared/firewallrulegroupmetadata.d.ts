import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ShareStatusEnum } from "./sharestatusenum";
/**
 * <p>Minimal high-level information for a firewall rule group. The action <a>ListFirewallRuleGroups</a> returns an array of these objects. </p> <p>To retrieve full information for a firewall rule group, call <a>GetFirewallRuleGroup</a> and <a>ListFirewallRules</a>.</p>
**/
export declare class FirewallRuleGroupMetadata extends SpeakeasyBase {
    arn?: string;
    creatorRequestId?: string;
    id?: string;
    name?: string;
    ownerId?: string;
    shareStatus?: ShareStatusEnum;
}
