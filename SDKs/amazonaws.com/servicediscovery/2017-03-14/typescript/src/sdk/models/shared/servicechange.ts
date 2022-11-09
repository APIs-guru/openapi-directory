import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DnsConfigChange } from "./dnsconfigchange";
import { HealthCheckConfig } from "./healthcheckconfig";


// ServiceChange
/** 
 * A complex type that contains changes to an existing service.
**/
export class ServiceChange extends SpeakeasyBase {
  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=DnsConfig" })
  dnsConfig?: DnsConfigChange;

  @Metadata({ data: "json, name=HealthCheckConfig" })
  healthCheckConfig?: HealthCheckConfig;
}
