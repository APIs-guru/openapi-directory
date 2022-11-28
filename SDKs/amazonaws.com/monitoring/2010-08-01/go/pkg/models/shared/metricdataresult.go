package shared

import (
	"time"
)

// MetricDataResult
// A <code>GetMetricData</code> call returns an array of <code>MetricDataResult</code> structures. Each of these structures includes the data points for that metric, along with the timestamps of those data points and other identifying information.
type MetricDataResult struct {
	ID         *string
	Label      *string
	Messages   []MessageData
	StatusCode *StatusCodeEnum
	Timestamps []time.Time
	Values     []float64
}
