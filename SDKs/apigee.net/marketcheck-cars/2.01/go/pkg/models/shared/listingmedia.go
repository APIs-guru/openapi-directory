package shared



type ListingMedia struct {
    ID *string `json:"id,omitempty"`
    PhotoLinks []string `json:"photo_links,omitempty"`
    PhotoURL *string `json:"photo_url,omitempty"`
    
}

