import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MutationProtectionStatusEnum } from "./mutationprotectionstatusenum";


export class UpdateFirewallRuleGroupAssociationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=FirewallRuleGroupAssociationId" })
  firewallRuleGroupAssociationId: string;

  @Metadata({ data: "json, name=MutationProtection" })
  mutationProtection?: MutationProtectionStatusEnum;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Priority" })
  priority?: number;
}
