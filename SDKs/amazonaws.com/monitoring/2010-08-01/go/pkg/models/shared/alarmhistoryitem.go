package shared

import (
	"time"
)

// AlarmHistoryItem
// Represents the history of a specific alarm.
type AlarmHistoryItem struct {
	AlarmName       *string
	AlarmType       *AlarmTypeEnum
	HistoryData     *string
	HistoryItemType *HistoryItemTypeEnum
	HistorySummary  *string
	Timestamp       *time.Time
}
