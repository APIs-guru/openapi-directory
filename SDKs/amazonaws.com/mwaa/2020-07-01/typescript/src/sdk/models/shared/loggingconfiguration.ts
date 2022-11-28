import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ModuleLoggingConfiguration } from "./moduleloggingconfiguration";



// LoggingConfiguration
/** 
 * Defines the Apache Airflow logs to send to CloudWatch Logs: <code>DagProcessingLogs</code>, <code>SchedulerLogs</code>, <code>TaskLogs</code>, <code>WebserverLogs</code>, <code>WorkerLogs</code>.
**/
export class LoggingConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DagProcessingLogs" })
  dagProcessingLogs?: ModuleLoggingConfiguration;

  @SpeakeasyMetadata({ data: "json, name=SchedulerLogs" })
  schedulerLogs?: ModuleLoggingConfiguration;

  @SpeakeasyMetadata({ data: "json, name=TaskLogs" })
  taskLogs?: ModuleLoggingConfiguration;

  @SpeakeasyMetadata({ data: "json, name=WebserverLogs" })
  webserverLogs?: ModuleLoggingConfiguration;

  @SpeakeasyMetadata({ data: "json, name=WorkerLogs" })
  workerLogs?: ModuleLoggingConfiguration;
}
