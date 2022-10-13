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
	CreatedAt   *time.Time                                                                                              `json:"created_at"`
	Description *string                                                                                                 `json:"description"`
	Environment *Onev21projectsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesProjectsItemsEnvironmentEnum `json:"environment"`
	ID          *string                                                                                                 `json:"id"`
	IsDefault   *bool                                                                                                   `json:"is_default"`
	Name        *string                                                                                                 `json:"name"`
	OwnerID     *int64                                                                                                  `json:"owner_id"`
	OwnerUUID   *string                                                                                                 `json:"owner_uuid"`
	Purpose     *string                                                                                                 `json:"purpose"`
	UpdatedAt   *time.Time                                                                                              `json:"updated_at"`
}
