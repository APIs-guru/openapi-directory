package shared

type Rate struct {
	AdditionalOptions        []AdditionalOption `json:"additionalOptions"`
	BaseShippingCost         *Amount            `json:"baseShippingCost"`
	DestinationTimeZone      *string            `json:"destinationTimeZone"`
	MaxEstimatedDeliveryDate *string            `json:"maxEstimatedDeliveryDate"`
	MinEstimatedDeliveryDate *string            `json:"minEstimatedDeliveryDate"`
	PickupNetworks           []string           `json:"pickupNetworks"`
	PickupSlots              []PickupSlot       `json:"pickupSlots"`
	PickupType               *string            `json:"pickupType"`
	RateID                   *string            `json:"rateId"`
	RateRecommendation       []string           `json:"rateRecommendation"`
	ShippingCarrierCode      *string            `json:"shippingCarrierCode"`
	ShippingCarrierName      *string            `json:"shippingCarrierName"`
	ShippingServiceCode      *string            `json:"shippingServiceCode"`
	ShippingServiceName      *string            `json:"shippingServiceName"`
}
