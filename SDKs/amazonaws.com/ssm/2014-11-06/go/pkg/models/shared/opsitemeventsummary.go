package shared

import (
	"time"
)

// OpsItemEventSummary
// Summary information about an OpsItem event or that associated an OpsItem with a related item.
type OpsItemEventSummary struct {
	CreatedBy   *OpsItemIdentity `json:"CreatedBy,omitempty"`
	CreatedTime *time.Time       `json:"CreatedTime,omitempty"`
	Detail      *string          `json:"Detail,omitempty"`
	DetailType  *string          `json:"DetailType,omitempty"`
	EventID     *string          `json:"EventId,omitempty"`
	OpsItemID   *string          `json:"OpsItemId,omitempty"`
	Source      *string          `json:"Source,omitempty"`
}
