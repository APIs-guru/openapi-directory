package shared

import (
"time")

type Deployment struct {
    Created *time.Time `json:"created,omitempty"`
    CreatedBy *string `json:"createdBy,omitempty"`
    Description *string `json:"description,omitempty"`
    ID *string `json:"id,omitempty"`
    LogID *string `json:"logId,omitempty"`
    UserEmail *string `json:"userEmail,omitempty"`
    UserName *string `json:"userName,omitempty"`
    Version *string `json:"version,omitempty"`
    
}

