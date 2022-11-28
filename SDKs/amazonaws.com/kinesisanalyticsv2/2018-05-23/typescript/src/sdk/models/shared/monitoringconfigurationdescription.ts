import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConfigurationTypeEnum } from "./configurationtypeenum";
import { LogLevelEnum } from "./loglevelenum";
import { MetricsLevelEnum } from "./metricslevelenum";



// MonitoringConfigurationDescription
/** 
 * Describes configuration parameters for CloudWatch logging for an application.
**/
export class MonitoringConfigurationDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConfigurationType" })
  configurationType?: ConfigurationTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=LogLevel" })
  logLevel?: LogLevelEnum;

  @SpeakeasyMetadata({ data: "json, name=MetricsLevel" })
  metricsLevel?: MetricsLevelEnum;
}
