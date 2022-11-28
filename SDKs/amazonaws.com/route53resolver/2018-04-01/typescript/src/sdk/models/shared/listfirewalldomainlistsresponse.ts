import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FirewallDomainListMetadata } from "./firewalldomainlistmetadata";



export class ListFirewallDomainListsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FirewallDomainLists", elemType: FirewallDomainListMetadata })
  firewallDomainLists?: FirewallDomainListMetadata[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
