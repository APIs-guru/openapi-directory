package shared

import (
	"time"
)

// CompilationJobSummary
// A summary of a model compilation job.
type CompilationJobSummary struct {
	CompilationEndTime                   *time.Time                     `json:"CompilationEndTime,omitempty"`
	CompilationJobArn                    string                         `json:"CompilationJobArn"`
	CompilationJobName                   string                         `json:"CompilationJobName"`
	CompilationJobStatus                 CompilationJobStatusEnum       `json:"CompilationJobStatus"`
	CompilationStartTime                 *time.Time                     `json:"CompilationStartTime,omitempty"`
	CompilationTargetDevice              *TargetDeviceEnum              `json:"CompilationTargetDevice,omitempty"`
	CompilationTargetPlatformAccelerator *TargetPlatformAcceleratorEnum `json:"CompilationTargetPlatformAccelerator,omitempty"`
	CompilationTargetPlatformArch        *TargetPlatformArchEnum        `json:"CompilationTargetPlatformArch,omitempty"`
	CompilationTargetPlatformOs          *TargetPlatformOsEnum          `json:"CompilationTargetPlatformOs,omitempty"`
	CreationTime                         time.Time                      `json:"CreationTime"`
	LastModifiedTime                     *time.Time                     `json:"LastModifiedTime,omitempty"`
}
