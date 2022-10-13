package shared

import (
	"time"
)

type UsageRecord struct {
	AccountID          *string          `json:"accountId"`
	FreeTrialStartDate *time.Time       `json:"freeTrialStartDate"`
	Usage              []UsageByAccount `json:"usage"`
}
