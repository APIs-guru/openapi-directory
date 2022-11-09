import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteFirewallRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=FirewallArn" })
  firewallArn?: string;

  @Metadata({ data: "json, name=FirewallName" })
  firewallName?: string;
}
