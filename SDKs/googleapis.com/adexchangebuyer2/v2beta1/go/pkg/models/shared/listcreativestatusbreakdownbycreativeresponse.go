package shared

type ListCreativeStatusBreakdownByCreativeResponse struct {
	FilteredBidCreativeRows []FilteredBidCreativeRow `json:"filteredBidCreativeRows,omitempty"`
	NextPageToken           *string                  `json:"nextPageToken,omitempty"`
}
