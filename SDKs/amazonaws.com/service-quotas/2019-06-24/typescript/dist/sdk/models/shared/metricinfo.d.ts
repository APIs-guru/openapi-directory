import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Information about the CloudWatch metric that reflects quota usage.
**/
export declare class MetricInfo extends SpeakeasyBase {
    metricDimensions?: Map<string, string>;
    metricName?: string;
    metricNamespace?: string;
    metricStatisticRecommendation?: string;
}
