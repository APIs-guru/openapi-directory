import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetFirewallDomainListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FirewallDomainListId" })
  firewallDomainListId: string;
}
