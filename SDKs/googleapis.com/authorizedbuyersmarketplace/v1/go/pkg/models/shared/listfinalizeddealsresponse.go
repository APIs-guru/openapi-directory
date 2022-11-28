package shared

// ListFinalizedDealsResponse
// Response message for listing finalized deals.
type ListFinalizedDealsResponse struct {
	FinalizedDeals []FinalizedDeal `json:"finalizedDeals,omitempty"`
	NextPageToken  *string         `json:"nextPageToken,omitempty"`
}
