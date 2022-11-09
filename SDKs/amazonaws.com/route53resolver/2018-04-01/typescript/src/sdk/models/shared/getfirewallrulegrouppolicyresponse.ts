import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetFirewallRuleGroupPolicyResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=FirewallRuleGroupPolicy" })
  firewallRuleGroupPolicy?: string;
}
