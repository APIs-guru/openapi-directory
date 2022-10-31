package shared




type TranscriptionJobStatusEnum string

const (
    TranscriptionJobStatusEnumQueued TranscriptionJobStatusEnum = "QUEUED"
TranscriptionJobStatusEnumInProgress TranscriptionJobStatusEnum = "IN_PROGRESS"
TranscriptionJobStatusEnumFailed TranscriptionJobStatusEnum = "FAILED"
TranscriptionJobStatusEnumCompleted TranscriptionJobStatusEnum = "COMPLETED"
)


