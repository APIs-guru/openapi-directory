package shared

import (
	"time"
)

// DataPoint
// A timestamp, and a single numerical value, which together represent a measurement at a particular point in time.
type DataPoint struct {
	Timestamp time.Time `json:"Timestamp"`
	Value     float64   `json:"Value"`
}
