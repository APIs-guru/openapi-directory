import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FirewallPolicyResponse } from "./firewallpolicyresponse";


export class CreateFirewallPolicyResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=FirewallPolicyResponse" })
  firewallPolicyResponse: FirewallPolicyResponse;

  @Metadata({ data: "json, name=UpdateToken" })
  updateToken: string;
}
