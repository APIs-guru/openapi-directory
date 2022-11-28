import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MutationProtectionStatusEnum } from "./mutationprotectionstatusenum";
import { FirewallRuleGroupAssociationStatusEnum } from "./firewallrulegroupassociationstatusenum";



// FirewallRuleGroupAssociation
/** 
 * An association between a firewall rule group and a VPC, which enables DNS filtering for the VPC. 
**/
export class FirewallRuleGroupAssociation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime?: string;

  @SpeakeasyMetadata({ data: "json, name=CreatorRequestId" })
  creatorRequestId?: string;

  @SpeakeasyMetadata({ data: "json, name=FirewallRuleGroupId" })
  firewallRuleGroupId?: string;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=ManagedOwnerName" })
  managedOwnerName?: string;

  @SpeakeasyMetadata({ data: "json, name=ModificationTime" })
  modificationTime?: string;

  @SpeakeasyMetadata({ data: "json, name=MutationProtection" })
  mutationProtection?: MutationProtectionStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Priority" })
  priority?: number;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: FirewallRuleGroupAssociationStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=StatusMessage" })
  statusMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=VpcId" })
  vpcId?: string;
}
