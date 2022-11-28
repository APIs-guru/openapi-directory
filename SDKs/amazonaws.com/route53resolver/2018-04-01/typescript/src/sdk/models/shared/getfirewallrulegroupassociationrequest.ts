import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetFirewallRuleGroupAssociationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FirewallRuleGroupAssociationId" })
  firewallRuleGroupAssociationId: string;
}
