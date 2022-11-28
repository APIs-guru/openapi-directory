import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An object that specifies whether cloud metrics are collected in a deployment and, if so, what role is used to collect metrics.
**/
export declare class MetricsConfiguration extends SpeakeasyBase {
    cloudMetricEnabled?: boolean;
    metricRuleRoleArn?: string;
}
