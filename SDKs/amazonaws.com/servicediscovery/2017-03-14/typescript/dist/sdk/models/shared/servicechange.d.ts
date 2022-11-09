import { SpeakeasyBase } from "../../../internal/utils/utils";
import { DnsConfigChange } from "./dnsconfigchange";
import { HealthCheckConfig } from "./healthcheckconfig";
/**
 * A complex type that contains changes to an existing service.
**/
export declare class ServiceChange extends SpeakeasyBase {
    description?: string;
    dnsConfig?: DnsConfigChange;
    healthCheckConfig?: HealthCheckConfig;
}
