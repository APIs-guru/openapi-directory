import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteFirewallRuleRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=FirewallDomainListId" })
  firewallDomainListId: string;

  @Metadata({ data: "json, name=FirewallRuleGroupId" })
  firewallRuleGroupId: string;
}
