import { SpeakeasyBase } from "../../../internal/utils";
import { ActionEnum } from "./actionenum";
export declare class ListFirewallRulesRequest extends SpeakeasyBase {
    action?: ActionEnum;
    firewallRuleGroupId: string;
    maxResults?: number;
    nextToken?: string;
    priority?: number;
}
