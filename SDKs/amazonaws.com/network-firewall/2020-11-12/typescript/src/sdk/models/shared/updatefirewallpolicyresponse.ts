import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FirewallPolicyResponse } from "./firewallpolicyresponse";



export class UpdateFirewallPolicyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FirewallPolicyResponse" })
  firewallPolicyResponse: FirewallPolicyResponse;

  @SpeakeasyMetadata({ data: "json, name=UpdateToken" })
  updateToken: string;
}
