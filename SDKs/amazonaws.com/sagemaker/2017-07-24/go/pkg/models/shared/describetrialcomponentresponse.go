package shared

import (
	"time"
)

type DescribeTrialComponentResponse struct {
	CreatedBy          *UserContext                            `json:"CreatedBy"`
	CreationTime       *time.Time                              `json:"CreationTime"`
	DisplayName        *string                                 `json:"DisplayName"`
	EndTime            *time.Time                              `json:"EndTime"`
	InputArtifacts     map[string]TrialComponentArtifact       `json:"InputArtifacts"`
	LastModifiedBy     *UserContext                            `json:"LastModifiedBy"`
	LastModifiedTime   *time.Time                              `json:"LastModifiedTime"`
	MetadataProperties *MetadataProperties                     `json:"MetadataProperties"`
	Metrics            []TrialComponentMetricSummary           `json:"Metrics"`
	OutputArtifacts    map[string]TrialComponentArtifact       `json:"OutputArtifacts"`
	Parameters         map[string]TrialComponentParameterValue `json:"Parameters"`
	Source             *TrialComponentSource                   `json:"Source"`
	StartTime          *time.Time                              `json:"StartTime"`
	Status             *TrialComponentStatus                   `json:"Status"`
	TrialComponentArn  *string                                 `json:"TrialComponentArn"`
	TrialComponentName *string                                 `json:"TrialComponentName"`
}
