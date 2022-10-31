package shared

type DeliveryControl struct {
	CreativeBlockingLevel *string                       `json:"creativeBlockingLevel,omitempty"`
	DeliveryRateType      *string                       `json:"deliveryRateType,omitempty"`
	FrequencyCaps         []DeliveryControlFrequencyCap `json:"frequencyCaps,omitempty"`
}
