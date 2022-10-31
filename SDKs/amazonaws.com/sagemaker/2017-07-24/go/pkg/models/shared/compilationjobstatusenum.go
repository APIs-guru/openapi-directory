package shared




type CompilationJobStatusEnum string

const (
    CompilationJobStatusEnumInprogress CompilationJobStatusEnum = "INPROGRESS"
CompilationJobStatusEnumCompleted CompilationJobStatusEnum = "COMPLETED"
CompilationJobStatusEnumFailed CompilationJobStatusEnum = "FAILED"
CompilationJobStatusEnumStarting CompilationJobStatusEnum = "STARTING"
CompilationJobStatusEnumStopping CompilationJobStatusEnum = "STOPPING"
CompilationJobStatusEnumStopped CompilationJobStatusEnum = "STOPPED"
)


