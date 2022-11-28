package shared

import (
	"time"
)

// Datapoint
// Encapsulates the statistical data that CloudWatch computes from metric data.
type Datapoint struct {
	Average            *float64
	ExtendedStatistics map[string]float64
	Maximum            *float64
	Minimum            *float64
	SampleCount        *float64
	Sum                *float64
	Timestamp          *time.Time
	Unit               *StandardUnitEnum
}
