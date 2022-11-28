package shared

// Rate
// This complex type contains live quote information about a shipping service that's available for a given shipping quote request, including the shipping carrier and service, delivery window, shipping cost, and additional shipping options.
type Rate struct {
	AdditionalOptions        []AdditionalOption `json:"additionalOptions,omitempty"`
	BaseShippingCost         *Amount            `json:"baseShippingCost,omitempty"`
	DestinationTimeZone      *string            `json:"destinationTimeZone,omitempty"`
	MaxEstimatedDeliveryDate *string            `json:"maxEstimatedDeliveryDate,omitempty"`
	MinEstimatedDeliveryDate *string            `json:"minEstimatedDeliveryDate,omitempty"`
	PickupNetworks           []string           `json:"pickupNetworks,omitempty"`
	PickupSlots              []PickupSlot       `json:"pickupSlots,omitempty"`
	PickupType               *string            `json:"pickupType,omitempty"`
	RateID                   *string            `json:"rateId,omitempty"`
	RateRecommendation       []string           `json:"rateRecommendation,omitempty"`
	ShippingCarrierCode      *string            `json:"shippingCarrierCode,omitempty"`
	ShippingCarrierName      *string            `json:"shippingCarrierName,omitempty"`
	ShippingServiceCode      *string            `json:"shippingServiceCode,omitempty"`
	ShippingServiceName      *string            `json:"shippingServiceName,omitempty"`
}
