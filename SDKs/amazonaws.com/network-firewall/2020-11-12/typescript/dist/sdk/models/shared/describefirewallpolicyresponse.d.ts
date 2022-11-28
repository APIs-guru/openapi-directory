import { SpeakeasyBase } from "../../../internal/utils";
import { FirewallPolicy } from "./firewallpolicy";
import { FirewallPolicyResponse } from "./firewallpolicyresponse";
export declare class DescribeFirewallPolicyResponse extends SpeakeasyBase {
    firewallPolicy?: FirewallPolicy;
    firewallPolicyResponse: FirewallPolicyResponse;
    updateToken: string;
}
