import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateFirewallDeleteProtectionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=DeleteProtection" })
  deleteProtection: boolean;

  @Metadata({ data: "json, name=FirewallArn" })
  firewallArn?: string;

  @Metadata({ data: "json, name=FirewallName" })
  firewallName?: string;

  @Metadata({ data: "json, name=UpdateToken" })
  updateToken?: string;
}
