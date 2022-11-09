import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FirewallPolicy } from "./firewallpolicy";


export class UpdateFirewallPolicyRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=DryRun" })
  dryRun?: boolean;

  @Metadata({ data: "json, name=FirewallPolicy" })
  firewallPolicy: FirewallPolicy;

  @Metadata({ data: "json, name=FirewallPolicyArn" })
  firewallPolicyArn?: string;

  @Metadata({ data: "json, name=FirewallPolicyName" })
  firewallPolicyName?: string;

  @Metadata({ data: "json, name=UpdateToken" })
  updateToken: string;
}
