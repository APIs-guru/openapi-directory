import { SpeakeasyBase } from "../../../internal/utils/utils";
import { DnsConfig } from "./dnsconfig";
import { HealthCheckConfig } from "./healthcheckconfig";
import { HealthCheckCustomConfig } from "./healthcheckcustomconfig";
import { ServiceTypeEnum } from "./servicetypeenum";
/**
 * A complex type that contains information about a specified service.
**/
export declare class ServiceSummary extends SpeakeasyBase {
    arn?: string;
    createDate?: Date;
    description?: string;
    dnsConfig?: DnsConfig;
    healthCheckConfig?: HealthCheckConfig;
    healthCheckCustomConfig?: HealthCheckCustomConfig;
    id?: string;
    instanceCount?: number;
    name?: string;
    type?: ServiceTypeEnum;
}
