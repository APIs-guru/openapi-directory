package shared

// ListingsListResponse
// Response listing all localized listings.
type ListingsListResponse struct {
	Kind     *string   `json:"kind,omitempty"`
	Listings []Listing `json:"listings,omitempty"`
}
