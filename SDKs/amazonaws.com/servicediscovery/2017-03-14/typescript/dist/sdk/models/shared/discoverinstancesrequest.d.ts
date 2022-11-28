import { SpeakeasyBase } from "../../../internal/utils";
import { HealthStatusFilterEnum } from "./healthstatusfilterenum";
export declare class DiscoverInstancesRequest extends SpeakeasyBase {
    healthStatus?: HealthStatusFilterEnum;
    maxResults?: number;
    namespaceName: string;
    optionalParameters?: Map<string, string>;
    queryParameters?: Map<string, string>;
    serviceName: string;
}
