package shared

import (
	"time"
)

type StudioLifecycleConfigDetails struct {
	CreationTime                 *time.Time                        `json:"CreationTime"`
	LastModifiedTime             *time.Time                        `json:"LastModifiedTime"`
	StudioLifecycleConfigAppType *StudioLifecycleConfigAppTypeEnum `json:"StudioLifecycleConfigAppType"`
	StudioLifecycleConfigArn     *string                           `json:"StudioLifecycleConfigArn"`
	StudioLifecycleConfigName    *string                           `json:"StudioLifecycleConfigName"`
}
