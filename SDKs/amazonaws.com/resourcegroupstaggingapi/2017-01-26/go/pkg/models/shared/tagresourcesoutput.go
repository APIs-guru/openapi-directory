package shared



type TagResourcesOutput struct {
    FailedResourcesMap map[string]FailureInfo `json:"FailedResourcesMap,omitempty"`
    
}

