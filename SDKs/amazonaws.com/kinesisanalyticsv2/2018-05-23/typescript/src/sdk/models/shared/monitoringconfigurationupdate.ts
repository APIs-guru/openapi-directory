import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConfigurationTypeEnum } from "./configurationtypeenum";
import { LogLevelEnum } from "./loglevelenum";
import { MetricsLevelEnum } from "./metricslevelenum";



// MonitoringConfigurationUpdate
/** 
 * Describes updates to configuration parameters for Amazon CloudWatch logging for an application.
**/
export class MonitoringConfigurationUpdate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConfigurationTypeUpdate" })
  configurationTypeUpdate?: ConfigurationTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=LogLevelUpdate" })
  logLevelUpdate?: LogLevelEnum;

  @SpeakeasyMetadata({ data: "json, name=MetricsLevelUpdate" })
  metricsLevelUpdate?: MetricsLevelEnum;
}
