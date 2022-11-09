import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ConfigurationTypeEnum } from "./configurationtypeenum";
import { LogLevelEnum } from "./loglevelenum";
import { MetricsLevelEnum } from "./metricslevelenum";


// MonitoringConfigurationDescription
/** 
 * Describes configuration parameters for CloudWatch logging for an application.
**/
export class MonitoringConfigurationDescription extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConfigurationType" })
  configurationType?: ConfigurationTypeEnum;

  @Metadata({ data: "json, name=LogLevel" })
  logLevel?: LogLevelEnum;

  @Metadata({ data: "json, name=MetricsLevel" })
  metricsLevel?: MetricsLevelEnum;
}
