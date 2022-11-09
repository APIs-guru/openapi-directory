import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TimeSeriesFeedback
/** 
 * Details about feedback submitted for an anomalous metric.
**/
export class TimeSeriesFeedback extends SpeakeasyBase {
  @Metadata({ data: "json, name=IsAnomaly" })
  isAnomaly?: boolean;

  @Metadata({ data: "json, name=TimeSeriesId" })
  timeSeriesId?: string;
}
