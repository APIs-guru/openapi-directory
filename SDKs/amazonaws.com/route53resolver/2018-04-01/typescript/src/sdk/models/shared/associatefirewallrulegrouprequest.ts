import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MutationProtectionStatusEnum } from "./mutationprotectionstatusenum";
import { Tag } from "./tag";



export class AssociateFirewallRuleGroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreatorRequestId" })
  creatorRequestId: string;

  @SpeakeasyMetadata({ data: "json, name=FirewallRuleGroupId" })
  firewallRuleGroupId: string;

  @SpeakeasyMetadata({ data: "json, name=MutationProtection" })
  mutationProtection?: MutationProtectionStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=Priority" })
  priority: number;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata({ data: "json, name=VpcId" })
  vpcId: string;
}
