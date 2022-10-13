package shared

import (
	"time"
)

type CompilationJobSummary struct {
	CompilationEndTime                   *time.Time                     `json:"CompilationEndTime"`
	CompilationJobArn                    string                         `json:"CompilationJobArn"`
	CompilationJobName                   string                         `json:"CompilationJobName"`
	CompilationJobStatus                 CompilationJobStatusEnum       `json:"CompilationJobStatus"`
	CompilationStartTime                 *time.Time                     `json:"CompilationStartTime"`
	CompilationTargetDevice              *TargetDeviceEnum              `json:"CompilationTargetDevice"`
	CompilationTargetPlatformAccelerator *TargetPlatformAcceleratorEnum `json:"CompilationTargetPlatformAccelerator"`
	CompilationTargetPlatformArch        *TargetPlatformArchEnum        `json:"CompilationTargetPlatformArch"`
	CompilationTargetPlatformOs          *TargetPlatformOsEnum          `json:"CompilationTargetPlatformOs"`
	CreationTime                         time.Time                      `json:"CreationTime"`
	LastModifiedTime                     *time.Time                     `json:"LastModifiedTime"`
}
