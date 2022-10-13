package shared

import (
	"time"
)

type Onev21registryGetResponses200ContentApplication1jsonSchemaPropertiesRegistryPropertiesSubscriptionAllOf1Tier struct {
	AllowStorageOverage    *bool   `json:"allow_storage_overage"`
	IncludedBandwidthBytes *int64  `json:"included_bandwidth_bytes"`
	IncludedRepositories   *int64  `json:"included_repositories"`
	IncludedStorageBytes   *int64  `json:"included_storage_bytes"`
	MonthlyPriceInCents    *int64  `json:"monthly_price_in_cents"`
	Name                   *string `json:"name"`
	Slug                   *string `json:"slug"`
}

type Onev21registryGetResponses200ContentApplication1jsonSchemaPropertiesRegistryPropertiesSubscriptionAllOf1 struct {
	CreatedAt *time.Time                                                                                                    `json:"created_at"`
	Tier      *Onev21registryGetResponses200ContentApplication1jsonSchemaPropertiesRegistryPropertiesSubscriptionAllOf1Tier `json:"tier"`
	UpdatedAt *time.Time                                                                                                    `json:"updated_at"`
}
