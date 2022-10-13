package shared

type ListListingsResponse struct {
	Listings      []Listing `json:"listings"`
	NextPageToken *string   `json:"nextPageToken"`
}
