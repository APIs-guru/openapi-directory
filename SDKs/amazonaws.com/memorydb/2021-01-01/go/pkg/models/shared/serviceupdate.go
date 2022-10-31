package shared

import (
"time")

type ServiceUpdate struct {
    AutoUpdateStartDate *time.Time `json:"AutoUpdateStartDate,omitempty"`
    ClusterName *string `json:"ClusterName,omitempty"`
    Description *string `json:"Description,omitempty"`
    NodesUpdated *string `json:"NodesUpdated,omitempty"`
    ReleaseDate *time.Time `json:"ReleaseDate,omitempty"`
    ServiceUpdateName *string `json:"ServiceUpdateName,omitempty"`
    Status *ServiceUpdateStatusEnum `json:"Status,omitempty"`
    Type *ServiceUpdateTypeEnum `json:"Type,omitempty"`
    
}

