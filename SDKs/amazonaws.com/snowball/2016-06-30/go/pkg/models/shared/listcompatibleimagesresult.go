package shared



type ListCompatibleImagesResult struct {
    CompatibleImages []CompatibleImage `json:"CompatibleImages,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

