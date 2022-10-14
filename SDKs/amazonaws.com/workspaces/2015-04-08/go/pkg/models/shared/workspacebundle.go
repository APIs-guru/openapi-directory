package shared

import (
	"time"
)

type WorkspaceBundle struct {
	BundleID        *string      `json:"BundleId,omitempty"`
	ComputeType     *ComputeType `json:"ComputeType,omitempty"`
	CreationTime    *time.Time   `json:"CreationTime,omitempty"`
	Description     *string      `json:"Description,omitempty"`
	ImageID         *string      `json:"ImageId,omitempty"`
	LastUpdatedTime *time.Time   `json:"LastUpdatedTime,omitempty"`
	Name            *string      `json:"Name,omitempty"`
	Owner           *string      `json:"Owner,omitempty"`
	RootStorage     *RootStorage `json:"RootStorage,omitempty"`
	UserStorage     *UserStorage `json:"UserStorage,omitempty"`
}
