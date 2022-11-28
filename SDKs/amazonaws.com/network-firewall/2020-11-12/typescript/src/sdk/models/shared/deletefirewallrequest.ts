import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteFirewallRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FirewallArn" })
  firewallArn?: string;

  @SpeakeasyMetadata({ data: "json, name=FirewallName" })
  firewallName?: string;
}
