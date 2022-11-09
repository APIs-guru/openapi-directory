import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FirewallDomainUpdateOperationEnum } from "./firewalldomainupdateoperationenum";


export class UpdateFirewallDomainsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Domains" })
  domains: string[];

  @Metadata({ data: "json, name=FirewallDomainListId" })
  firewallDomainListId: string;

  @Metadata({ data: "json, name=Operation" })
  operation: FirewallDomainUpdateOperationEnum;
}
