package shared



type Product struct {
    Aspects []Aspect `json:"aspects,omitempty"`
    Brand *string `json:"brand,omitempty"`
    Description *string `json:"description,omitempty"`
    Epid *string `json:"epid,omitempty"`
    ImageUrls []string `json:"imageUrls,omitempty"`
    Title *string `json:"title,omitempty"`
    
}

