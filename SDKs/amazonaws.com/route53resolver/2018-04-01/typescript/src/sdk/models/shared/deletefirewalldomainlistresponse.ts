import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FirewallDomainList } from "./firewalldomainlist";



export class DeleteFirewallDomainListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FirewallDomainList" })
  firewallDomainList?: FirewallDomainList;
}
