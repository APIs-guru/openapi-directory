package shared

type LineItem struct {
	CatalogItemID *string `json:"CatalogItemId,omitempty"`
	LineItemID    *string `json:"LineItemId,omitempty"`
	Quantity      *int64  `json:"Quantity,omitempty"`
	Status        *string `json:"Status,omitempty"`
}
