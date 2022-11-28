package shared

import (
	"time"
)

// Algorithm
// Describes a custom algorithm.
type Algorithm struct {
	AlgorithmArn                *string                      `json:"algorithmArn,omitempty"`
	AlgorithmImage              *AlgorithmImage              `json:"algorithmImage,omitempty"`
	CreationDateTime            *time.Time                   `json:"creationDateTime,omitempty"`
	DefaultHyperParameterRanges *DefaultHyperParameterRanges `json:"defaultHyperParameterRanges,omitempty"`
	DefaultHyperParameters      map[string]string            `json:"defaultHyperParameters,omitempty"`
	DefaultResourceConfig       map[string]string            `json:"defaultResourceConfig,omitempty"`
	LastUpdatedDateTime         *time.Time                   `json:"lastUpdatedDateTime,omitempty"`
	Name                        *string                      `json:"name,omitempty"`
	RoleArn                     *string                      `json:"roleArn,omitempty"`
	TrainingInputMode           *string                      `json:"trainingInputMode,omitempty"`
}
