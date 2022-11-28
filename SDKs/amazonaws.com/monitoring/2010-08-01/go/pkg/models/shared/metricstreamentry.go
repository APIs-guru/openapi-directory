package shared

import (
	"time"
)

// MetricStreamEntry
// This structure contains the configuration information about one metric stream.
type MetricStreamEntry struct {
	Arn            *string
	CreationDate   *time.Time
	FirehoseArn    *string
	LastUpdateDate *time.Time
	Name           *string
	OutputFormat   *MetricStreamOutputFormatEnum
	State          *string
}
