package shared

import (
"time")

type Onev21registryGetResponses200ContentApplication1jsonSchemaPropertiesRegistryPropertiesSubscriptionAllOf1Tier struct {
    AllowStorageOverage *bool `json:"allow_storage_overage,omitempty"`
    IncludedBandwidthBytes *int64 `json:"included_bandwidth_bytes,omitempty"`
    IncludedRepositories *int64 `json:"included_repositories,omitempty"`
    IncludedStorageBytes *int64 `json:"included_storage_bytes,omitempty"`
    MonthlyPriceInCents *int64 `json:"monthly_price_in_cents,omitempty"`
    Name *string `json:"name,omitempty"`
    Slug *string `json:"slug,omitempty"`
    
}

type Onev21registryGetResponses200ContentApplication1jsonSchemaPropertiesRegistryPropertiesSubscriptionAllOf1 struct {
    CreatedAt *time.Time `json:"created_at,omitempty"`
    Tier *Onev21registryGetResponses200ContentApplication1jsonSchemaPropertiesRegistryPropertiesSubscriptionAllOf1Tier `json:"tier,omitempty"`
    UpdatedAt *time.Time `json:"updated_at,omitempty"`
    
}

