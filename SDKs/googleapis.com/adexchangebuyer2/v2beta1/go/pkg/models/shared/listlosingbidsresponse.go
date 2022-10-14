package shared

type ListLosingBidsResponse struct {
	CreativeStatusRows []CreativeStatusRow `json:"creativeStatusRows,omitempty"`
	NextPageToken      *string             `json:"nextPageToken,omitempty"`
}
