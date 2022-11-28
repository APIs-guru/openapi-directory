package shared

import (
	"time"
)

// UsageRecord
// Provides quota and aggregated usage data for an Amazon Macie account.
type UsageRecord struct {
	AccountID          *string          `json:"accountId,omitempty"`
	FreeTrialStartDate *time.Time       `json:"freeTrialStartDate,omitempty"`
	Usage              []UsageByAccount `json:"usage,omitempty"`
}
