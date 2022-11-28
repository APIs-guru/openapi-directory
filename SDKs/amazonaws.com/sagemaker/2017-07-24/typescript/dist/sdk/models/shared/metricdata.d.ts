import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The name, value, and date and time of a metric that was emitted to Amazon CloudWatch.
**/
export declare class MetricData extends SpeakeasyBase {
    metricName?: string;
    timestamp?: Date;
    value?: number;
}
