import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FirewallDomainListStatusEnum } from "./firewalldomainliststatusenum";


// FirewallDomainList
/** 
 * <p>High-level information about a list of firewall domains for use in a <a>FirewallRule</a>. This is returned by <a>GetFirewallDomainList</a>.</p> <p>To retrieve the domains that are defined for this domain list, call <a>ListFirewallDomains</a>.</p>
**/
export class FirewallDomainList extends SpeakeasyBase {
  @Metadata({ data: "json, name=Arn" })
  arn?: string;

  @Metadata({ data: "json, name=CreationTime" })
  creationTime?: string;

  @Metadata({ data: "json, name=CreatorRequestId" })
  creatorRequestId?: string;

  @Metadata({ data: "json, name=DomainCount" })
  domainCount?: number;

  @Metadata({ data: "json, name=Id" })
  id?: string;

  @Metadata({ data: "json, name=ManagedOwnerName" })
  managedOwnerName?: string;

  @Metadata({ data: "json, name=ModificationTime" })
  modificationTime?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Status" })
  status?: FirewallDomainListStatusEnum;

  @Metadata({ data: "json, name=StatusMessage" })
  statusMessage?: string;
}
