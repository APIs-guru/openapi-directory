import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateFirewallDescriptionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=FirewallArn" })
  firewallArn?: string;

  @SpeakeasyMetadata({ data: "json, name=FirewallName" })
  firewallName?: string;

  @SpeakeasyMetadata({ data: "json, name=UpdateToken" })
  updateToken?: string;
}
