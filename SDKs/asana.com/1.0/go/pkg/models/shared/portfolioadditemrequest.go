package shared

type PortfolioAddItemRequest struct {
	InsertAfter  *string `json:"insert_after"`
	InsertBefore *string `json:"insert_before"`
	Item         string  `json:"item"`
}
