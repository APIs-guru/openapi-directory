package shared

import (
	"time"
)

type DataPoint struct {
	Timestamp time.Time `json:"Timestamp"`
	Value     float64   `json:"Value"`
}
