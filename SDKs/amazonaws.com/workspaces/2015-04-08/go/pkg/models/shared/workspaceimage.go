package shared

import (
	"time"
)

// WorkspaceImage
// Describes a WorkSpace image.
type WorkspaceImage struct {
	Created         *time.Time                         `json:"Created,omitempty"`
	Description     *string                            `json:"Description,omitempty"`
	ErrorCode       *string                            `json:"ErrorCode,omitempty"`
	ErrorMessage    *string                            `json:"ErrorMessage,omitempty"`
	ImageID         *string                            `json:"ImageId,omitempty"`
	Name            *string                            `json:"Name,omitempty"`
	OperatingSystem *OperatingSystem                   `json:"OperatingSystem,omitempty"`
	OwnerAccountID  *string                            `json:"OwnerAccountId,omitempty"`
	RequiredTenancy *WorkspaceImageRequiredTenancyEnum `json:"RequiredTenancy,omitempty"`
	State           *WorkspaceImageStateEnum           `json:"State,omitempty"`
}
