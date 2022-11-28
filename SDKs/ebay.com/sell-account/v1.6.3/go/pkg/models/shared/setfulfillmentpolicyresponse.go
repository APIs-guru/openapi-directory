package shared

// SetFulfillmentPolicyResponse
// Complex type that that gets populated with a response containing a fulfillment policy.
type SetFulfillmentPolicyResponse struct {
	CategoryTypes       []CategoryType   `json:"categoryTypes,omitempty"`
	Description         *string          `json:"description,omitempty"`
	FreightShipping     *bool            `json:"freightShipping,omitempty"`
	FulfillmentPolicyID *string          `json:"fulfillmentPolicyId,omitempty"`
	GlobalShipping      *bool            `json:"globalShipping,omitempty"`
	HandlingTime        *TimeDuration    `json:"handlingTime,omitempty"`
	LocalPickup         *bool            `json:"localPickup,omitempty"`
	MarketplaceID       *string          `json:"marketplaceId,omitempty"`
	Name                *string          `json:"name,omitempty"`
	PickupDropOff       *bool            `json:"pickupDropOff,omitempty"`
	ShipToLocations     *RegionSet       `json:"shipToLocations,omitempty"`
	ShippingOptions     []ShippingOption `json:"shippingOptions,omitempty"`
	Warnings            []Error          `json:"warnings,omitempty"`
}
