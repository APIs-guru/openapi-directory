import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Allows autoscaling based on Stackdriver metrics.
**/
export declare class CustomMetric extends SpeakeasyBase {
    filter?: string;
    metricName?: string;
    singleInstanceAssignment?: number;
    targetType?: string;
    targetUtilization?: number;
}
