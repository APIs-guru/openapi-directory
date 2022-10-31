package shared



type Listing struct {
    FullDescription *string `json:"fullDescription,omitempty"`
    Language *string `json:"language,omitempty"`
    ShortDescription *string `json:"shortDescription,omitempty"`
    Title *string `json:"title,omitempty"`
    Video *string `json:"video,omitempty"`
    
}

