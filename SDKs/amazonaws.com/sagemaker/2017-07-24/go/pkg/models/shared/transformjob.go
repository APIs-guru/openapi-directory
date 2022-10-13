package shared

import (
	"time"
)

type TransformJob struct {
	AutoMlJobArn            *string                 `json:"AutoMLJobArn"`
	BatchStrategy           *BatchStrategyEnum      `json:"BatchStrategy"`
	CreationTime            *time.Time              `json:"CreationTime"`
	DataProcessing          *DataProcessing         `json:"DataProcessing"`
	Environment             map[string]string       `json:"Environment"`
	ExperimentConfig        *ExperimentConfig       `json:"ExperimentConfig"`
	FailureReason           *string                 `json:"FailureReason"`
	LabelingJobArn          *string                 `json:"LabelingJobArn"`
	MaxConcurrentTransforms *int64                  `json:"MaxConcurrentTransforms"`
	MaxPayloadInMb          *int64                  `json:"MaxPayloadInMB"`
	ModelClientConfig       *ModelClientConfig      `json:"ModelClientConfig"`
	ModelName               *string                 `json:"ModelName"`
	Tags                    []Tag                   `json:"Tags"`
	TransformEndTime        *time.Time              `json:"TransformEndTime"`
	TransformInput          *TransformInput         `json:"TransformInput"`
	TransformJobArn         *string                 `json:"TransformJobArn"`
	TransformJobName        *string                 `json:"TransformJobName"`
	TransformJobStatus      *TransformJobStatusEnum `json:"TransformJobStatus"`
	TransformOutput         *TransformOutput        `json:"TransformOutput"`
	TransformResources      *TransformResources     `json:"TransformResources"`
	TransformStartTime      *time.Time              `json:"TransformStartTime"`
}
