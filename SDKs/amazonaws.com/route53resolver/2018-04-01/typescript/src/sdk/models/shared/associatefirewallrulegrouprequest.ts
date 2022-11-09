import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MutationProtectionStatusEnum } from "./mutationprotectionstatusenum";
import { Tag } from "./tag";


export class AssociateFirewallRuleGroupRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreatorRequestId" })
  creatorRequestId: string;

  @Metadata({ data: "json, name=FirewallRuleGroupId" })
  firewallRuleGroupId: string;

  @Metadata({ data: "json, name=MutationProtection" })
  mutationProtection?: MutationProtectionStatusEnum;

  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=Priority" })
  priority: number;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];

  @Metadata({ data: "json, name=VpcId" })
  vpcId: string;
}
