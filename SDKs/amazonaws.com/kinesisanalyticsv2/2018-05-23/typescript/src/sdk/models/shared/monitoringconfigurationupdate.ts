import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ConfigurationTypeEnum } from "./configurationtypeenum";
import { LogLevelEnum } from "./loglevelenum";
import { MetricsLevelEnum } from "./metricslevelenum";


// MonitoringConfigurationUpdate
/** 
 * Describes updates to configuration parameters for Amazon CloudWatch logging for an application.
**/
export class MonitoringConfigurationUpdate extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConfigurationTypeUpdate" })
  configurationTypeUpdate?: ConfigurationTypeEnum;

  @Metadata({ data: "json, name=LogLevelUpdate" })
  logLevelUpdate?: LogLevelEnum;

  @Metadata({ data: "json, name=MetricsLevelUpdate" })
  metricsLevelUpdate?: MetricsLevelEnum;
}
