package shared



type ListResourcesForTagOptionOutput struct {
    PageToken *string `json:"PageToken,omitempty"`
    ResourceDetails []ResourceDetail `json:"ResourceDetails,omitempty"`
    
}

