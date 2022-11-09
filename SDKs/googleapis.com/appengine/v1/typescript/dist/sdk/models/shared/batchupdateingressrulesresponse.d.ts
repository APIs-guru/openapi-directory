import { SpeakeasyBase } from "../../../internal/utils/utils";
import { FirewallRule } from "./firewallrule";
/**
 * Response message for Firewall.UpdateAllIngressRules.
**/
export declare class BatchUpdateIngressRulesResponse extends SpeakeasyBase {
    ingressRules?: FirewallRule[];
}
