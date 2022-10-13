package shared

type DeliveryControl struct {
	CreativeBlockingLevel *string                       `json:"creativeBlockingLevel"`
	DeliveryRateType      *string                       `json:"deliveryRateType"`
	FrequencyCaps         []DeliveryControlFrequencyCap `json:"frequencyCaps"`
}
