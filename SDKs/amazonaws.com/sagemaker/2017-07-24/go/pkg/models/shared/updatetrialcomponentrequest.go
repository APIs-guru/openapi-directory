package shared

import (
	"time"
)

type UpdateTrialComponentRequest struct {
	DisplayName             *string                                 `json:"DisplayName"`
	EndTime                 *time.Time                              `json:"EndTime"`
	InputArtifacts          map[string]TrialComponentArtifact       `json:"InputArtifacts"`
	InputArtifactsToRemove  []string                                `json:"InputArtifactsToRemove"`
	OutputArtifacts         map[string]TrialComponentArtifact       `json:"OutputArtifacts"`
	OutputArtifactsToRemove []string                                `json:"OutputArtifactsToRemove"`
	Parameters              map[string]TrialComponentParameterValue `json:"Parameters"`
	ParametersToRemove      []string                                `json:"ParametersToRemove"`
	StartTime               *time.Time                              `json:"StartTime"`
	Status                  *TrialComponentStatus                   `json:"Status"`
	TrialComponentName      string                                  `json:"TrialComponentName"`
}
