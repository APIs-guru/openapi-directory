package shared

type ListFilteredBidsResponse struct {
	CreativeStatusRows []CreativeStatusRow `json:"creativeStatusRows"`
	NextPageToken      *string             `json:"nextPageToken"`
}
