import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// MetricData
/** 
 * The name, value, and date and time of a metric that was emitted to Amazon CloudWatch.
**/
export class MetricData extends SpeakeasyBase {
  @Metadata({ data: "json, name=MetricName" })
  metricName?: string;

  @Metadata({ data: "json, name=Timestamp" })
  timestamp?: Date;

  @Metadata({ data: "json, name=Value" })
  value?: number;
}
