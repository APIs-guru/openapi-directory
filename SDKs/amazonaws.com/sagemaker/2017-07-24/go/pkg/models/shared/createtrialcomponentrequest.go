package shared

import (
	"time"
)

type CreateTrialComponentRequest struct {
	DisplayName        *string                                 `json:"DisplayName,omitempty"`
	EndTime            *time.Time                              `json:"EndTime,omitempty"`
	InputArtifacts     map[string]TrialComponentArtifact       `json:"InputArtifacts,omitempty"`
	MetadataProperties *MetadataProperties                     `json:"MetadataProperties,omitempty"`
	OutputArtifacts    map[string]TrialComponentArtifact       `json:"OutputArtifacts,omitempty"`
	Parameters         map[string]TrialComponentParameterValue `json:"Parameters,omitempty"`
	StartTime          *time.Time                              `json:"StartTime,omitempty"`
	Status             *TrialComponentStatus                   `json:"Status,omitempty"`
	Tags               []Tag                                   `json:"Tags,omitempty"`
	TrialComponentName string                                  `json:"TrialComponentName"`
}
