import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListFirewallDomainsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=FirewallDomainListId" })
  firewallDomainListId: string;

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
