package shared

// FulfillmentPolicy
// This root response container defines a seller's fulfillment policy for a specific marketplace and category type. fulfillmentPolicy encapsulates a seller's terms for fulfilling an order and includes the shipping carriers and services used for shipment and time the seller takes to ship an order. While each seller must define at least one fulfillment policy for every marketplace into which they sell, sellers can define multiple fulfillment policies for a single marketplace by specifying different configurations for the unique policies.
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
