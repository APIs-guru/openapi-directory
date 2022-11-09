import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetFirewallRuleGroupAssociationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=FirewallRuleGroupAssociationId" })
  firewallRuleGroupAssociationId: string;
}
