import { SpeakeasyBase } from "../../../internal/utils/utils";
import { DnsConfig } from "./dnsconfig";
import { HealthCheckConfig } from "./healthcheckconfig";
import { HealthCheckCustomConfig } from "./healthcheckcustomconfig";
import { Tag } from "./tag";
import { ServiceTypeOptionEnum } from "./servicetypeoptionenum";
export declare class CreateServiceRequest extends SpeakeasyBase {
    creatorRequestId?: string;
    description?: string;
    dnsConfig?: DnsConfig;
    healthCheckConfig?: HealthCheckConfig;
    healthCheckCustomConfig?: HealthCheckCustomConfig;
    name: string;
    namespaceId?: string;
    tags?: Tag[];
    type?: ServiceTypeOptionEnum;
}
