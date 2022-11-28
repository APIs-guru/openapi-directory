import { SpeakeasyBase } from "../../../internal/utils";
import { ConfigurationTypeEnum } from "./configurationtypeenum";
import { LogLevelEnum } from "./loglevelenum";
import { MetricsLevelEnum } from "./metricslevelenum";
/**
 * Describes updates to configuration parameters for Amazon CloudWatch logging for an application.
**/
export declare class MonitoringConfigurationUpdate extends SpeakeasyBase {
    configurationTypeUpdate?: ConfigurationTypeEnum;
    logLevelUpdate?: LogLevelEnum;
    metricsLevelUpdate?: MetricsLevelEnum;
}
