import { SpeakeasyBase } from "../../../internal/utils";
import { FirewallPolicyMetadata } from "./firewallpolicymetadata";
export declare class ListFirewallPoliciesResponse extends SpeakeasyBase {
    firewallPolicies?: FirewallPolicyMetadata[];
    nextToken?: string;
}
