import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateFirewallPolicyChangeProtectionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=FirewallArn" })
  firewallArn?: string;

  @Metadata({ data: "json, name=FirewallName" })
  firewallName?: string;

  @Metadata({ data: "json, name=FirewallPolicyChangeProtection" })
  firewallPolicyChangeProtection: boolean;

  @Metadata({ data: "json, name=UpdateToken" })
  updateToken?: string;
}
