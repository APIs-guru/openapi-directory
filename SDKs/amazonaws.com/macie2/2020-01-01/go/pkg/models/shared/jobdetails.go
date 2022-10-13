package shared

import (
	"time"
)

type JobDetails struct {
	IsDefinedInJob   *IsDefinedInJobEnum   `json:"isDefinedInJob"`
	IsMonitoredByJob *IsMonitoredByJobEnum `json:"isMonitoredByJob"`
	LastJobID        *string               `json:"lastJobId"`
	LastJobRunTime   *time.Time            `json:"lastJobRunTime"`
}
