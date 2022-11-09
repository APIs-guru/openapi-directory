import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DnsConfig } from "./dnsconfig";
import { HealthCheckConfig } from "./healthcheckconfig";
import { HealthCheckCustomConfig } from "./healthcheckcustomconfig";
import { Tag } from "./tag";
import { ServiceTypeOptionEnum } from "./servicetypeoptionenum";


export class CreateServiceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreatorRequestId" })
  creatorRequestId?: string;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=DnsConfig" })
  dnsConfig?: DnsConfig;

  @Metadata({ data: "json, name=HealthCheckConfig" })
  healthCheckConfig?: HealthCheckConfig;

  @Metadata({ data: "json, name=HealthCheckCustomConfig" })
  healthCheckCustomConfig?: HealthCheckCustomConfig;

  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=NamespaceId" })
  namespaceId?: string;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];

  @Metadata({ data: "json, name=Type" })
  type?: ServiceTypeOptionEnum;
}
