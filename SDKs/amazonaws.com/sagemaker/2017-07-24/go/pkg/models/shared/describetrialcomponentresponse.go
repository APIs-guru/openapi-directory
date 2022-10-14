package shared

import (
	"time"
)

type DescribeTrialComponentResponse struct {
	CreatedBy          *UserContext                            `json:"CreatedBy,omitempty"`
	CreationTime       *time.Time                              `json:"CreationTime,omitempty"`
	DisplayName        *string                                 `json:"DisplayName,omitempty"`
	EndTime            *time.Time                              `json:"EndTime,omitempty"`
	InputArtifacts     map[string]TrialComponentArtifact       `json:"InputArtifacts,omitempty"`
	LastModifiedBy     *UserContext                            `json:"LastModifiedBy,omitempty"`
	LastModifiedTime   *time.Time                              `json:"LastModifiedTime,omitempty"`
	MetadataProperties *MetadataProperties                     `json:"MetadataProperties,omitempty"`
	Metrics            []TrialComponentMetricSummary           `json:"Metrics,omitempty"`
	OutputArtifacts    map[string]TrialComponentArtifact       `json:"OutputArtifacts,omitempty"`
	Parameters         map[string]TrialComponentParameterValue `json:"Parameters,omitempty"`
	Source             *TrialComponentSource                   `json:"Source,omitempty"`
	StartTime          *time.Time                              `json:"StartTime,omitempty"`
	Status             *TrialComponentStatus                   `json:"Status,omitempty"`
	TrialComponentArn  *string                                 `json:"TrialComponentArn,omitempty"`
	TrialComponentName *string                                 `json:"TrialComponentName,omitempty"`
}
