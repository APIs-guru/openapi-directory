package shared

import (
	"time"
)

type UtteranceData struct {
	Count            *int64     `json:"count"`
	DistinctUsers    *int64     `json:"distinctUsers"`
	FirstUtteredDate *time.Time `json:"firstUtteredDate"`
	LastUtteredDate  *time.Time `json:"lastUtteredDate"`
	UtteranceString  *string    `json:"utteranceString"`
}
