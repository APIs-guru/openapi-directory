package shared

import (
	"time"
)

type DescribeEdgePackagingJobResponse struct {
	CompilationJobName            *string                     `json:"CompilationJobName"`
	CreationTime                  *time.Time                  `json:"CreationTime"`
	EdgePackagingJobArn           string                      `json:"EdgePackagingJobArn"`
	EdgePackagingJobName          string                      `json:"EdgePackagingJobName"`
	EdgePackagingJobStatus        EdgePackagingJobStatusEnum  `json:"EdgePackagingJobStatus"`
	EdgePackagingJobStatusMessage *string                     `json:"EdgePackagingJobStatusMessage"`
	LastModifiedTime              *time.Time                  `json:"LastModifiedTime"`
	ModelArtifact                 *string                     `json:"ModelArtifact"`
	ModelName                     *string                     `json:"ModelName"`
	ModelSignature                *string                     `json:"ModelSignature"`
	ModelVersion                  *string                     `json:"ModelVersion"`
	OutputConfig                  *EdgeOutputConfig           `json:"OutputConfig"`
	PresetDeploymentOutput        *EdgePresetDeploymentOutput `json:"PresetDeploymentOutput"`
	ResourceKey                   *string                     `json:"ResourceKey"`
	RoleArn                       *string                     `json:"RoleArn"`
}
