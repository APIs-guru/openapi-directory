import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteFirewallRuleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FirewallDomainListId" })
  firewallDomainListId: string;

  @SpeakeasyMetadata({ data: "json, name=FirewallRuleGroupId" })
  firewallRuleGroupId: string;
}
