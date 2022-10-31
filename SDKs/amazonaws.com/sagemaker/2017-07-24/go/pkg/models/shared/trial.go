package shared

import (
	"time"
)

type Trial struct {
	CreatedBy               *UserContext                  `json:"CreatedBy,omitempty"`
	CreationTime            *time.Time                    `json:"CreationTime,omitempty"`
	DisplayName             *string                       `json:"DisplayName,omitempty"`
	ExperimentName          *string                       `json:"ExperimentName,omitempty"`
	LastModifiedBy          *UserContext                  `json:"LastModifiedBy,omitempty"`
	LastModifiedTime        *time.Time                    `json:"LastModifiedTime,omitempty"`
	MetadataProperties      *MetadataProperties           `json:"MetadataProperties,omitempty"`
	Source                  *TrialSource                  `json:"Source,omitempty"`
	Tags                    []Tag                         `json:"Tags,omitempty"`
	TrialArn                *string                       `json:"TrialArn,omitempty"`
	TrialComponentSummaries []TrialComponentSimpleSummary `json:"TrialComponentSummaries,omitempty"`
	TrialName               *string                       `json:"TrialName,omitempty"`
}
