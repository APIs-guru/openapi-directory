package shared




type JobStatusEnum string

const (
    JobStatusEnumCreated JobStatusEnum = "CREATED"
JobStatusEnumPreparingForInitialization JobStatusEnum = "PREPARING_FOR_INITIALIZATION"
JobStatusEnumInitializing JobStatusEnum = "INITIALIZING"
JobStatusEnumProcessing JobStatusEnum = "PROCESSING"
JobStatusEnumPendingJob JobStatusEnum = "PENDING_JOB"
JobStatusEnumCompleting JobStatusEnum = "COMPLETING"
JobStatusEnumCompleted JobStatusEnum = "COMPLETED"
JobStatusEnumFailing JobStatusEnum = "FAILING"
JobStatusEnumFailed JobStatusEnum = "FAILED"
)


