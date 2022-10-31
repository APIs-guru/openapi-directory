package shared



type ListAPISpecsResponse struct {
    APISpecs []APISpec `json:"apiSpecs,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

