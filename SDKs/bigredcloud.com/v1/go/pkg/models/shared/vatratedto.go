package shared

type VatRateDto struct {
	ID            *int64   `json:"id"`
	IsActive      *bool    `json:"isActive"`
	IsDefault     *bool    `json:"isDefault"`
	OrderIndex    *int32   `json:"orderIndex"`
	Percentage    *float64 `json:"percentage"`
	Timestamp     *string  `json:"timestamp"`
	VatCategoryID *int64   `json:"vatCategoryId"`
}
