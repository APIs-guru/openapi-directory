import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListFirewallDomainsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Domains" })
  domains?: string[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
