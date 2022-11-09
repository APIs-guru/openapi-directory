import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FirewallPolicyResponse } from "./firewallpolicyresponse";


export class DeleteFirewallPolicyResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=FirewallPolicyResponse" })
  firewallPolicyResponse: FirewallPolicyResponse;
}
