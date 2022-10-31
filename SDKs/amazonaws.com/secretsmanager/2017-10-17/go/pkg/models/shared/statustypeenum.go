package shared

type StatusTypeEnum string

const (
	StatusTypeEnumInSync     StatusTypeEnum = "InSync"
	StatusTypeEnumFailed     StatusTypeEnum = "Failed"
	StatusTypeEnumInProgress StatusTypeEnum = "InProgress"
)
