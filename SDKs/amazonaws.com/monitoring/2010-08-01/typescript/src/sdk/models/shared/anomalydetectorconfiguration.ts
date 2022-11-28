import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Range } from "./range";



// AnomalyDetectorConfiguration
/** 
 * The configuration specifies details about how the anomaly detection model is to be trained, including time ranges to exclude from use for training the model and the time zone to use for the metric.
**/
export class AnomalyDetectorConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: Range })
  excludedTimeRanges?: Range[];

  @SpeakeasyMetadata()
  metricTimezone?: string;
}
