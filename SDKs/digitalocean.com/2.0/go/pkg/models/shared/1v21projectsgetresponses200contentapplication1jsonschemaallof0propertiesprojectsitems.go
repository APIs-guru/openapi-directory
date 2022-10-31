package shared

import (
	"time"
)

type Onev21projectsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesProjectsItemsEnvironmentEnum string

const (
	Onev21projectsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesProjectsItemsEnvironmentEnumDevelopment Onev21projectsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesProjectsItemsEnvironmentEnum = "Development"
	Onev21projectsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesProjectsItemsEnvironmentEnumStaging     Onev21projectsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesProjectsItemsEnvironmentEnum = "Staging"
	Onev21projectsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesProjectsItemsEnvironmentEnumProduction  Onev21projectsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesProjectsItemsEnvironmentEnum = "Production"
)

type Onev21projectsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesProjectsItems struct {
	CreatedAt   *time.Time                                                                                              `json:"created_at,omitempty"`
	Description *string                                                                                                 `json:"description,omitempty"`
	Environment *Onev21projectsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesProjectsItemsEnvironmentEnum `json:"environment,omitempty"`
	ID          *string                                                                                                 `json:"id,omitempty"`
	IsDefault   *bool                                                                                                   `json:"is_default,omitempty"`
	Name        *string                                                                                                 `json:"name,omitempty"`
	OwnerID     *int64                                                                                                  `json:"owner_id,omitempty"`
	OwnerUUID   *string                                                                                                 `json:"owner_uuid,omitempty"`
	Purpose     *string                                                                                                 `json:"purpose,omitempty"`
	UpdatedAt   *time.Time                                                                                              `json:"updated_at,omitempty"`
}
