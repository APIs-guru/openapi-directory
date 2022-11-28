import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetFirewallRuleGroupPolicyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FirewallRuleGroupPolicy" })
  firewallRuleGroupPolicy?: string;
}
