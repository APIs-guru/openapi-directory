import { SpeakeasyBase } from "../../../internal/utils";
import { MetricQuery } from "./metricquery";
import { ServiceTypeEnum } from "./servicetypeenum";
export declare class GetResourceMetricsRequest extends SpeakeasyBase {
    endTime: Date;
    identifier: string;
    maxResults?: number;
    metricQueries: MetricQuery[];
    nextToken?: string;
    periodInSeconds?: number;
    serviceType: ServiceTypeEnum;
    startTime: Date;
}
