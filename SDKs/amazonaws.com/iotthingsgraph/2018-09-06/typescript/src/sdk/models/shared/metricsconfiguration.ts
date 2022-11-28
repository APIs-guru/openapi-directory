import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MetricsConfiguration
/** 
 * An object that specifies whether cloud metrics are collected in a deployment and, if so, what role is used to collect metrics.
**/
export class MetricsConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cloudMetricEnabled" })
  cloudMetricEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=metricRuleRoleArn" })
  metricRuleRoleArn?: string;
}
