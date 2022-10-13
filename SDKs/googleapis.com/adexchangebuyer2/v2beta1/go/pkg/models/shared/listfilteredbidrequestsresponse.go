package shared

type ListFilteredBidRequestsResponse struct {
	CalloutStatusRows []CalloutStatusRow `json:"calloutStatusRows"`
	NextPageToken     *string            `json:"nextPageToken"`
}
