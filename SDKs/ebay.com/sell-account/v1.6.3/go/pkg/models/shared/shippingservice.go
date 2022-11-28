package shared

// ShippingService
// A complex type that defines the available shipping services offered in the parent shippingOptions container. The shipping services specified here must be able to accommodate the optionType defined in the parent shippingOption container (either DOMESTIC or INTERNATIONAL). Tip: For more on setting up shipping services, see Setting the shipping carrier and shipping service values.
type ShippingService struct {
	AdditionalShippingCost      *Amount    `json:"additionalShippingCost,omitempty"`
	BuyerResponsibleForPickup   *bool      `json:"buyerResponsibleForPickup,omitempty"`
	BuyerResponsibleForShipping *bool      `json:"buyerResponsibleForShipping,omitempty"`
	CashOnDeliveryFee           *Amount    `json:"cashOnDeliveryFee,omitempty"`
	FreeShipping                *bool      `json:"freeShipping,omitempty"`
	ShipToLocations             *RegionSet `json:"shipToLocations,omitempty"`
	ShippingCarrierCode         *string    `json:"shippingCarrierCode,omitempty"`
	ShippingCost                *Amount    `json:"shippingCost,omitempty"`
	ShippingServiceCode         *string    `json:"shippingServiceCode,omitempty"`
	SortOrder                   *int32     `json:"sortOrder,omitempty"`
	Surcharge                   *Amount    `json:"surcharge,omitempty"`
}
