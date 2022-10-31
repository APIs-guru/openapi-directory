package shared




type ExportTaskStatusCodeEnum string

const (
    ExportTaskStatusCodeEnumCancelled ExportTaskStatusCodeEnum = "CANCELLED"
ExportTaskStatusCodeEnumCompleted ExportTaskStatusCodeEnum = "COMPLETED"
ExportTaskStatusCodeEnumFailed ExportTaskStatusCodeEnum = "FAILED"
ExportTaskStatusCodeEnumPending ExportTaskStatusCodeEnum = "PENDING"
ExportTaskStatusCodeEnumPendingCancel ExportTaskStatusCodeEnum = "PENDING_CANCEL"
ExportTaskStatusCodeEnumRunning ExportTaskStatusCodeEnum = "RUNNING"
)


