package shared



type LineItemRequest struct {
    CatalogItemID *string `json:"CatalogItemId,omitempty"`
    Quantity *int64 `json:"Quantity,omitempty"`
    
}

