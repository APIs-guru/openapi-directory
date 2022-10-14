package shared

import (
	"time"
)

type DescribeStudioLifecycleConfigResponse struct {
	CreationTime                 *time.Time                        `json:"CreationTime,omitempty"`
	LastModifiedTime             *time.Time                        `json:"LastModifiedTime,omitempty"`
	StudioLifecycleConfigAppType *StudioLifecycleConfigAppTypeEnum `json:"StudioLifecycleConfigAppType,omitempty"`
	StudioLifecycleConfigArn     *string                           `json:"StudioLifecycleConfigArn,omitempty"`
	StudioLifecycleConfigContent *string                           `json:"StudioLifecycleConfigContent,omitempty"`
	StudioLifecycleConfigName    *string                           `json:"StudioLifecycleConfigName,omitempty"`
}
