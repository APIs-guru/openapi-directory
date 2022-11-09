import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// MetricsConfiguration
/** 
 * An object that specifies whether cloud metrics are collected in a deployment and, if so, what role is used to collect metrics.
**/
export class MetricsConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=cloudMetricEnabled" })
  cloudMetricEnabled?: boolean;

  @Metadata({ data: "json, name=metricRuleRoleArn" })
  metricRuleRoleArn?: string;
}
