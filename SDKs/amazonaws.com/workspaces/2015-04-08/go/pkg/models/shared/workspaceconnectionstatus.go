package shared

import (
"time")

type WorkspaceConnectionStatus struct {
    ConnectionState *ConnectionStateEnum `json:"ConnectionState,omitempty"`
    ConnectionStateCheckTimestamp *time.Time `json:"ConnectionStateCheckTimestamp,omitempty"`
    LastKnownUserConnectionTimestamp *time.Time `json:"LastKnownUserConnectionTimestamp,omitempty"`
    WorkspaceID *string `json:"WorkspaceId,omitempty"`
    
}

