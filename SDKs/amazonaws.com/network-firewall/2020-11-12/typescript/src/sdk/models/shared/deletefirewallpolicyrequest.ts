import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteFirewallPolicyRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=FirewallPolicyArn" })
  firewallPolicyArn?: string;

  @Metadata({ data: "json, name=FirewallPolicyName" })
  firewallPolicyName?: string;
}
