package shared

type ListingsListResponse struct {
	Kind     *string   `json:"kind"`
	Listings []Listing `json:"listings"`
}
