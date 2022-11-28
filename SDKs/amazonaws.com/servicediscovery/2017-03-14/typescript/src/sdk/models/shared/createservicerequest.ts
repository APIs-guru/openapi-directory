import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DnsConfig } from "./dnsconfig";
import { HealthCheckConfig } from "./healthcheckconfig";
import { HealthCheckCustomConfig } from "./healthcheckcustomconfig";
import { Tag } from "./tag";
import { ServiceTypeOptionEnum } from "./servicetypeoptionenum";



export class CreateServiceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreatorRequestId" })
  creatorRequestId?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=DnsConfig" })
  dnsConfig?: DnsConfig;

  @SpeakeasyMetadata({ data: "json, name=HealthCheckConfig" })
  healthCheckConfig?: HealthCheckConfig;

  @SpeakeasyMetadata({ data: "json, name=HealthCheckCustomConfig" })
  healthCheckCustomConfig?: HealthCheckCustomConfig;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=NamespaceId" })
  namespaceId?: string;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: ServiceTypeOptionEnum;
}
