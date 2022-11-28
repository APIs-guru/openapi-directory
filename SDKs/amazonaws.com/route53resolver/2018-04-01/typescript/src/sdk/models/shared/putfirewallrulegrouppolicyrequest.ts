import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutFirewallRuleGroupPolicyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Arn" })
  arn: string;

  @SpeakeasyMetadata({ data: "json, name=FirewallRuleGroupPolicy" })
  firewallRuleGroupPolicy: string;
}
