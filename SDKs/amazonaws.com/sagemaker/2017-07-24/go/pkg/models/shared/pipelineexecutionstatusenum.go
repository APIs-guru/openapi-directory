package shared

type PipelineExecutionStatusEnum string

const (
	PipelineExecutionStatusEnumExecuting PipelineExecutionStatusEnum = "Executing"
	PipelineExecutionStatusEnumStopping  PipelineExecutionStatusEnum = "Stopping"
	PipelineExecutionStatusEnumStopped   PipelineExecutionStatusEnum = "Stopped"
	PipelineExecutionStatusEnumFailed    PipelineExecutionStatusEnum = "Failed"
	PipelineExecutionStatusEnumSucceeded PipelineExecutionStatusEnum = "Succeeded"
)
