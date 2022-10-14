package shared

type FulfillmentPolicy struct {
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
}
