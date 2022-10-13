package shared

type RecordStateEnum string

const (
	RecordStateEnumStarted   RecordStateEnum = "Started"
	RecordStateEnumSucceeded RecordStateEnum = "Succeeded"
	RecordStateEnumFailed    RecordStateEnum = "Failed"
)
