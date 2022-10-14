package shared

import (
	"time"
)

type GetRelationalDatabaseLogEventsRequest struct {
	EndTime                *time.Time `json:"endTime,omitempty"`
	LogStreamName          string     `json:"logStreamName"`
	PageToken              *string    `json:"pageToken,omitempty"`
	RelationalDatabaseName string     `json:"relationalDatabaseName"`
	StartFromHead          *bool      `json:"startFromHead,omitempty"`
	StartTime              *time.Time `json:"startTime,omitempty"`
}
