package shared

type ListBidResponseErrorsResponse struct {
	CalloutStatusRows []CalloutStatusRow `json:"calloutStatusRows"`
	NextPageToken     *string            `json:"nextPageToken"`
}
