package shared

import (
	"time"
)

type WorkspaceConnectionStatus struct {
	ConnectionState                  *ConnectionStateEnum `json:"ConnectionState"`
	ConnectionStateCheckTimestamp    *time.Time           `json:"ConnectionStateCheckTimestamp"`
	LastKnownUserConnectionTimestamp *time.Time           `json:"LastKnownUserConnectionTimestamp"`
	WorkspaceID                      *string              `json:"WorkspaceId"`
}
