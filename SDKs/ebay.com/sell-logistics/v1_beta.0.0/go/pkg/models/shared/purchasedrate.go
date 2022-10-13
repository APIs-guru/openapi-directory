package shared

type PurchasedRate struct {
	AdditionalOptions        []AdditionalOption `json:"additionalOptions"`
	BaseShippingCost         *Amount            `json:"baseShippingCost"`
	DestinationTimeZone      *string            `json:"destinationTimeZone"`
	MaxEstimatedDeliveryDate *string            `json:"maxEstimatedDeliveryDate"`
	MinEstimatedDeliveryDate *string            `json:"minEstimatedDeliveryDate"`
	PickupNetworks           []string           `json:"pickupNetworks"`
	PickupSlotID             *string            `json:"pickupSlotId"`
	PickupType               *string            `json:"pickupType"`
	RateID                   *string            `json:"rateId"`
	ShippingCarrierCode      *string            `json:"shippingCarrierCode"`
	ShippingCarrierName      *string            `json:"shippingCarrierName"`
	ShippingQuoteID          *string            `json:"shippingQuoteId"`
	ShippingServiceCode      *string            `json:"shippingServiceCode"`
	ShippingServiceName      *string            `json:"shippingServiceName"`
	TotalShippingCost        *Amount            `json:"totalShippingCost"`
}
