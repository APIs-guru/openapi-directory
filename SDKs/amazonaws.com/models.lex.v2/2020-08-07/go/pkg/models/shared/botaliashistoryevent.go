package shared

import (
"time")

type BotAliasHistoryEvent struct {
    BotVersion *string `json:"botVersion,omitempty"`
    EndDate *time.Time `json:"endDate,omitempty"`
    StartDate *time.Time `json:"startDate,omitempty"`
    
}

