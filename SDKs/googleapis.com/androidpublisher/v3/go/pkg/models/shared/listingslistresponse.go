package shared

type ListingsListResponse struct {
	Kind     *string   `json:"kind,omitempty"`
	Listings []Listing `json:"listings,omitempty"`
}
