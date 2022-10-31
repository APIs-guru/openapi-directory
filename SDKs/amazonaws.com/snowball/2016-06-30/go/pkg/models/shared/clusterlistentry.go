package shared

import (
"time")

type ClusterListEntry struct {
    ClusterID *string `json:"ClusterId,omitempty"`
    ClusterState *ClusterStateEnum `json:"ClusterState,omitempty"`
    CreationDate *time.Time `json:"CreationDate,omitempty"`
    Description *string `json:"Description,omitempty"`
    
}

