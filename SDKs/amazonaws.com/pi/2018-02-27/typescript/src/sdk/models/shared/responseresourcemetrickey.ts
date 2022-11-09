import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ResponseResourceMetricKey
/** 
 * An object describing a Performance Insights metric and one or more dimensions for that metric.
**/
export class ResponseResourceMetricKey extends SpeakeasyBase {
  @Metadata({ data: "json, name=Dimensions" })
  dimensions?: Map<string, string>;

  @Metadata({ data: "json, name=Metric" })
  metric: string;
}
