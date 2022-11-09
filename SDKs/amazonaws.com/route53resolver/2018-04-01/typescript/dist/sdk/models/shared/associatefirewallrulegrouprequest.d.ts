import { SpeakeasyBase } from "../../../internal/utils/utils";
import { MutationProtectionStatusEnum } from "./mutationprotectionstatusenum";
import { Tag } from "./tag";
export declare class AssociateFirewallRuleGroupRequest extends SpeakeasyBase {
    creatorRequestId: string;
    firewallRuleGroupId: string;
    mutationProtection?: MutationProtectionStatusEnum;
    name: string;
    priority: number;
    tags?: Tag[];
    vpcId: string;
}
