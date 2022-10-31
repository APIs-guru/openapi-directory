package shared




type ExecutionStatusEnum string

const (
    ExecutionStatusEnumInProgress ExecutionStatusEnum = "IN_PROGRESS"
ExecutionStatusEnumCompleted ExecutionStatusEnum = "COMPLETED"
ExecutionStatusEnumException ExecutionStatusEnum = "EXCEPTION"
ExecutionStatusEnumHandlingException ExecutionStatusEnum = "HANDLING_EXCEPTION"
)


