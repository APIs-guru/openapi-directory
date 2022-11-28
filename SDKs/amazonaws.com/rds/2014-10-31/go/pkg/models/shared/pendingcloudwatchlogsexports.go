package shared

// PendingCloudwatchLogsExports
// A list of the log types whose configuration is still pending. In other words, these log types are in the process of being activated or deactivated.
type PendingCloudwatchLogsExports struct {
	LogTypesToDisable []string
	LogTypesToEnable  []string
}
