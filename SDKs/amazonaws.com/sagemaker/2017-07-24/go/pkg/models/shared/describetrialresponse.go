package shared

import (
	"time"
)

type DescribeTrialResponse struct {
	CreatedBy          *UserContext        `json:"CreatedBy"`
	CreationTime       *time.Time          `json:"CreationTime"`
	DisplayName        *string             `json:"DisplayName"`
	ExperimentName     *string             `json:"ExperimentName"`
	LastModifiedBy     *UserContext        `json:"LastModifiedBy"`
	LastModifiedTime   *time.Time          `json:"LastModifiedTime"`
	MetadataProperties *MetadataProperties `json:"MetadataProperties"`
	Source             *TrialSource        `json:"Source"`
	TrialArn           *string             `json:"TrialArn"`
	TrialName          *string             `json:"TrialName"`
}
