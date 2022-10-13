package shared

import (
	"time"
)

type BotAliasHistoryEvent struct {
	BotVersion *string    `json:"botVersion"`
	EndDate    *time.Time `json:"endDate"`
	StartDate  *time.Time `json:"startDate"`
}
