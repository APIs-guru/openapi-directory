import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MutationProtectionStatusEnum } from "./mutationprotectionstatusenum";



export class UpdateFirewallRuleGroupAssociationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FirewallRuleGroupAssociationId" })
  firewallRuleGroupAssociationId: string;

  @SpeakeasyMetadata({ data: "json, name=MutationProtection" })
  mutationProtection?: MutationProtectionStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Priority" })
  priority?: number;
}
