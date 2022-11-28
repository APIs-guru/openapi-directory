import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FirewallPolicyMetadata } from "./firewallpolicymetadata";



export class ListFirewallPoliciesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FirewallPolicies", elemType: FirewallPolicyMetadata })
  firewallPolicies?: FirewallPolicyMetadata[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
