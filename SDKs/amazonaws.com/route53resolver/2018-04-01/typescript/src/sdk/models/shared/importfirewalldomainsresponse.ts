import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FirewallDomainListStatusEnum } from "./firewalldomainliststatusenum";



export class ImportFirewallDomainsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: FirewallDomainListStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=StatusMessage" })
  statusMessage?: string;
}
