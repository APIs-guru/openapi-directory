import { SpeakeasyBase } from "../../../internal/utils/utils";
import { MetricTransformation } from "./metrictransformation";
/**
 * Metric filters express how CloudWatch Logs would extract metric observations from ingested log events and transform them into metric data in a CloudWatch metric.
**/
export declare class MetricFilter extends SpeakeasyBase {
    creationTime?: number;
    filterName?: string;
    filterPattern?: string;
    logGroupName?: string;
    metricTransformations?: MetricTransformation[];
}
