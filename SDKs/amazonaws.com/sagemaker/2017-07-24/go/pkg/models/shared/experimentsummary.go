package shared

import (
"time")

type ExperimentSummary struct {
    CreationTime *time.Time `json:"CreationTime,omitempty"`
    DisplayName *string `json:"DisplayName,omitempty"`
    ExperimentArn *string `json:"ExperimentArn,omitempty"`
    ExperimentName *string `json:"ExperimentName,omitempty"`
    ExperimentSource *ExperimentSource `json:"ExperimentSource,omitempty"`
    LastModifiedTime *time.Time `json:"LastModifiedTime,omitempty"`
    
}

