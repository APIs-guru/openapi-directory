package shared




type JobStatusEnum string

const (
    JobStatusEnumInProgress JobStatusEnum = "IN_PROGRESS"
JobStatusEnumSucceeded JobStatusEnum = "SUCCEEDED"
JobStatusEnumFailed JobStatusEnum = "FAILED"
JobStatusEnumPartialSuccess JobStatusEnum = "PARTIAL_SUCCESS"
)


