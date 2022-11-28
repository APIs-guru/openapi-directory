import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FirewallDomainUpdateOperationEnum } from "./firewalldomainupdateoperationenum";



export class UpdateFirewallDomainsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Domains" })
  domains: string[];

  @SpeakeasyMetadata({ data: "json, name=FirewallDomainListId" })
  firewallDomainListId: string;

  @SpeakeasyMetadata({ data: "json, name=Operation" })
  operation: FirewallDomainUpdateOperationEnum;
}
