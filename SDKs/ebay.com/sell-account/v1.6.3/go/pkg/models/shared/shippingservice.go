package shared

type ShippingService struct {
	AdditionalShippingCost      *Amount    `json:"additionalShippingCost"`
	BuyerResponsibleForPickup   *bool      `json:"buyerResponsibleForPickup"`
	BuyerResponsibleForShipping *bool      `json:"buyerResponsibleForShipping"`
	CashOnDeliveryFee           *Amount    `json:"cashOnDeliveryFee"`
	FreeShipping                *bool      `json:"freeShipping"`
	ShipToLocations             *RegionSet `json:"shipToLocations"`
	ShippingCarrierCode         *string    `json:"shippingCarrierCode"`
	ShippingCost                *Amount    `json:"shippingCost"`
	ShippingServiceCode         *string    `json:"shippingServiceCode"`
	SortOrder                   *int32     `json:"sortOrder"`
	Surcharge                   *Amount    `json:"surcharge"`
}
