package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type ListAppsQueryParams struct {
	Page    *int64 `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
}

type ListAppsRequest struct {
	QueryParams ListAppsQueryParams
}

type ListApps200ApplicationJSONAppsDomainsPhaseEnum string

const (
	ListApps200ApplicationJSONAppsDomainsPhaseEnumUnknown     ListApps200ApplicationJSONAppsDomainsPhaseEnum = "UNKNOWN"
	ListApps200ApplicationJSONAppsDomainsPhaseEnumPending     ListApps200ApplicationJSONAppsDomainsPhaseEnum = "PENDING"
	ListApps200ApplicationJSONAppsDomainsPhaseEnumConfiguring ListApps200ApplicationJSONAppsDomainsPhaseEnum = "CONFIGURING"
	ListApps200ApplicationJSONAppsDomainsPhaseEnumActive      ListApps200ApplicationJSONAppsDomainsPhaseEnum = "ACTIVE"
	ListApps200ApplicationJSONAppsDomainsPhaseEnumError       ListApps200ApplicationJSONAppsDomainsPhaseEnum = "ERROR"
)

type ListApps200ApplicationJSONAppsDomainsProgress struct {
	Steps []map[string]interface{} `json:"steps,omitempty"`
}

type ListApps200ApplicationJSONAppsDomains struct {
	ID       *string                                                                                                                                                          `json:"id,omitempty"`
	Phase    *ListApps200ApplicationJSONAppsDomainsPhaseEnum                                                                                                                  `json:"phase,omitempty"`
	Progress *ListApps200ApplicationJSONAppsDomainsProgress                                                                                                                   `json:"progress,omitempty"`
	Spec     *shared.Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecPropertiesDomainsItems `json:"spec,omitempty"`
}

type ListApps200ApplicationJSONAppsRegionGeographicalInformationAboutAnAppOrigin struct {
	Continent   *string  `json:"continent,omitempty"`
	DataCenters []string `json:"data_centers,omitempty"`
	Default     *bool    `json:"default,omitempty"`
	Disabled    *bool    `json:"disabled,omitempty"`
	Flag        *string  `json:"flag,omitempty"`
	Label       *string  `json:"label,omitempty"`
	Reason      *string  `json:"reason,omitempty"`
	Slug        *string  `json:"slug,omitempty"`
}

type ListApps200ApplicationJSONApps struct {
	ActiveDeployment        *shared.Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItems              `json:"active_deployment,omitempty"`
	CreatedAt               *time.Time                                                                                                                                `json:"created_at,omitempty"`
	DefaultIngress          *string                                                                                                                                   `json:"default_ingress,omitempty"`
	Domains                 []ListApps200ApplicationJSONAppsDomains                                                                                                   `json:"domains,omitempty"`
	ID                      *string                                                                                                                                   `json:"id,omitempty"`
	InProgressDeployment    *shared.Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItems              `json:"in_progress_deployment,omitempty"`
	LastDeploymentCreatedAt *time.Time                                                                                                                                `json:"last_deployment_created_at,omitempty"`
	LiveDomain              *string                                                                                                                                   `json:"live_domain,omitempty"`
	LiveURL                 *string                                                                                                                                   `json:"live_url,omitempty"`
	LiveURLBase             *string                                                                                                                                   `json:"live_url_base,omitempty"`
	OwnerUUID               *string                                                                                                                                   `json:"owner_uuid,omitempty"`
	Region                  *ListApps200ApplicationJSONAppsRegionGeographicalInformationAboutAnAppOrigin                                                              `json:"region,omitempty"`
	Spec                    shared.Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpec `json:"spec"`
	TierSlug                *string                                                                                                                                   `json:"tier_slug,omitempty"`
	UpdatedAt               *time.Time                                                                                                                                `json:"updated_at,omitempty"`
}

type ListApps200ApplicationJSON struct {
	Apps  []ListApps200ApplicationJSONApps                                                            `json:"apps,omitempty"`
	Links *shared.Onev21account1keysGetResponses200ContentApplication1jsonSchemaAllOf1PropertiesLinks `json:"links,omitempty"`
	Meta  *shared.Onev21account1keysGetResponses200ContentApplication1jsonSchemaAllOf2PropertiesMeta  `json:"meta,omitempty"`
}

type ListApps401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id,omitempty"`
}

type ListAppsResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	ListApps200ApplicationJSONObject                          *ListApps200ApplicationJSON
	ListApps401ApplicationJSONObject                          *ListApps401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
