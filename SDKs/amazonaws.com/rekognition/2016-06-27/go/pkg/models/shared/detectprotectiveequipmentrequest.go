package shared

type DetectProtectiveEquipmentRequest struct {
	Image                   Image                                       `json:"Image"`
	SummarizationAttributes *ProtectiveEquipmentSummarizationAttributes `json:"SummarizationAttributes,omitempty"`
}
