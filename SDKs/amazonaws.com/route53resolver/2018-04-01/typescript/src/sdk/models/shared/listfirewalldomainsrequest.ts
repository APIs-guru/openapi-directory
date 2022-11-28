import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListFirewallDomainsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FirewallDomainListId" })
  firewallDomainListId: string;

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
