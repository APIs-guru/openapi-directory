import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// FirewallDomainListMetadata
/** 
 * <p>Minimal high-level information for a firewall domain list. The action <a>ListFirewallDomainLists</a> returns an array of these objects. </p> <p>To retrieve full information for a firewall domain list, call <a>GetFirewallDomainList</a> and <a>ListFirewallDomains</a>.</p>
**/
export class FirewallDomainListMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=Arn" })
  arn?: string;

  @Metadata({ data: "json, name=CreatorRequestId" })
  creatorRequestId?: string;

  @Metadata({ data: "json, name=Id" })
  id?: string;

  @Metadata({ data: "json, name=ManagedOwnerName" })
  managedOwnerName?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;
}
