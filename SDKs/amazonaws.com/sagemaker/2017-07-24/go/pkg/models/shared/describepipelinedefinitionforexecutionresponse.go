package shared

import (
	"time"
)

type DescribePipelineDefinitionForExecutionResponse struct {
	CreationTime       *time.Time `json:"CreationTime"`
	PipelineDefinition *string    `json:"PipelineDefinition"`
}
