package shared

// FulfillmentPolicyRequest
// This root container defines a seller's fulfillment policy for a specific marketplace and category type. Used when creating or updating a fulfillment policy, fulfillmentPolicyRequest encapsulates a seller's terms for fulfilling an order and includes the shipping carriers and services used for shipment and time the seller takes to ship an order. While each seller must define at least one fulfillment policy for every marketplace into which they sell, sellers can define multiple fulfillment policies for a single marketplace by specifying different configurations for the unique policies. A successful call returns a fulfillmentPolicyId, plus the Location response header contains the URI to the resource. Policy instructions can be localized by providing a locale in the Content-Language HTTP request header. For example: Content-Language: de-DE. Tip: For more on using business policies, see eBay business policies.
type FulfillmentPolicyRequest struct {
	CategoryTypes   []CategoryType   `json:"categoryTypes,omitempty"`
	Description     *string          `json:"description,omitempty"`
	FreightShipping *bool            `json:"freightShipping,omitempty"`
	GlobalShipping  *bool            `json:"globalShipping,omitempty"`
	HandlingTime    *TimeDuration    `json:"handlingTime,omitempty"`
	LocalPickup     *bool            `json:"localPickup,omitempty"`
	MarketplaceID   *string          `json:"marketplaceId,omitempty"`
	Name            *string          `json:"name,omitempty"`
	PickupDropOff   *bool            `json:"pickupDropOff,omitempty"`
	ShipToLocations *RegionSet       `json:"shipToLocations,omitempty"`
	ShippingOptions []ShippingOption `json:"shippingOptions,omitempty"`
}
