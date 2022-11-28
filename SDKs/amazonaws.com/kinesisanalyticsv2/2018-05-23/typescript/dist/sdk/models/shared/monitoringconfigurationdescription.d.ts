import { SpeakeasyBase } from "../../../internal/utils";
import { ConfigurationTypeEnum } from "./configurationtypeenum";
import { LogLevelEnum } from "./loglevelenum";
import { MetricsLevelEnum } from "./metricslevelenum";
/**
 * Describes configuration parameters for CloudWatch logging for an application.
**/
export declare class MonitoringConfigurationDescription extends SpeakeasyBase {
    configurationType?: ConfigurationTypeEnum;
    logLevel?: LogLevelEnum;
    metricsLevel?: MetricsLevelEnum;
}
