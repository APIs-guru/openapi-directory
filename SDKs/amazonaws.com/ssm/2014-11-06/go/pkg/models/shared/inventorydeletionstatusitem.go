package shared

import (
	"time"
)

type InventoryDeletionStatusItem struct {
	DeletionID           *string                      `json:"DeletionId"`
	DeletionStartTime    *time.Time                   `json:"DeletionStartTime"`
	DeletionSummary      *InventoryDeletionSummary    `json:"DeletionSummary"`
	LastStatus           *InventoryDeletionStatusEnum `json:"LastStatus"`
	LastStatusMessage    *string                      `json:"LastStatusMessage"`
	LastStatusUpdateTime *time.Time                   `json:"LastStatusUpdateTime"`
	TypeName             *string                      `json:"TypeName"`
}
