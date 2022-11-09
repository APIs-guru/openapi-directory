import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DnsConfig } from "./dnsconfig";
import { HealthCheckConfig } from "./healthcheckconfig";
import { HealthCheckCustomConfig } from "./healthcheckcustomconfig";
import { ServiceTypeEnum } from "./servicetypeenum";


// ServiceSummary
/** 
 * A complex type that contains information about a specified service.
**/
export class ServiceSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=Arn" })
  arn?: string;

  @Metadata({ data: "json, name=CreateDate" })
  createDate?: Date;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=DnsConfig" })
  dnsConfig?: DnsConfig;

  @Metadata({ data: "json, name=HealthCheckConfig" })
  healthCheckConfig?: HealthCheckConfig;

  @Metadata({ data: "json, name=HealthCheckCustomConfig" })
  healthCheckCustomConfig?: HealthCheckCustomConfig;

  @Metadata({ data: "json, name=Id" })
  id?: string;

  @Metadata({ data: "json, name=InstanceCount" })
  instanceCount?: number;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Type" })
  type?: ServiceTypeEnum;
}
