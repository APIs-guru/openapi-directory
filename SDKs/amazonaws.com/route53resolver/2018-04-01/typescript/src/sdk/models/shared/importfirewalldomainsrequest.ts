import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FirewallDomainImportOperationEnum } from "./firewalldomainimportoperationenum";


export class ImportFirewallDomainsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=DomainFileUrl" })
  domainFileUrl: string;

  @Metadata({ data: "json, name=FirewallDomainListId" })
  firewallDomainListId: string;

  @Metadata({ data: "json, name=Operation" })
  operation: FirewallDomainImportOperationEnum;
}
