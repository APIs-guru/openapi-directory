import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EdgeMetric
/** 
 * Information required for edge device metrics.
**/
export class EdgeMetric extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Dimension" })
  dimension?: string;

  @SpeakeasyMetadata({ data: "json, name=MetricName" })
  metricName?: string;

  @SpeakeasyMetadata({ data: "json, name=Timestamp" })
  timestamp?: Date;

  @SpeakeasyMetadata({ data: "json, name=Value" })
  value?: number;
}
