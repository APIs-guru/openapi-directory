package shared

import (
	"time"
)

type StudioLifecycleConfigDetails struct {
	CreationTime                 *time.Time                        `json:"CreationTime,omitempty"`
	LastModifiedTime             *time.Time                        `json:"LastModifiedTime,omitempty"`
	StudioLifecycleConfigAppType *StudioLifecycleConfigAppTypeEnum `json:"StudioLifecycleConfigAppType,omitempty"`
	StudioLifecycleConfigArn     *string                           `json:"StudioLifecycleConfigArn,omitempty"`
	StudioLifecycleConfigName    *string                           `json:"StudioLifecycleConfigName,omitempty"`
}
