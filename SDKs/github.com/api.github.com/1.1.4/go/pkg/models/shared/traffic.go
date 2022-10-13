package shared

import (
	"time"
)

type Traffic struct {
	Count     int64     `json:"count"`
	Timestamp time.Time `json:"timestamp"`
	Uniques   int64     `json:"uniques"`
}
