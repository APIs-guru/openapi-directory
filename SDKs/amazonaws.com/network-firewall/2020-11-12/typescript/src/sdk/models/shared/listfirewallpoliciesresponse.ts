import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FirewallPolicyMetadata } from "./firewallpolicymetadata";


export class ListFirewallPoliciesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=FirewallPolicies", elemType: shared.FirewallPolicyMetadata })
  firewallPolicies?: FirewallPolicyMetadata[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
