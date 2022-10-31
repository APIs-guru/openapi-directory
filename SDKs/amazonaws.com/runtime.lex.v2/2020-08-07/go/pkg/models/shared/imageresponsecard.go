package shared



type ImageResponseCard struct {
    Buttons []Button `json:"buttons,omitempty"`
    ImageURL *string `json:"imageUrl,omitempty"`
    Subtitle *string `json:"subtitle,omitempty"`
    Title string `json:"title"`
    
}

