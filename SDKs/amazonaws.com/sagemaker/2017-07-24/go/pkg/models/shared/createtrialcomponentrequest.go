package shared

import (
	"time"
)

type CreateTrialComponentRequest struct {
	DisplayName        *string                                 `json:"DisplayName"`
	EndTime            *time.Time                              `json:"EndTime"`
	InputArtifacts     map[string]TrialComponentArtifact       `json:"InputArtifacts"`
	MetadataProperties *MetadataProperties                     `json:"MetadataProperties"`
	OutputArtifacts    map[string]TrialComponentArtifact       `json:"OutputArtifacts"`
	Parameters         map[string]TrialComponentParameterValue `json:"Parameters"`
	StartTime          *time.Time                              `json:"StartTime"`
	Status             *TrialComponentStatus                   `json:"Status"`
	Tags               []Tag                                   `json:"Tags"`
	TrialComponentName string                                  `json:"TrialComponentName"`
}
