package shared

import (
	"time"
)

type Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItemsDomainsPhaseEnum string

const (
	Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItemsDomainsPhaseEnumUnknown     Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItemsDomainsPhaseEnum = "UNKNOWN"
	Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItemsDomainsPhaseEnumPending     Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItemsDomainsPhaseEnum = "PENDING"
	Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItemsDomainsPhaseEnumConfiguring Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItemsDomainsPhaseEnum = "CONFIGURING"
	Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItemsDomainsPhaseEnumActive      Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItemsDomainsPhaseEnum = "ACTIVE"
	Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItemsDomainsPhaseEnumError       Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItemsDomainsPhaseEnum = "ERROR"
)

type Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItemsDomainsProgress struct {
	Steps []map[string]interface{} `json:"steps,omitempty"`
}

type Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItemsDomains struct {
	ID       *string                                                                                                                                                   `json:"id,omitempty"`
	Phase    *Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItemsDomainsPhaseEnum                                                                `json:"phase,omitempty"`
	Progress *Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItemsDomainsProgress                                                                 `json:"progress,omitempty"`
	Spec     *Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecPropertiesDomainsItems `json:"spec,omitempty"`
}

type Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItemsGeographicalInformationAboutAnAppOrigin struct {
	Continent   *string  `json:"continent,omitempty"`
	DataCenters []string `json:"data_centers,omitempty"`
	Default     *bool    `json:"default,omitempty"`
	Disabled    *bool    `json:"disabled,omitempty"`
	Flag        *string  `json:"flag,omitempty"`
	Label       *string  `json:"label,omitempty"`
	Reason      *string  `json:"reason,omitempty"`
	Slug        *string  `json:"slug,omitempty"`
}

type Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItems struct {
	ActiveDeployment        *Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItems              `json:"active_deployment,omitempty"`
	CreatedAt               *time.Time                                                                                                                         `json:"created_at,omitempty"`
	DefaultIngress          *string                                                                                                                            `json:"default_ingress,omitempty"`
	Domains                 []Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItemsDomains                                                 `json:"domains,omitempty"`
	ID                      *string                                                                                                                            `json:"id,omitempty"`
	InProgressDeployment    *Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItems              `json:"in_progress_deployment,omitempty"`
	LastDeploymentCreatedAt *time.Time                                                                                                                         `json:"last_deployment_created_at,omitempty"`
	LiveDomain              *string                                                                                                                            `json:"live_domain,omitempty"`
	LiveURL                 *string                                                                                                                            `json:"live_url,omitempty"`
	LiveURLBase             *string                                                                                                                            `json:"live_url_base,omitempty"`
	OwnerUUID               *string                                                                                                                            `json:"owner_uuid,omitempty"`
	Region                  *Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItemsGeographicalInformationAboutAnAppOrigin                  `json:"region,omitempty"`
	Spec                    Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpec `json:"spec"`
	TierSlug                *string                                                                                                                            `json:"tier_slug,omitempty"`
	UpdatedAt               *time.Time                                                                                                                         `json:"updated_at,omitempty"`
}
