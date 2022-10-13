package shared

type LineItemRequest struct {
	CatalogItemID *string `json:"CatalogItemId"`
	Quantity      *int64  `json:"Quantity"`
}
