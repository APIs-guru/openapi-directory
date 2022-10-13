package shared

import (
	"time"
)

type DescribeStudioLifecycleConfigResponse struct {
	CreationTime                 *time.Time                        `json:"CreationTime"`
	LastModifiedTime             *time.Time                        `json:"LastModifiedTime"`
	StudioLifecycleConfigAppType *StudioLifecycleConfigAppTypeEnum `json:"StudioLifecycleConfigAppType"`
	StudioLifecycleConfigArn     *string                           `json:"StudioLifecycleConfigArn"`
	StudioLifecycleConfigContent *string                           `json:"StudioLifecycleConfigContent"`
	StudioLifecycleConfigName    *string                           `json:"StudioLifecycleConfigName"`
}
