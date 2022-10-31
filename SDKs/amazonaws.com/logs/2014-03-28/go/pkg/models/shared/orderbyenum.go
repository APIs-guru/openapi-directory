package shared

type OrderByEnum string

const (
	OrderByEnumLogStreamName OrderByEnum = "LogStreamName"
	OrderByEnumLastEventTime OrderByEnum = "LastEventTime"
)
