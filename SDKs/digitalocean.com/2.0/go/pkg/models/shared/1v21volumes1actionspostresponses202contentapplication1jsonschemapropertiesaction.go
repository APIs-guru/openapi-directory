package shared

import (
	"time"
)

type Onev21volumes1actionsPostResponses202ContentApplication1jsonSchemaPropertiesActionRegion struct {
	Available bool        `json:"available"`
	Features  interface{} `json:"features"`
	Name      string      `json:"name"`
	Sizes     interface{} `json:"sizes"`
	Slug      string      `json:"slug"`
}

type Onev21volumes1actionsPostResponses202ContentApplication1jsonSchemaPropertiesActionStatusEnum string

const (
	Onev21volumes1actionsPostResponses202ContentApplication1jsonSchemaPropertiesActionStatusEnumInProgress Onev21volumes1actionsPostResponses202ContentApplication1jsonSchemaPropertiesActionStatusEnum = "in-progress"
	Onev21volumes1actionsPostResponses202ContentApplication1jsonSchemaPropertiesActionStatusEnumCompleted  Onev21volumes1actionsPostResponses202ContentApplication1jsonSchemaPropertiesActionStatusEnum = "completed"
	Onev21volumes1actionsPostResponses202ContentApplication1jsonSchemaPropertiesActionStatusEnumErrored    Onev21volumes1actionsPostResponses202ContentApplication1jsonSchemaPropertiesActionStatusEnum = "errored"
)

type Onev21volumes1actionsPostResponses202ContentApplication1jsonSchemaPropertiesAction struct {
	CompletedAt  *time.Time                                                                                    `json:"completed_at"`
	ID           *int64                                                                                        `json:"id"`
	Region       *Onev21volumes1actionsPostResponses202ContentApplication1jsonSchemaPropertiesActionRegion     `json:"region"`
	RegionSlug   map[string]interface{}                                                                        `json:"region_slug"`
	ResourceID   *int64                                                                                        `json:"resource_id"`
	ResourceType *string                                                                                       `json:"resource_type"`
	StartedAt    *time.Time                                                                                    `json:"started_at"`
	Status       *Onev21volumes1actionsPostResponses202ContentApplication1jsonSchemaPropertiesActionStatusEnum `json:"status"`
	Type         *string                                                                                       `json:"type"`
}
