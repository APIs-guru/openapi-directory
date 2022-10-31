package shared




type WorldExportJobStatusEnum string

const (
    WorldExportJobStatusEnumPending WorldExportJobStatusEnum = "Pending"
WorldExportJobStatusEnumRunning WorldExportJobStatusEnum = "Running"
WorldExportJobStatusEnumCompleted WorldExportJobStatusEnum = "Completed"
WorldExportJobStatusEnumFailed WorldExportJobStatusEnum = "Failed"
WorldExportJobStatusEnumCanceling WorldExportJobStatusEnum = "Canceling"
WorldExportJobStatusEnumCanceled WorldExportJobStatusEnum = "Canceled"
)


