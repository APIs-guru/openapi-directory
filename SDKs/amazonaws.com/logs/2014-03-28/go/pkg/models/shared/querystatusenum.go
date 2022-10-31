package shared

type QueryStatusEnum string

const (
	QueryStatusEnumScheduled QueryStatusEnum = "Scheduled"
	QueryStatusEnumRunning   QueryStatusEnum = "Running"
	QueryStatusEnumComplete  QueryStatusEnum = "Complete"
	QueryStatusEnumFailed    QueryStatusEnum = "Failed"
	QueryStatusEnumCancelled QueryStatusEnum = "Cancelled"
	QueryStatusEnumTimeout   QueryStatusEnum = "Timeout"
	QueryStatusEnumUnknown   QueryStatusEnum = "Unknown"
)
