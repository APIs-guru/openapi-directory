import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LoggingLevelEnum } from "./logginglevelenum";



// ModuleLoggingConfigurationInput
/** 
 * Defines the type of logs to send for the Apache Airflow log type (e.g. <code>DagProcessingLogs</code>). Valid values: <code>CloudWatchLogGroupArn</code>, <code>Enabled</code>, <code>LogLevel</code>.
**/
export class ModuleLoggingConfigurationInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Enabled" })
  enabled: boolean;

  @SpeakeasyMetadata({ data: "json, name=LogLevel" })
  logLevel: LoggingLevelEnum;
}
