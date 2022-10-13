package shared

type ProductViewSummary struct {
	Distributor        *string          `json:"Distributor"`
	HasDefaultPath     *bool            `json:"HasDefaultPath"`
	ID                 *string          `json:"Id"`
	Name               *string          `json:"Name"`
	Owner              *string          `json:"Owner"`
	ProductID          *string          `json:"ProductId"`
	ShortDescription   *string          `json:"ShortDescription"`
	SupportDescription *string          `json:"SupportDescription"`
	SupportEmail       *string          `json:"SupportEmail"`
	SupportURL         *string          `json:"SupportUrl"`
	Type               *ProductTypeEnum `json:"Type"`
}
