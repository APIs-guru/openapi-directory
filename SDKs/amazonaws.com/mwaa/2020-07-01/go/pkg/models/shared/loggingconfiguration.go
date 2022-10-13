package shared

type LoggingConfiguration struct {
	DagProcessingLogs *ModuleLoggingConfiguration `json:"DagProcessingLogs"`
	SchedulerLogs     *ModuleLoggingConfiguration `json:"SchedulerLogs"`
	TaskLogs          *ModuleLoggingConfiguration `json:"TaskLogs"`
	WebserverLogs     *ModuleLoggingConfiguration `json:"WebserverLogs"`
	WorkerLogs        *ModuleLoggingConfiguration `json:"WorkerLogs"`
}
