package shared

import (
	"time"
)

type DataTransfer struct {
	ApplicationDataTransfers  []ApplicationDataTransfer `json:"applicationDataTransfers"`
	Etag                      *string                   `json:"etag"`
	ID                        *string                   `json:"id"`
	Kind                      *string                   `json:"kind"`
	NewOwnerUserID            *string                   `json:"newOwnerUserId"`
	OldOwnerUserID            *string                   `json:"oldOwnerUserId"`
	OverallTransferStatusCode *string                   `json:"overallTransferStatusCode"`
	RequestTime               *time.Time                `json:"requestTime"`
}
