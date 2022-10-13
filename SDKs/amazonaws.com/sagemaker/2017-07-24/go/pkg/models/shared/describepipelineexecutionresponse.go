package shared

import (
	"time"
)

type DescribePipelineExecutionResponse struct {
	CreatedBy                    *UserContext                 `json:"CreatedBy"`
	CreationTime                 *time.Time                   `json:"CreationTime"`
	FailureReason                *string                      `json:"FailureReason"`
	LastModifiedBy               *UserContext                 `json:"LastModifiedBy"`
	LastModifiedTime             *time.Time                   `json:"LastModifiedTime"`
	PipelineArn                  *string                      `json:"PipelineArn"`
	PipelineExecutionArn         *string                      `json:"PipelineExecutionArn"`
	PipelineExecutionDescription *string                      `json:"PipelineExecutionDescription"`
	PipelineExecutionDisplayName *string                      `json:"PipelineExecutionDisplayName"`
	PipelineExecutionStatus      *PipelineExecutionStatusEnum `json:"PipelineExecutionStatus"`
	PipelineExperimentConfig     *PipelineExperimentConfig    `json:"PipelineExperimentConfig"`
}
