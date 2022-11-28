import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// FirewallDomainListMetadata
/** 
 * <p>Minimal high-level information for a firewall domain list. The action <a>ListFirewallDomainLists</a> returns an array of these objects. </p> <p>To retrieve full information for a firewall domain list, call <a>GetFirewallDomainList</a> and <a>ListFirewallDomains</a>.</p>
**/
export class FirewallDomainListMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=CreatorRequestId" })
  creatorRequestId?: string;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=ManagedOwnerName" })
  managedOwnerName?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;
}
