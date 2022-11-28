import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MetricData
/** 
 * The name, value, and date and time of a metric that was emitted to Amazon CloudWatch.
**/
export class MetricData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MetricName" })
  metricName?: string;

  @SpeakeasyMetadata({ data: "json, name=Timestamp" })
  timestamp?: Date;

  @SpeakeasyMetadata({ data: "json, name=Value" })
  value?: number;
}
