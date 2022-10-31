package shared

type ExportStatusEnum string

const (
	ExportStatusEnumInProgress ExportStatusEnum = "InProgress"
	ExportStatusEnumCompleted  ExportStatusEnum = "Completed"
	ExportStatusEnumFailed     ExportStatusEnum = "Failed"
	ExportStatusEnumDeleting   ExportStatusEnum = "Deleting"
)
