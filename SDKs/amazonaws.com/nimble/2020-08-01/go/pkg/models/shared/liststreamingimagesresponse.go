package shared



type ListStreamingImagesResponse struct {
    NextToken *string `json:"nextToken,omitempty"`
    StreamingImages []StreamingImage `json:"streamingImages,omitempty"`
    
}

