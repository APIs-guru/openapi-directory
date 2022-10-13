package shared

type LineItem struct {
	CatalogItemID *string `json:"CatalogItemId"`
	LineItemID    *string `json:"LineItemId"`
	Quantity      *int64  `json:"Quantity"`
	Status        *string `json:"Status"`
}
