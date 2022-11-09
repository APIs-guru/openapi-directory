import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// EdgeMetric
/** 
 * Information required for edge device metrics.
**/
export class EdgeMetric extends SpeakeasyBase {
  @Metadata({ data: "json, name=Dimension" })
  dimension?: string;

  @Metadata({ data: "json, name=MetricName" })
  metricName?: string;

  @Metadata({ data: "json, name=Timestamp" })
  timestamp?: Date;

  @Metadata({ data: "json, name=Value" })
  value?: number;
}
