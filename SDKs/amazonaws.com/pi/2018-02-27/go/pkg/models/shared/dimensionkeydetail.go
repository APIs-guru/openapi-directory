package shared

type DimensionKeyDetail struct {
	Dimension *string           `json:"Dimension,omitempty"`
	Status    *DetailStatusEnum `json:"Status,omitempty"`
	Value     *string           `json:"Value,omitempty"`
}
