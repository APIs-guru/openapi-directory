package shared

import (
	"time"
)

// UtteranceData
// Provides information about a single utterance that was made to your bot.
type UtteranceData struct {
	Count            *int64     `json:"count,omitempty"`
	DistinctUsers    *int64     `json:"distinctUsers,omitempty"`
	FirstUtteredDate *time.Time `json:"firstUtteredDate,omitempty"`
	LastUtteredDate  *time.Time `json:"lastUtteredDate,omitempty"`
	UtteranceString  *string    `json:"utteranceString,omitempty"`
}
