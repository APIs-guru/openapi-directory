package shared

import (
	"time"
)

// TrialComponent
// The properties of a trial component as returned by the <a>Search</a> API.
type TrialComponent struct {
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
	Parents            []Parent                                `json:"Parents,omitempty"`
	Source             *TrialComponentSource                   `json:"Source,omitempty"`
	SourceDetail       *TrialComponentSourceDetail             `json:"SourceDetail,omitempty"`
	StartTime          *time.Time                              `json:"StartTime,omitempty"`
	Status             *TrialComponentStatus                   `json:"Status,omitempty"`
	Tags               []Tag                                   `json:"Tags,omitempty"`
	TrialComponentArn  *string                                 `json:"TrialComponentArn,omitempty"`
	TrialComponentName *string                                 `json:"TrialComponentName,omitempty"`
}
