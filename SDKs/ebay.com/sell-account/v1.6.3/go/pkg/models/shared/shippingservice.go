package shared

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
