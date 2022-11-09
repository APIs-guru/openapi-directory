import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MutationProtectionStatusEnum } from "./mutationprotectionstatusenum";
import { FirewallRuleGroupAssociationStatusEnum } from "./firewallrulegroupassociationstatusenum";


// FirewallRuleGroupAssociation
/** 
 * An association between a firewall rule group and a VPC, which enables DNS filtering for the VPC. 
**/
export class FirewallRuleGroupAssociation extends SpeakeasyBase {
  @Metadata({ data: "json, name=Arn" })
  arn?: string;

  @Metadata({ data: "json, name=CreationTime" })
  creationTime?: string;

  @Metadata({ data: "json, name=CreatorRequestId" })
  creatorRequestId?: string;

  @Metadata({ data: "json, name=FirewallRuleGroupId" })
  firewallRuleGroupId?: string;

  @Metadata({ data: "json, name=Id" })
  id?: string;

  @Metadata({ data: "json, name=ManagedOwnerName" })
  managedOwnerName?: string;

  @Metadata({ data: "json, name=ModificationTime" })
  modificationTime?: string;

  @Metadata({ data: "json, name=MutationProtection" })
  mutationProtection?: MutationProtectionStatusEnum;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Priority" })
  priority?: number;

  @Metadata({ data: "json, name=Status" })
  status?: FirewallRuleGroupAssociationStatusEnum;

  @Metadata({ data: "json, name=StatusMessage" })
  statusMessage?: string;

  @Metadata({ data: "json, name=VpcId" })
  vpcId?: string;
}
