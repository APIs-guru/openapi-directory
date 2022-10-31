package shared



type NavContent struct {
    ImageType *string `json:"imageType,omitempty"`
    List *ItemList `json:"list,omitempty"`
    Title *string `json:"title,omitempty"`
    
}

