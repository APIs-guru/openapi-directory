package shared



type PortfolioAddItemRequest struct {
    InsertAfter *string `json:"insert_after,omitempty"`
    InsertBefore *string `json:"insert_before,omitempty"`
    Item string `json:"item"`
    
}

