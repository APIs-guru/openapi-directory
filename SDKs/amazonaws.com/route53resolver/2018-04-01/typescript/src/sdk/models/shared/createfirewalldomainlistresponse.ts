import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FirewallDomainList } from "./firewalldomainlist";


export class CreateFirewallDomainListResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=FirewallDomainList" })
  firewallDomainList?: FirewallDomainList;
}
