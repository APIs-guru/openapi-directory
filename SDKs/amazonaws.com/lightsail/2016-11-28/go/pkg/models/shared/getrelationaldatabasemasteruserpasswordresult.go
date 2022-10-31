package shared

import (
"time")

type GetRelationalDatabaseMasterUserPasswordResult struct {
    CreatedAt *time.Time `json:"createdAt,omitempty"`
    MasterUserPassword *string `json:"masterUserPassword,omitempty"`
    
}

