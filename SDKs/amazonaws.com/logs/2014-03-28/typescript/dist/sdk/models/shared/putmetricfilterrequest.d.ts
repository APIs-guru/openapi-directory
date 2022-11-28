import { SpeakeasyBase } from "../../../internal/utils";
import { MetricTransformation } from "./metrictransformation";
export declare class PutMetricFilterRequest extends SpeakeasyBase {
    filterName: string;
    filterPattern: string;
    logGroupName: string;
    metricTransformations: MetricTransformation[];
}
