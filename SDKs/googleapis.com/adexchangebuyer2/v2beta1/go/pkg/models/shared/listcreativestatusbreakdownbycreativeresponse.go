package shared

type ListCreativeStatusBreakdownByCreativeResponse struct {
	FilteredBidCreativeRows []FilteredBidCreativeRow `json:"filteredBidCreativeRows"`
	NextPageToken           *string                  `json:"nextPageToken"`
}
