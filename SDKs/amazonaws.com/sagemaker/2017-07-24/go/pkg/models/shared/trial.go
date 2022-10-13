package shared

import (
	"time"
)

type Trial struct {
	CreatedBy               *UserContext                  `json:"CreatedBy"`
	CreationTime            *time.Time                    `json:"CreationTime"`
	DisplayName             *string                       `json:"DisplayName"`
	ExperimentName          *string                       `json:"ExperimentName"`
	LastModifiedBy          *UserContext                  `json:"LastModifiedBy"`
	LastModifiedTime        *time.Time                    `json:"LastModifiedTime"`
	MetadataProperties      *MetadataProperties           `json:"MetadataProperties"`
	Source                  *TrialSource                  `json:"Source"`
	Tags                    []Tag                         `json:"Tags"`
	TrialArn                *string                       `json:"TrialArn"`
	TrialComponentSummaries []TrialComponentSimpleSummary `json:"TrialComponentSummaries"`
	TrialName               *string                       `json:"TrialName"`
}
