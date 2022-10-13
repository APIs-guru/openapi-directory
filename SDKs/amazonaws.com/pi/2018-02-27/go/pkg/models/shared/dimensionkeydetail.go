package shared

type DimensionKeyDetail struct {
	Dimension *string           `json:"Dimension"`
	Status    *DetailStatusEnum `json:"Status"`
	Value     *string           `json:"Value"`
}
