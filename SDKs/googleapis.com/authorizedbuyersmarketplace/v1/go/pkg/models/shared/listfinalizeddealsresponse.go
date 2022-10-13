package shared

type ListFinalizedDealsResponse struct {
	FinalizedDeals []FinalizedDeal `json:"finalizedDeals"`
	NextPageToken  *string         `json:"nextPageToken"`
}
