package shared

type ExportStatusEnum string

const (
	ExportStatusEnumInProgress ExportStatusEnum = "IN_PROGRESS"
	ExportStatusEnumReady      ExportStatusEnum = "READY"
	ExportStatusEnumFailed     ExportStatusEnum = "FAILED"
)
