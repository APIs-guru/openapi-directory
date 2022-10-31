package shared



type GetBundlesRequest struct {
    IncludeInactive *bool `json:"includeInactive,omitempty"`
    PageToken *string `json:"pageToken,omitempty"`
    
}

