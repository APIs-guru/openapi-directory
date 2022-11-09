import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FirewallDomainListMetadata } from "./firewalldomainlistmetadata";


export class ListFirewallDomainListsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=FirewallDomainLists", elemType: shared.FirewallDomainListMetadata })
  firewallDomainLists?: FirewallDomainListMetadata[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
