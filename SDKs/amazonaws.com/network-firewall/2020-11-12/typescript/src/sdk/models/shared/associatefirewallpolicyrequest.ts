import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AssociateFirewallPolicyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FirewallArn" })
  firewallArn?: string;

  @SpeakeasyMetadata({ data: "json, name=FirewallName" })
  firewallName?: string;

  @SpeakeasyMetadata({ data: "json, name=FirewallPolicyArn" })
  firewallPolicyArn: string;

  @SpeakeasyMetadata({ data: "json, name=UpdateToken" })
  updateToken?: string;
}
