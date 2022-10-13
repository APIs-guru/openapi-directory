package shared

import (
	"time"
)

type ExperimentSummary struct {
	CreationTime     *time.Time        `json:"CreationTime"`
	DisplayName      *string           `json:"DisplayName"`
	ExperimentArn    *string           `json:"ExperimentArn"`
	ExperimentName   *string           `json:"ExperimentName"`
	ExperimentSource *ExperimentSource `json:"ExperimentSource"`
	LastModifiedTime *time.Time        `json:"LastModifiedTime"`
}
