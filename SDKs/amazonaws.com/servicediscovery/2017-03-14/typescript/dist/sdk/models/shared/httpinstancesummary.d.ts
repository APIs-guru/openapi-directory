import { SpeakeasyBase } from "../../../internal/utils";
import { HealthStatusEnum } from "./healthstatusenum";
/**
 * In a response to a <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_DiscoverInstances.html">DiscoverInstances</a> request, <code>HttpInstanceSummary</code> contains information about one instance that matches the values that you specified in the request.
**/
export declare class HttpInstanceSummary extends SpeakeasyBase {
    attributes?: Map<string, string>;
    healthStatus?: HealthStatusEnum;
    instanceId?: string;
    namespaceName?: string;
    serviceName?: string;
}
