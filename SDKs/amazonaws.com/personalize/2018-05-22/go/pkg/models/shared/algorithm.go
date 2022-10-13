package shared

import (
	"time"
)

type Algorithm struct {
	AlgorithmArn                *string                      `json:"algorithmArn"`
	AlgorithmImage              *AlgorithmImage              `json:"algorithmImage"`
	CreationDateTime            *time.Time                   `json:"creationDateTime"`
	DefaultHyperParameterRanges *DefaultHyperParameterRanges `json:"defaultHyperParameterRanges"`
	DefaultHyperParameters      map[string]string            `json:"defaultHyperParameters"`
	DefaultResourceConfig       map[string]string            `json:"defaultResourceConfig"`
	LastUpdatedDateTime         *time.Time                   `json:"lastUpdatedDateTime"`
	Name                        *string                      `json:"name"`
	RoleArn                     *string                      `json:"roleArn"`
	TrainingInputMode           *string                      `json:"trainingInputMode"`
}
