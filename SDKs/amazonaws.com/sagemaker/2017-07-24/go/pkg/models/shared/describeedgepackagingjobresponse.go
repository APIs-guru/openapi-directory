package shared

import (
	"time"
)

type DescribeEdgePackagingJobResponse struct {
	CompilationJobName            *string                     `json:"CompilationJobName,omitempty"`
	CreationTime                  *time.Time                  `json:"CreationTime,omitempty"`
	EdgePackagingJobArn           string                      `json:"EdgePackagingJobArn"`
	EdgePackagingJobName          string                      `json:"EdgePackagingJobName"`
	EdgePackagingJobStatus        EdgePackagingJobStatusEnum  `json:"EdgePackagingJobStatus"`
	EdgePackagingJobStatusMessage *string                     `json:"EdgePackagingJobStatusMessage,omitempty"`
	LastModifiedTime              *time.Time                  `json:"LastModifiedTime,omitempty"`
	ModelArtifact                 *string                     `json:"ModelArtifact,omitempty"`
	ModelName                     *string                     `json:"ModelName,omitempty"`
	ModelSignature                *string                     `json:"ModelSignature,omitempty"`
	ModelVersion                  *string                     `json:"ModelVersion,omitempty"`
	OutputConfig                  *EdgeOutputConfig           `json:"OutputConfig,omitempty"`
	PresetDeploymentOutput        *EdgePresetDeploymentOutput `json:"PresetDeploymentOutput,omitempty"`
	ResourceKey                   *string                     `json:"ResourceKey,omitempty"`
	RoleArn                       *string                     `json:"RoleArn,omitempty"`
}
