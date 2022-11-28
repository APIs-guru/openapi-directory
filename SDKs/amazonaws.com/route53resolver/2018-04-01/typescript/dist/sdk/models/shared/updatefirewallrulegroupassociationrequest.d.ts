import { SpeakeasyBase } from "../../../internal/utils";
import { MutationProtectionStatusEnum } from "./mutationprotectionstatusenum";
export declare class UpdateFirewallRuleGroupAssociationRequest extends SpeakeasyBase {
    firewallRuleGroupAssociationId: string;
    mutationProtection?: MutationProtectionStatusEnum;
    name?: string;
    priority?: number;
}
