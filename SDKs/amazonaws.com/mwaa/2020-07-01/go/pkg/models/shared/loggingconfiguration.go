package shared

// LoggingConfiguration
// Defines the Apache Airflow logs to send to CloudWatch Logs: <code>DagProcessingLogs</code>, <code>SchedulerLogs</code>, <code>TaskLogs</code>, <code>WebserverLogs</code>, <code>WorkerLogs</code>.
type LoggingConfiguration struct {
	DagProcessingLogs *ModuleLoggingConfiguration `json:"DagProcessingLogs,omitempty"`
	SchedulerLogs     *ModuleLoggingConfiguration `json:"SchedulerLogs,omitempty"`
	TaskLogs          *ModuleLoggingConfiguration `json:"TaskLogs,omitempty"`
	WebserverLogs     *ModuleLoggingConfiguration `json:"WebserverLogs,omitempty"`
	WorkerLogs        *ModuleLoggingConfiguration `json:"WorkerLogs,omitempty"`
}
