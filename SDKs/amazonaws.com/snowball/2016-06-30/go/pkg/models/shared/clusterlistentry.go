package shared

import (
	"time"
)

type ClusterListEntry struct {
	ClusterID    *string           `json:"ClusterId"`
	ClusterState *ClusterStateEnum `json:"ClusterState"`
	CreationDate *time.Time        `json:"CreationDate"`
	Description  *string           `json:"Description"`
}
