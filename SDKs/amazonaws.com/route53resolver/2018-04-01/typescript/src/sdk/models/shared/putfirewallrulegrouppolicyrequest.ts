import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PutFirewallRuleGroupPolicyRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Arn" })
  arn: string;

  @Metadata({ data: "json, name=FirewallRuleGroupPolicy" })
  firewallRuleGroupPolicy: string;
}
