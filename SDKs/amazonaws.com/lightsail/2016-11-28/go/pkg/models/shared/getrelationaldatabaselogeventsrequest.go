package shared

import (
	"time"
)

type GetRelationalDatabaseLogEventsRequest struct {
	EndTime                *time.Time `json:"endTime"`
	LogStreamName          string     `json:"logStreamName"`
	PageToken              *string    `json:"pageToken"`
	RelationalDatabaseName string     `json:"relationalDatabaseName"`
	StartFromHead          *bool      `json:"startFromHead"`
	StartTime              *time.Time `json:"startTime"`
}
