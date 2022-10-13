package shared

import (
	"time"
)

type WorkspaceImage struct {
	Created         *time.Time                         `json:"Created"`
	Description     *string                            `json:"Description"`
	ErrorCode       *string                            `json:"ErrorCode"`
	ErrorMessage    *string                            `json:"ErrorMessage"`
	ImageID         *string                            `json:"ImageId"`
	Name            *string                            `json:"Name"`
	OperatingSystem *OperatingSystem                   `json:"OperatingSystem"`
	OwnerAccountID  *string                            `json:"OwnerAccountId"`
	RequiredTenancy *WorkspaceImageRequiredTenancyEnum `json:"RequiredTenancy"`
	State           *WorkspaceImageStateEnum           `json:"State"`
}
