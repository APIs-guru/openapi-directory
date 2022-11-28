import { SpeakeasyBase } from "../../../internal/utils";
import { DnsConfig } from "./dnsconfig";
import { HealthCheckConfig } from "./healthcheckconfig";
import { HealthCheckCustomConfig } from "./healthcheckcustomconfig";
import { ServiceTypeEnum } from "./servicetypeenum";
/**
 * A complex type that contains information about the specified service.
**/
export declare class Service extends SpeakeasyBase {
    arn?: string;
    createDate?: Date;
    creatorRequestId?: string;
    description?: string;
    dnsConfig?: DnsConfig;
    healthCheckConfig?: HealthCheckConfig;
    healthCheckCustomConfig?: HealthCheckCustomConfig;
    id?: string;
    instanceCount?: number;
    name?: string;
    namespaceId?: string;
    type?: ServiceTypeEnum;
}
