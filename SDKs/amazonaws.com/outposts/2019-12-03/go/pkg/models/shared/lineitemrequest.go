package shared

// LineItemRequest
// Information about a line item request.
type LineItemRequest struct {
	CatalogItemID *string `json:"CatalogItemId,omitempty"`
	Quantity      *int64  `json:"Quantity,omitempty"`
}
