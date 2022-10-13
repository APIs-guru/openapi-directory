package shared

import (
	"time"
)

type WorkspaceBundle struct {
	BundleID        *string      `json:"BundleId"`
	ComputeType     *ComputeType `json:"ComputeType"`
	CreationTime    *time.Time   `json:"CreationTime"`
	Description     *string      `json:"Description"`
	ImageID         *string      `json:"ImageId"`
	LastUpdatedTime *time.Time   `json:"LastUpdatedTime"`
	Name            *string      `json:"Name"`
	Owner           *string      `json:"Owner"`
	RootStorage     *RootStorage `json:"RootStorage"`
	UserStorage     *UserStorage `json:"UserStorage"`
}
