import { SpeakeasyBase } from "../../../internal/utils";
import { MutationProtectionStatusEnum } from "./mutationprotectionstatusenum";
import { FirewallRuleGroupAssociationStatusEnum } from "./firewallrulegroupassociationstatusenum";
/**
 * An association between a firewall rule group and a VPC, which enables DNS filtering for the VPC.
**/
export declare class FirewallRuleGroupAssociation extends SpeakeasyBase {
    arn?: string;
    creationTime?: string;
    creatorRequestId?: string;
    firewallRuleGroupId?: string;
    id?: string;
    managedOwnerName?: string;
    modificationTime?: string;
    mutationProtection?: MutationProtectionStatusEnum;
    name?: string;
    priority?: number;
    status?: FirewallRuleGroupAssociationStatusEnum;
    statusMessage?: string;
    vpcId?: string;
}
