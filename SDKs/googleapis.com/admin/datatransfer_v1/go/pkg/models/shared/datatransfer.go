package shared

import (
	"time"
)

// DataTransfer
// A Transfer resource represents the transfer of the ownership of user data between users.
type DataTransfer struct {
	ApplicationDataTransfers  []ApplicationDataTransfer `json:"applicationDataTransfers,omitempty"`
	Etag                      *string                   `json:"etag,omitempty"`
	ID                        *string                   `json:"id,omitempty"`
	Kind                      *string                   `json:"kind,omitempty"`
	NewOwnerUserID            *string                   `json:"newOwnerUserId,omitempty"`
	OldOwnerUserID            *string                   `json:"oldOwnerUserId,omitempty"`
	OverallTransferStatusCode *string                   `json:"overallTransferStatusCode,omitempty"`
	RequestTime               *time.Time                `json:"requestTime,omitempty"`
}
