import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DnsConfig } from "./dnsconfig";
import { HealthCheckConfig } from "./healthcheckconfig";
import { HealthCheckCustomConfig } from "./healthcheckcustomconfig";
import { ServiceTypeEnum } from "./servicetypeenum";



// ServiceSummary
/** 
 * A complex type that contains information about a specified service.
**/
export class ServiceSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=CreateDate" })
  createDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=DnsConfig" })
  dnsConfig?: DnsConfig;

  @SpeakeasyMetadata({ data: "json, name=HealthCheckConfig" })
  healthCheckConfig?: HealthCheckConfig;

  @SpeakeasyMetadata({ data: "json, name=HealthCheckCustomConfig" })
  healthCheckCustomConfig?: HealthCheckCustomConfig;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=InstanceCount" })
  instanceCount?: number;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: ServiceTypeEnum;
}
