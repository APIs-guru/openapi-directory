import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeFirewallPolicyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FirewallPolicyArn" })
  firewallPolicyArn?: string;

  @SpeakeasyMetadata({ data: "json, name=FirewallPolicyName" })
  firewallPolicyName?: string;
}
