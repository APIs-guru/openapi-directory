package shared

type ListBidResponseErrorsResponse struct {
	CalloutStatusRows []CalloutStatusRow `json:"calloutStatusRows,omitempty"`
	NextPageToken     *string            `json:"nextPageToken,omitempty"`
}
