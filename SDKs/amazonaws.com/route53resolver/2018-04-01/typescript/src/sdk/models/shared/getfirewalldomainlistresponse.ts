import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FirewallDomainList } from "./firewalldomainlist";


export class GetFirewallDomainListResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=FirewallDomainList" })
  firewallDomainList?: FirewallDomainList;
}
