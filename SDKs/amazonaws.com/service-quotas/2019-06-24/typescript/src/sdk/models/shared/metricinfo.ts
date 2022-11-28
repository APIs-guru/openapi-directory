import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MetricInfo
/** 
 * Information about the CloudWatch metric that reflects quota usage.
**/
export class MetricInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MetricDimensions" })
  metricDimensions?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=MetricName" })
  metricName?: string;

  @SpeakeasyMetadata({ data: "json, name=MetricNamespace" })
  metricNamespace?: string;

  @SpeakeasyMetadata({ data: "json, name=MetricStatisticRecommendation" })
  metricStatisticRecommendation?: string;
}
