import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MetricMetadata
/** 
 * This type defines the name and data type of a metric.
**/
export class MetricMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataType" })
  dataType?: string;

  @SpeakeasyMetadata({ data: "json, name=metricKey" })
  metricKey?: string;
}
