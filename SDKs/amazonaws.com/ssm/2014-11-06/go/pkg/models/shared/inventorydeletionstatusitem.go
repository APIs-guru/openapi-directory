package shared

import (
	"time"
)

// InventoryDeletionStatusItem
// Status information returned by the <code>DeleteInventory</code> operation.
type InventoryDeletionStatusItem struct {
	DeletionID           *string                      `json:"DeletionId,omitempty"`
	DeletionStartTime    *time.Time                   `json:"DeletionStartTime,omitempty"`
	DeletionSummary      *InventoryDeletionSummary    `json:"DeletionSummary,omitempty"`
	LastStatus           *InventoryDeletionStatusEnum `json:"LastStatus,omitempty"`
	LastStatusMessage    *string                      `json:"LastStatusMessage,omitempty"`
	LastStatusUpdateTime *time.Time                   `json:"LastStatusUpdateTime,omitempty"`
	TypeName             *string                      `json:"TypeName,omitempty"`
}
