package shared



type PurchasedRate struct {
    AdditionalOptions []AdditionalOption `json:"additionalOptions,omitempty"`
    BaseShippingCost *Amount `json:"baseShippingCost,omitempty"`
    DestinationTimeZone *string `json:"destinationTimeZone,omitempty"`
    MaxEstimatedDeliveryDate *string `json:"maxEstimatedDeliveryDate,omitempty"`
    MinEstimatedDeliveryDate *string `json:"minEstimatedDeliveryDate,omitempty"`
    PickupNetworks []string `json:"pickupNetworks,omitempty"`
    PickupSlotID *string `json:"pickupSlotId,omitempty"`
    PickupType *string `json:"pickupType,omitempty"`
    RateID *string `json:"rateId,omitempty"`
    ShippingCarrierCode *string `json:"shippingCarrierCode,omitempty"`
    ShippingCarrierName *string `json:"shippingCarrierName,omitempty"`
    ShippingQuoteID *string `json:"shippingQuoteId,omitempty"`
    ShippingServiceCode *string `json:"shippingServiceCode,omitempty"`
    ShippingServiceName *string `json:"shippingServiceName,omitempty"`
    TotalShippingCost *Amount `json:"totalShippingCost,omitempty"`
    
}

