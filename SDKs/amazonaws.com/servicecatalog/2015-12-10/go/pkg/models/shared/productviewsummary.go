package shared

type ProductViewSummary struct {
	Distributor        *string          `json:"Distributor,omitempty"`
	HasDefaultPath     *bool            `json:"HasDefaultPath,omitempty"`
	ID                 *string          `json:"Id,omitempty"`
	Name               *string          `json:"Name,omitempty"`
	Owner              *string          `json:"Owner,omitempty"`
	ProductID          *string          `json:"ProductId,omitempty"`
	ShortDescription   *string          `json:"ShortDescription,omitempty"`
	SupportDescription *string          `json:"SupportDescription,omitempty"`
	SupportEmail       *string          `json:"SupportEmail,omitempty"`
	SupportURL         *string          `json:"SupportUrl,omitempty"`
	Type               *ProductTypeEnum `json:"Type,omitempty"`
}
