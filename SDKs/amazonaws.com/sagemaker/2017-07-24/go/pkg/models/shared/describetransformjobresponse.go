package shared

import (
	"time"
)

type DescribeTransformJobResponse struct {
	AutoMlJobArn            *string                `json:"AutoMLJobArn,omitempty"`
	BatchStrategy           *BatchStrategyEnum     `json:"BatchStrategy,omitempty"`
	CreationTime            time.Time              `json:"CreationTime"`
	DataProcessing          *DataProcessing        `json:"DataProcessing,omitempty"`
	Environment             map[string]string      `json:"Environment,omitempty"`
	ExperimentConfig        *ExperimentConfig      `json:"ExperimentConfig,omitempty"`
	FailureReason           *string                `json:"FailureReason,omitempty"`
	LabelingJobArn          *string                `json:"LabelingJobArn,omitempty"`
	MaxConcurrentTransforms *int64                 `json:"MaxConcurrentTransforms,omitempty"`
	MaxPayloadInMb          *int64                 `json:"MaxPayloadInMB,omitempty"`
	ModelClientConfig       *ModelClientConfig     `json:"ModelClientConfig,omitempty"`
	ModelName               string                 `json:"ModelName"`
	TransformEndTime        *time.Time             `json:"TransformEndTime,omitempty"`
	TransformInput          TransformInput         `json:"TransformInput"`
	TransformJobArn         string                 `json:"TransformJobArn"`
	TransformJobName        string                 `json:"TransformJobName"`
	TransformJobStatus      TransformJobStatusEnum `json:"TransformJobStatus"`
	TransformOutput         *TransformOutput       `json:"TransformOutput,omitempty"`
	TransformResources      TransformResources     `json:"TransformResources"`
	TransformStartTime      *time.Time             `json:"TransformStartTime,omitempty"`
}
