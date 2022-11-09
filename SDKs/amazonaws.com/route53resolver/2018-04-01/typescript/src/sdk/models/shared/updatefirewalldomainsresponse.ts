import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FirewallDomainListStatusEnum } from "./firewalldomainliststatusenum";


export class UpdateFirewallDomainsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Id" })
  id?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Status" })
  status?: FirewallDomainListStatusEnum;

  @Metadata({ data: "json, name=StatusMessage" })
  statusMessage?: string;
}
