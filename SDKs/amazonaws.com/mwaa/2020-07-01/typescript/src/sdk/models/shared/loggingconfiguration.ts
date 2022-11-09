import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ModuleLoggingConfiguration } from "./moduleloggingconfiguration";
import { ModuleLoggingConfiguration } from "./moduleloggingconfiguration";
import { ModuleLoggingConfiguration } from "./moduleloggingconfiguration";
import { ModuleLoggingConfiguration } from "./moduleloggingconfiguration";
import { ModuleLoggingConfiguration } from "./moduleloggingconfiguration";


// LoggingConfiguration
/** 
 * Defines the Apache Airflow logs to send to CloudWatch Logs: <code>DagProcessingLogs</code>, <code>SchedulerLogs</code>, <code>TaskLogs</code>, <code>WebserverLogs</code>, <code>WorkerLogs</code>.
**/
export class LoggingConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=DagProcessingLogs" })
  dagProcessingLogs?: ModuleLoggingConfiguration;

  @Metadata({ data: "json, name=SchedulerLogs" })
  schedulerLogs?: ModuleLoggingConfiguration;

  @Metadata({ data: "json, name=TaskLogs" })
  taskLogs?: ModuleLoggingConfiguration;

  @Metadata({ data: "json, name=WebserverLogs" })
  webserverLogs?: ModuleLoggingConfiguration;

  @Metadata({ data: "json, name=WorkerLogs" })
  workerLogs?: ModuleLoggingConfiguration;
}
