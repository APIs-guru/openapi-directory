import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FirewallPolicyResponse } from "./firewallpolicyresponse";



export class DeleteFirewallPolicyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FirewallPolicyResponse" })
  firewallPolicyResponse: FirewallPolicyResponse;
}
