package shared

import (
	"time"
)

type Onev21actionsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesActionsItemsRegion struct {
	Available bool        `json:"available"`
	Features  interface{} `json:"features"`
	Name      string      `json:"name"`
	Sizes     interface{} `json:"sizes"`
	Slug      string      `json:"slug"`
}

type Onev21actionsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesActionsItemsStatusEnum string

const (
	Onev21actionsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesActionsItemsStatusEnumInProgress Onev21actionsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesActionsItemsStatusEnum = "in-progress"
	Onev21actionsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesActionsItemsStatusEnumCompleted  Onev21actionsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesActionsItemsStatusEnum = "completed"
	Onev21actionsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesActionsItemsStatusEnumErrored    Onev21actionsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesActionsItemsStatusEnum = "errored"
)

type Onev21actionsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesActionsItems struct {
	CompletedAt  *time.Time                                                                                       `json:"completed_at,omitempty"`
	ID           *int64                                                                                           `json:"id,omitempty"`
	Region       *Onev21actionsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesActionsItemsRegion     `json:"region,omitempty"`
	RegionSlug   map[string]interface{}                                                                           `json:"region_slug,omitempty"`
	ResourceID   *int64                                                                                           `json:"resource_id,omitempty"`
	ResourceType *string                                                                                          `json:"resource_type,omitempty"`
	StartedAt    *time.Time                                                                                       `json:"started_at,omitempty"`
	Status       *Onev21actionsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesActionsItemsStatusEnum `json:"status,omitempty"`
	Type         *string                                                                                          `json:"type,omitempty"`
}
