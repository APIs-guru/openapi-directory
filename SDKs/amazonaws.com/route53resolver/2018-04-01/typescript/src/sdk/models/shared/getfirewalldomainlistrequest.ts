import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetFirewallDomainListRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=FirewallDomainListId" })
  firewallDomainListId: string;
}
