package shared

import (
	"time"
)

type LabelingJobForWorkteamSummary struct {
	CreationTime                      time.Time                 `json:"CreationTime"`
	JobReferenceCode                  string                    `json:"JobReferenceCode"`
	LabelCounters                     *LabelCountersForWorkteam `json:"LabelCounters"`
	LabelingJobName                   *string                   `json:"LabelingJobName"`
	NumberOfHumanWorkersPerDataObject *int64                    `json:"NumberOfHumanWorkersPerDataObject"`
	WorkRequesterAccountID            string                    `json:"WorkRequesterAccountId"`
}
