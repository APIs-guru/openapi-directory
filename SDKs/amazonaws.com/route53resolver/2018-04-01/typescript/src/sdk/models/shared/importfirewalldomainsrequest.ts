import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FirewallDomainImportOperationEnum } from "./firewalldomainimportoperationenum";



export class ImportFirewallDomainsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DomainFileUrl" })
  domainFileUrl: string;

  @SpeakeasyMetadata({ data: "json, name=FirewallDomainListId" })
  firewallDomainListId: string;

  @SpeakeasyMetadata({ data: "json, name=Operation" })
  operation: FirewallDomainImportOperationEnum;
}
