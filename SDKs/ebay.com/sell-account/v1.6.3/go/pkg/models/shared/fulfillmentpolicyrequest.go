package shared

type FulfillmentPolicyRequest struct {
	CategoryTypes   []CategoryType   `json:"categoryTypes"`
	Description     *string          `json:"description"`
	FreightShipping *bool            `json:"freightShipping"`
	GlobalShipping  *bool            `json:"globalShipping"`
	HandlingTime    *TimeDuration    `json:"handlingTime"`
	LocalPickup     *bool            `json:"localPickup"`
	MarketplaceID   *string          `json:"marketplaceId"`
	Name            *string          `json:"name"`
	PickupDropOff   *bool            `json:"pickupDropOff"`
	ShipToLocations *RegionSet       `json:"shipToLocations"`
	ShippingOptions []ShippingOption `json:"shippingOptions"`
}
