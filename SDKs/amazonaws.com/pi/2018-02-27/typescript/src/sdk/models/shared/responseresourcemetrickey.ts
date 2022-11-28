import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ResponseResourceMetricKey
/** 
 * An object describing a Performance Insights metric and one or more dimensions for that metric.
**/
export class ResponseResourceMetricKey extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Dimensions" })
  dimensions?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=Metric" })
  metric: string;
}
