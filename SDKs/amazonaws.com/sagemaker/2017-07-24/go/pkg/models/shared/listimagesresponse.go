package shared



type ListImagesResponse struct {
    Images []Image `json:"Images,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

