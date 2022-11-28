import { SpeakeasyBase } from "../../../internal/utils";
import { FirewallRule } from "./firewallrule";
/**
 * Response message for Firewall.ListIngressRules.
**/
export declare class ListIngressRulesResponse extends SpeakeasyBase {
    ingressRules?: FirewallRule[];
    nextPageToken?: string;
}
