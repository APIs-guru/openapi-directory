package shared




type WorldGenerationJobStatusEnum string

const (
    WorldGenerationJobStatusEnumPending WorldGenerationJobStatusEnum = "Pending"
WorldGenerationJobStatusEnumRunning WorldGenerationJobStatusEnum = "Running"
WorldGenerationJobStatusEnumCompleted WorldGenerationJobStatusEnum = "Completed"
WorldGenerationJobStatusEnumFailed WorldGenerationJobStatusEnum = "Failed"
WorldGenerationJobStatusEnumPartialFailed WorldGenerationJobStatusEnum = "PartialFailed"
WorldGenerationJobStatusEnumCanceling WorldGenerationJobStatusEnum = "Canceling"
WorldGenerationJobStatusEnumCanceled WorldGenerationJobStatusEnum = "Canceled"
)


