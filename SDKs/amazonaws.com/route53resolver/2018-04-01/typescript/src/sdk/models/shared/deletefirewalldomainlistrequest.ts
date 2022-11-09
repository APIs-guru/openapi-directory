import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteFirewallDomainListRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=FirewallDomainListId" })
  firewallDomainListId: string;
}
