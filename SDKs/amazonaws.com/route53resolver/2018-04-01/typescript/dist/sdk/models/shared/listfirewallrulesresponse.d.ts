import { SpeakeasyBase } from "../../../internal/utils";
import { FirewallRule } from "./firewallrule";
export declare class ListFirewallRulesResponse extends SpeakeasyBase {
    firewallRules?: FirewallRule[];
    nextToken?: string;
}
