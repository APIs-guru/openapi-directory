package shared

type LoggingConfiguration struct {
	DagProcessingLogs *ModuleLoggingConfiguration `json:"DagProcessingLogs,omitempty"`
	SchedulerLogs     *ModuleLoggingConfiguration `json:"SchedulerLogs,omitempty"`
	TaskLogs          *ModuleLoggingConfiguration `json:"TaskLogs,omitempty"`
	WebserverLogs     *ModuleLoggingConfiguration `json:"WebserverLogs,omitempty"`
	WorkerLogs        *ModuleLoggingConfiguration `json:"WorkerLogs,omitempty"`
}
