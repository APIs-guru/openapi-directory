package shared

import (
"time")

type DescribePipelineDefinitionForExecutionResponse struct {
    CreationTime *time.Time `json:"CreationTime,omitempty"`
    PipelineDefinition *string `json:"PipelineDefinition,omitempty"`
    
}

