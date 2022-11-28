package shared

// ListCreativeStatusBreakdownByCreativeResponse
// Response message for listing all creatives associated with a given filtered bid reason.
type ListCreativeStatusBreakdownByCreativeResponse struct {
	FilteredBidCreativeRows []FilteredBidCreativeRow `json:"filteredBidCreativeRows,omitempty"`
	NextPageToken           *string                  `json:"nextPageToken,omitempty"`
}
