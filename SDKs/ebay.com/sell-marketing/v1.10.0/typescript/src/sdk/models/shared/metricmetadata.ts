import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// MetricMetadata
/** 
 * This type defines the name and data type of a metric.
**/
export class MetricMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=dataType" })
  dataType?: string;

  @Metadata({ data: "json, name=metricKey" })
  metricKey?: string;
}
