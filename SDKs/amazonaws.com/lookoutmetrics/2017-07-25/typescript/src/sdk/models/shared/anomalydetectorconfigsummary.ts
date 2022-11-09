import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FrequencyEnum } from "./frequencyenum";


// AnomalyDetectorConfigSummary
/** 
 * Contains information about a detector's configuration.
**/
export class AnomalyDetectorConfigSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=AnomalyDetectorFrequency" })
  anomalyDetectorFrequency?: FrequencyEnum;
}
