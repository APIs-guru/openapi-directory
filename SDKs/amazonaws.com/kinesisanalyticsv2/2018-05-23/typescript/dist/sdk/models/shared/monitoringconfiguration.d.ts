import { SpeakeasyBase } from "../../../internal/utils";
import { ConfigurationTypeEnum } from "./configurationtypeenum";
import { LogLevelEnum } from "./loglevelenum";
import { MetricsLevelEnum } from "./metricslevelenum";
/**
 * Describes configuration parameters for Amazon CloudWatch logging for an application. For more information about CloudWatch logging, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/java/monitoring-overview.html">Monitoring</a>.
**/
export declare class MonitoringConfiguration extends SpeakeasyBase {
    configurationType: ConfigurationTypeEnum;
    logLevel?: LogLevelEnum;
    metricsLevel?: MetricsLevelEnum;
}
