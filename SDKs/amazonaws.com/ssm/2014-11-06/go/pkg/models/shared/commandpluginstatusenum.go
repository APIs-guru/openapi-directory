package shared

type CommandPluginStatusEnum string

const (
	CommandPluginStatusEnumPending    CommandPluginStatusEnum = "Pending"
	CommandPluginStatusEnumInProgress CommandPluginStatusEnum = "InProgress"
	CommandPluginStatusEnumSuccess    CommandPluginStatusEnum = "Success"
	CommandPluginStatusEnumTimedOut   CommandPluginStatusEnum = "TimedOut"
	CommandPluginStatusEnumCancelled  CommandPluginStatusEnum = "Cancelled"
	CommandPluginStatusEnumFailed     CommandPluginStatusEnum = "Failed"
)
