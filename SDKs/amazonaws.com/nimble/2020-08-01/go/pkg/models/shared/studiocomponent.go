package shared

import (
	"time"
)

type StudioComponent struct {
	Arn                   *string                               `json:"arn"`
	Configuration         *StudioComponentConfiguration         `json:"configuration"`
	CreatedAt             *time.Time                            `json:"createdAt"`
	CreatedBy             *string                               `json:"createdBy"`
	Description           *string                               `json:"description"`
	Ec2SecurityGroupIds   []string                              `json:"ec2SecurityGroupIds"`
	InitializationScripts []StudioComponentInitializationScript `json:"initializationScripts"`
	Name                  *string                               `json:"name"`
	ScriptParameters      []ScriptParameterKeyValue             `json:"scriptParameters"`
	State                 *StudioComponentStateEnum             `json:"state"`
	StatusCode            *StudioComponentStatusCodeEnum        `json:"statusCode"`
	StatusMessage         *string                               `json:"statusMessage"`
	StudioComponentID     *string                               `json:"studioComponentId"`
	Subtype               *StudioComponentSubtypeEnum           `json:"subtype"`
	Tags                  map[string]string                     `json:"tags"`
	Type                  *StudioComponentTypeEnum              `json:"type"`
	UpdatedAt             *time.Time                            `json:"updatedAt"`
	UpdatedBy             *string                               `json:"updatedBy"`
}
