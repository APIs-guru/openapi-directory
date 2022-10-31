package shared

import (
"time")

type LabelingJobForWorkteamSummary struct {
    CreationTime time.Time `json:"CreationTime"`
    JobReferenceCode string `json:"JobReferenceCode"`
    LabelCounters *LabelCountersForWorkteam `json:"LabelCounters,omitempty"`
    LabelingJobName *string `json:"LabelingJobName,omitempty"`
    NumberOfHumanWorkersPerDataObject *int64 `json:"NumberOfHumanWorkersPerDataObject,omitempty"`
    WorkRequesterAccountID string `json:"WorkRequesterAccountId"`
    
}

