import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FirewallPolicy } from "./firewallpolicy";
import { FirewallPolicyResponse } from "./firewallpolicyresponse";



export class DescribeFirewallPolicyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FirewallPolicy" })
  firewallPolicy?: FirewallPolicy;

  @SpeakeasyMetadata({ data: "json, name=FirewallPolicyResponse" })
  firewallPolicyResponse: FirewallPolicyResponse;

  @SpeakeasyMetadata({ data: "json, name=UpdateToken" })
  updateToken: string;
}
