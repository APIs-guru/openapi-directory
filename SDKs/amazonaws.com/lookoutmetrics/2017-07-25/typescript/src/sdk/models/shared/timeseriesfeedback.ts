import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TimeSeriesFeedback
/** 
 * Details about feedback submitted for an anomalous metric.
**/
export class TimeSeriesFeedback extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=IsAnomaly" })
  isAnomaly?: boolean;

  @SpeakeasyMetadata({ data: "json, name=TimeSeriesId" })
  timeSeriesId?: string;
}
