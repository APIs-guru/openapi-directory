package shared

type ImportStatusEnum string

const (
	ImportStatusEnumInProgress ImportStatusEnum = "IN_PROGRESS"
	ImportStatusEnumComplete   ImportStatusEnum = "COMPLETE"
	ImportStatusEnumFailed     ImportStatusEnum = "FAILED"
)
