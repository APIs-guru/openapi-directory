package shared

type InferenceExecutionStatusEnum string

const (
	InferenceExecutionStatusEnumInProgress InferenceExecutionStatusEnum = "IN_PROGRESS"
	InferenceExecutionStatusEnumSuccess    InferenceExecutionStatusEnum = "SUCCESS"
	InferenceExecutionStatusEnumFailed     InferenceExecutionStatusEnum = "FAILED"
)
