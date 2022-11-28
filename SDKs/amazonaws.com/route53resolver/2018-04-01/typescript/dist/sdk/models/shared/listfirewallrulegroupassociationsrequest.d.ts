import { SpeakeasyBase } from "../../../internal/utils";
import { FirewallRuleGroupAssociationStatusEnum } from "./firewallrulegroupassociationstatusenum";
export declare class ListFirewallRuleGroupAssociationsRequest extends SpeakeasyBase {
    firewallRuleGroupId?: string;
    maxResults?: number;
    nextToken?: string;
    priority?: number;
    status?: FirewallRuleGroupAssociationStatusEnum;
    vpcId?: string;
}
