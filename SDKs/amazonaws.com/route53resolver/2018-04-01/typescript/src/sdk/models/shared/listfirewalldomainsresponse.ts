import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListFirewallDomainsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Domains" })
  domains?: string[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
