package shared

type ListingMedia struct {
	ID         *string  `json:"id"`
	PhotoLinks []string `json:"photo_links"`
	PhotoURL   *string  `json:"photo_url"`
}
