import { SpeakeasyBase } from "../../../internal/utils";
import { Range } from "./range";
/**
 * The configuration specifies details about how the anomaly detection model is to be trained, including time ranges to exclude from use for training the model and the time zone to use for the metric.
**/
export declare class AnomalyDetectorConfiguration extends SpeakeasyBase {
    excludedTimeRanges?: Range[];
    metricTimezone?: string;
}
