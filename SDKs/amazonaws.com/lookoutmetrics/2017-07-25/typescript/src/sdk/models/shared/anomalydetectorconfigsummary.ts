import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FrequencyEnum } from "./frequencyenum";



// AnomalyDetectorConfigSummary
/** 
 * Contains information about a detector's configuration.
**/
export class AnomalyDetectorConfigSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AnomalyDetectorFrequency" })
  anomalyDetectorFrequency?: FrequencyEnum;
}
