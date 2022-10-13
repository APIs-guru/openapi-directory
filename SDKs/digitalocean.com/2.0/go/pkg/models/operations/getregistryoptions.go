package operations

import (
	"openapi/pkg/models/shared"
)

type GetRegistryOptions200ApplicationJSONOptionsSubscriptionTiersEligibilityReasonsEnum string

const (
	GetRegistryOptions200ApplicationJSONOptionsSubscriptionTiersEligibilityReasonsEnumOverRepositoryLimit GetRegistryOptions200ApplicationJSONOptionsSubscriptionTiersEligibilityReasonsEnum = "OverRepositoryLimit"
	GetRegistryOptions200ApplicationJSONOptionsSubscriptionTiersEligibilityReasonsEnumOverStorageLimit    GetRegistryOptions200ApplicationJSONOptionsSubscriptionTiersEligibilityReasonsEnum = "OverStorageLimit"
)

type GetRegistryOptions200ApplicationJSONOptionsSubscriptionTiers struct {
	AllowStorageOverage    *bool                                                                                `json:"allow_storage_overage"`
	EligibilityReasons     []GetRegistryOptions200ApplicationJSONOptionsSubscriptionTiersEligibilityReasonsEnum `json:"eligibility_reasons"`
	Eligible               *bool                                                                                `json:"eligible"`
	IncludedBandwidthBytes *int64                                                                               `json:"included_bandwidth_bytes"`
	IncludedRepositories   *int64                                                                               `json:"included_repositories"`
	IncludedStorageBytes   *int64                                                                               `json:"included_storage_bytes"`
	MonthlyPriceInCents    *int64                                                                               `json:"monthly_price_in_cents"`
	Name                   *string                                                                              `json:"name"`
	Slug                   *string                                                                              `json:"slug"`
}

type GetRegistryOptions200ApplicationJSONOptions struct {
	SubscriptionTiers []GetRegistryOptions200ApplicationJSONOptionsSubscriptionTiers `json:"subscription_tiers"`
}

type GetRegistryOptions200ApplicationJSON struct {
	Options *GetRegistryOptions200ApplicationJSONOptions `json:"options"`
}

type GetRegistryOptions401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id"`
}

type GetRegistryOptionsResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	GetRegistryOptions200ApplicationJSONObject                *GetRegistryOptions200ApplicationJSON
	GetRegistryOptions401ApplicationJSONObject                *GetRegistryOptions401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
