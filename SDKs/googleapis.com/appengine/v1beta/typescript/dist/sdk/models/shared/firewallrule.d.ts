import { SpeakeasyBase } from "../../../internal/utils";
export declare enum FirewallRuleActionEnum {
    UnspecifiedAction = "UNSPECIFIED_ACTION",
    Allow = "ALLOW",
    Deny = "DENY"
}
/**
 * A single firewall rule that is evaluated against incoming traffic and provides an action to take on matched requests.
**/
export declare class FirewallRule extends SpeakeasyBase {
    action?: FirewallRuleActionEnum;
    description?: string;
    priority?: number;
    sourceRange?: string;
}
