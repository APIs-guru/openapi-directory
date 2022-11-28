import { SpeakeasyBase } from "../../../internal/utils";
import { FirewallRule } from "./firewallrule";
/**
 * Request message for Firewall.BatchUpdateIngressRules.
**/
export declare class BatchUpdateIngressRulesRequest extends SpeakeasyBase {
    ingressRules?: FirewallRule[];
}
