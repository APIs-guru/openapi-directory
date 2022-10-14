package shared

import (
	"time"
)

type UpdateTrialComponentRequest struct {
	DisplayName             *string                                 `json:"DisplayName,omitempty"`
	EndTime                 *time.Time                              `json:"EndTime,omitempty"`
	InputArtifacts          map[string]TrialComponentArtifact       `json:"InputArtifacts,omitempty"`
	InputArtifactsToRemove  []string                                `json:"InputArtifactsToRemove,omitempty"`
	OutputArtifacts         map[string]TrialComponentArtifact       `json:"OutputArtifacts,omitempty"`
	OutputArtifactsToRemove []string                                `json:"OutputArtifactsToRemove,omitempty"`
	Parameters              map[string]TrialComponentParameterValue `json:"Parameters,omitempty"`
	ParametersToRemove      []string                                `json:"ParametersToRemove,omitempty"`
	StartTime               *time.Time                              `json:"StartTime,omitempty"`
	Status                  *TrialComponentStatus                   `json:"Status,omitempty"`
	TrialComponentName      string                                  `json:"TrialComponentName"`
}
