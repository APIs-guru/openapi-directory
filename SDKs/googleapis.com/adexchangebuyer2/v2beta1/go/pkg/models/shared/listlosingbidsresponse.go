package shared

type ListLosingBidsResponse struct {
	CreativeStatusRows []CreativeStatusRow `json:"creativeStatusRows"`
	NextPageToken      *string             `json:"nextPageToken"`
}
