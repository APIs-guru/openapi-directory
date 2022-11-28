package shared

import (
	"time"
)

// ClusterListEntry
// Contains a cluster's state, a cluster's ID, and other important information.
type ClusterListEntry struct {
	ClusterID    *string           `json:"ClusterId,omitempty"`
	ClusterState *ClusterStateEnum `json:"ClusterState,omitempty"`
	CreationDate *time.Time        `json:"CreationDate,omitempty"`
	Description  *string           `json:"Description,omitempty"`
}
