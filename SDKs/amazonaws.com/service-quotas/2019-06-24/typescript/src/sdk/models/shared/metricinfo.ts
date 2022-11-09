import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// MetricInfo
/** 
 * Information about the CloudWatch metric that reflects quota usage.
**/
export class MetricInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=MetricDimensions" })
  metricDimensions?: Map<string, string>;

  @Metadata({ data: "json, name=MetricName" })
  metricName?: string;

  @Metadata({ data: "json, name=MetricNamespace" })
  metricNamespace?: string;

  @Metadata({ data: "json, name=MetricStatisticRecommendation" })
  metricStatisticRecommendation?: string;
}
