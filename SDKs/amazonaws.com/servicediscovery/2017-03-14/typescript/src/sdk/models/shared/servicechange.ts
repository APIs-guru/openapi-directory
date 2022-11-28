import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DnsConfigChange } from "./dnsconfigchange";
import { HealthCheckConfig } from "./healthcheckconfig";



// ServiceChange
/** 
 * A complex type that contains changes to an existing service.
**/
export class ServiceChange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=DnsConfig" })
  dnsConfig?: DnsConfigChange;

  @SpeakeasyMetadata({ data: "json, name=HealthCheckConfig" })
  healthCheckConfig?: HealthCheckConfig;
}
