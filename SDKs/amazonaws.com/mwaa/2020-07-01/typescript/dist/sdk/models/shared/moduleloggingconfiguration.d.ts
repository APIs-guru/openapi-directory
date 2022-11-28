import { SpeakeasyBase } from "../../../internal/utils";
import { LoggingLevelEnum } from "./logginglevelenum";
/**
 * Defines the type of logs to send for the Apache Airflow log type (e.g. <code>DagProcessingLogs</code>). Valid values: <code>CloudWatchLogGroupArn</code>, <code>Enabled</code>, <code>LogLevel</code>.
**/
export declare class ModuleLoggingConfiguration extends SpeakeasyBase {
    cloudWatchLogGroupArn?: string;
    enabled?: boolean;
    logLevel?: LoggingLevelEnum;
}
