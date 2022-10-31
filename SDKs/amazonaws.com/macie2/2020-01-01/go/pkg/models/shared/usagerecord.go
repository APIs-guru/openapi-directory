package shared

import (
"time")

type UsageRecord struct {
    AccountID *string `json:"accountId,omitempty"`
    FreeTrialStartDate *time.Time `json:"freeTrialStartDate,omitempty"`
    Usage []UsageByAccount `json:"usage,omitempty"`
    
}

