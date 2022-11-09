import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LoggingLevelEnum } from "./logginglevelenum";


// ModuleLoggingConfiguration
/** 
 * Defines the type of logs to send for the Apache Airflow log type (e.g. <code>DagProcessingLogs</code>). Valid values: <code>CloudWatchLogGroupArn</code>, <code>Enabled</code>, <code>LogLevel</code>.
**/
export class ModuleLoggingConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=CloudWatchLogGroupArn" })
  cloudWatchLogGroupArn?: string;

  @Metadata({ data: "json, name=Enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=LogLevel" })
  logLevel?: LoggingLevelEnum;
}
