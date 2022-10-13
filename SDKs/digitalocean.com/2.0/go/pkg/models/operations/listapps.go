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
	Steps []map[string]interface{} `json:"steps"`
}

type ListApps200ApplicationJSONAppsDomains struct {
	ID       *string                                                                                                                                                          `json:"id"`
	Phase    *ListApps200ApplicationJSONAppsDomainsPhaseEnum                                                                                                                  `json:"phase"`
	Progress *ListApps200ApplicationJSONAppsDomainsProgress                                                                                                                   `json:"progress"`
	Spec     *shared.Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecPropertiesDomainsItems `json:"spec"`
}

type ListApps200ApplicationJSONAppsRegionGeographicalInformationAboutAnAppOrigin struct {
	Continent   *string  `json:"continent"`
	DataCenters []string `json:"data_centers"`
	Default     *bool    `json:"default"`
	Disabled    *bool    `json:"disabled"`
	Flag        *string  `json:"flag"`
	Label       *string  `json:"label"`
	Reason      *string  `json:"reason"`
	Slug        *string  `json:"slug"`
}

type ListApps200ApplicationJSONApps struct {
	ActiveDeployment        *shared.Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItems              `json:"active_deployment"`
	CreatedAt               *time.Time                                                                                                                                `json:"created_at"`
	DefaultIngress          *string                                                                                                                                   `json:"default_ingress"`
	Domains                 []ListApps200ApplicationJSONAppsDomains                                                                                                   `json:"domains"`
	ID                      *string                                                                                                                                   `json:"id"`
	InProgressDeployment    *shared.Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItems              `json:"in_progress_deployment"`
	LastDeploymentCreatedAt *time.Time                                                                                                                                `json:"last_deployment_created_at"`
	LiveDomain              *string                                                                                                                                   `json:"live_domain"`
	LiveURL                 *string                                                                                                                                   `json:"live_url"`
	LiveURLBase             *string                                                                                                                                   `json:"live_url_base"`
	OwnerUUID               *string                                                                                                                                   `json:"owner_uuid"`
	Region                  *ListApps200ApplicationJSONAppsRegionGeographicalInformationAboutAnAppOrigin                                                              `json:"region"`
	Spec                    shared.Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpec `json:"spec"`
	TierSlug                *string                                                                                                                                   `json:"tier_slug"`
	UpdatedAt               *time.Time                                                                                                                                `json:"updated_at"`
}

type ListApps200ApplicationJSON struct {
	Apps  []ListApps200ApplicationJSONApps                                                            `json:"apps"`
	Links *shared.Onev21account1keysGetResponses200ContentApplication1jsonSchemaAllOf1PropertiesLinks `json:"links"`
	Meta  *shared.Onev21account1keysGetResponses200ContentApplication1jsonSchemaAllOf2PropertiesMeta  `json:"meta"`
}

type ListApps401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id"`
}

type ListAppsResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	ListApps200ApplicationJSONObject                          *ListApps200ApplicationJSON
	ListApps401ApplicationJSONObject                          *ListApps401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
