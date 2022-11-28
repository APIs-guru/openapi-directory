import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConfigurationTypeEnum } from "./configurationtypeenum";
import { LogLevelEnum } from "./loglevelenum";
import { MetricsLevelEnum } from "./metricslevelenum";



// MonitoringConfiguration
/** 
 * Describes configuration parameters for Amazon CloudWatch logging for an application. For more information about CloudWatch logging, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/java/monitoring-overview.html">Monitoring</a>.
**/
export class MonitoringConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConfigurationType" })
  configurationType: ConfigurationTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=LogLevel" })
  logLevel?: LogLevelEnum;

  @SpeakeasyMetadata({ data: "json, name=MetricsLevel" })
  metricsLevel?: MetricsLevelEnum;
}
