package shared

type AddOrderNotesRequest struct {
	Notes []MarketplaceNote `json:"notes"`
}
