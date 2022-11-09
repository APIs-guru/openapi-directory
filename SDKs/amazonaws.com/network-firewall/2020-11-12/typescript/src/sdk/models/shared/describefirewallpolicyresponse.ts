import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FirewallPolicy } from "./firewallpolicy";
import { FirewallPolicyResponse } from "./firewallpolicyresponse";


export class DescribeFirewallPolicyResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=FirewallPolicy" })
  firewallPolicy?: FirewallPolicy;

  @Metadata({ data: "json, name=FirewallPolicyResponse" })
  firewallPolicyResponse: FirewallPolicyResponse;

  @Metadata({ data: "json, name=UpdateToken" })
  updateToken: string;
}
