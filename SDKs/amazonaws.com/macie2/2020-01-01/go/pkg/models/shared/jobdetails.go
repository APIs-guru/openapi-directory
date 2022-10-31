package shared

import (
"time")

type JobDetails struct {
    IsDefinedInJob *IsDefinedInJobEnum `json:"isDefinedInJob,omitempty"`
    IsMonitoredByJob *IsMonitoredByJobEnum `json:"isMonitoredByJob,omitempty"`
    LastJobID *string `json:"lastJobId,omitempty"`
    LastJobRunTime *time.Time `json:"lastJobRunTime,omitempty"`
    
}

