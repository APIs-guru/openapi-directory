package shared

import (
	"time"
)

type DescribeExperimentResponse struct {
	CreatedBy        *UserContext      `json:"CreatedBy"`
	CreationTime     *time.Time        `json:"CreationTime"`
	Description      *string           `json:"Description"`
	DisplayName      *string           `json:"DisplayName"`
	ExperimentArn    *string           `json:"ExperimentArn"`
	ExperimentName   *string           `json:"ExperimentName"`
	LastModifiedBy   *UserContext      `json:"LastModifiedBy"`
	LastModifiedTime *time.Time        `json:"LastModifiedTime"`
	Source           *ExperimentSource `json:"Source"`
}
