package shared

import (
"time")

type TransformJob struct {
    AutoMlJobArn *string `json:"AutoMLJobArn,omitempty"`
    BatchStrategy *BatchStrategyEnum `json:"BatchStrategy,omitempty"`
    CreationTime *time.Time `json:"CreationTime,omitempty"`
    DataProcessing *DataProcessing `json:"DataProcessing,omitempty"`
    Environment map[string]string `json:"Environment,omitempty"`
    ExperimentConfig *ExperimentConfig `json:"ExperimentConfig,omitempty"`
    FailureReason *string `json:"FailureReason,omitempty"`
    LabelingJobArn *string `json:"LabelingJobArn,omitempty"`
    MaxConcurrentTransforms *int64 `json:"MaxConcurrentTransforms,omitempty"`
    MaxPayloadInMb *int64 `json:"MaxPayloadInMB,omitempty"`
    ModelClientConfig *ModelClientConfig `json:"ModelClientConfig,omitempty"`
    ModelName *string `json:"ModelName,omitempty"`
    Tags []Tag `json:"Tags,omitempty"`
    TransformEndTime *time.Time `json:"TransformEndTime,omitempty"`
    TransformInput *TransformInput `json:"TransformInput,omitempty"`
    TransformJobArn *string `json:"TransformJobArn,omitempty"`
    TransformJobName *string `json:"TransformJobName,omitempty"`
    TransformJobStatus *TransformJobStatusEnum `json:"TransformJobStatus,omitempty"`
    TransformOutput *TransformOutput `json:"TransformOutput,omitempty"`
    TransformResources *TransformResources `json:"TransformResources,omitempty"`
    TransformStartTime *time.Time `json:"TransformStartTime,omitempty"`
    
}

