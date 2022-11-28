import { SpeakeasyBase } from "../../../internal/utils";
import { MetricUnitEnum } from "./metricunitenum";
/**
 * Describes the metric data point.
**/
export declare class MetricDatapoint extends SpeakeasyBase {
    average?: number;
    maximum?: number;
    minimum?: number;
    sampleCount?: number;
    sum?: number;
    timestamp?: Date;
    unit?: MetricUnitEnum;
}
