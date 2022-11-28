import { SpeakeasyBase } from "../../../internal/utils";
import { ModuleLoggingConfiguration } from "./moduleloggingconfiguration";
/**
 * Defines the Apache Airflow logs to send to CloudWatch Logs: <code>DagProcessingLogs</code>, <code>SchedulerLogs</code>, <code>TaskLogs</code>, <code>WebserverLogs</code>, <code>WorkerLogs</code>.
**/
export declare class LoggingConfiguration extends SpeakeasyBase {
    dagProcessingLogs?: ModuleLoggingConfiguration;
    schedulerLogs?: ModuleLoggingConfiguration;
    taskLogs?: ModuleLoggingConfiguration;
    webserverLogs?: ModuleLoggingConfiguration;
    workerLogs?: ModuleLoggingConfiguration;
}
