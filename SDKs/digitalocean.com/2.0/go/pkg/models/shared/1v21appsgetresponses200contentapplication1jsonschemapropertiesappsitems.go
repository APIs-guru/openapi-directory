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
	Steps []map[string]interface{} `json:"steps"`
}

type Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItemsDomains struct {
	ID       *string                                                                                                                                                   `json:"id"`
	Phase    *Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItemsDomainsPhaseEnum                                                                `json:"phase"`
	Progress *Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItemsDomainsProgress                                                                 `json:"progress"`
	Spec     *Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecPropertiesDomainsItems `json:"spec"`
}

type Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItemsRegionGeographicalInformationAboutAnAppOrigin struct {
	Continent   *string  `json:"continent"`
	DataCenters []string `json:"data_centers"`
	Default     *bool    `json:"default"`
	Disabled    *bool    `json:"disabled"`
	Flag        *string  `json:"flag"`
	Label       *string  `json:"label"`
	Reason      *string  `json:"reason"`
	Slug        *string  `json:"slug"`
}

type Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItems struct {
	ActiveDeployment        *Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItems              `json:"active_deployment"`
	CreatedAt               *time.Time                                                                                                                         `json:"created_at"`
	DefaultIngress          *string                                                                                                                            `json:"default_ingress"`
	Domains                 []Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItemsDomains                                                 `json:"domains"`
	ID                      *string                                                                                                                            `json:"id"`
	InProgressDeployment    *Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItems              `json:"in_progress_deployment"`
	LastDeploymentCreatedAt *time.Time                                                                                                                         `json:"last_deployment_created_at"`
	LiveDomain              *string                                                                                                                            `json:"live_domain"`
	LiveURL                 *string                                                                                                                            `json:"live_url"`
	LiveURLBase             *string                                                                                                                            `json:"live_url_base"`
	OwnerUUID               *string                                                                                                                            `json:"owner_uuid"`
	Region                  *Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItemsRegionGeographicalInformationAboutAnAppOrigin            `json:"region"`
	Spec                    Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpec `json:"spec"`
	TierSlug                *string                                                                                                                            `json:"tier_slug"`
	UpdatedAt               *time.Time                                                                                                                         `json:"updated_at"`
}
