import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FirewallPolicyResponse } from "./firewallpolicyresponse";


export class UpdateFirewallPolicyResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=FirewallPolicyResponse" })
  firewallPolicyResponse: FirewallPolicyResponse;

  @Metadata({ data: "json, name=UpdateToken" })
  updateToken: string;
}
