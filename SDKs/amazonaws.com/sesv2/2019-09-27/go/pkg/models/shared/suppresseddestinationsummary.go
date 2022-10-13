package shared

import (
	"time"
)

type SuppressedDestinationSummary struct {
	EmailAddress   string                    `json:"EmailAddress"`
	LastUpdateTime time.Time                 `json:"LastUpdateTime"`
	Reason         SuppressionListReasonEnum `json:"Reason"`
}
