package shared



type ListPoliciesResponse struct {
    NextPageToken *string `json:"nextPageToken,omitempty"`
    Policies []Policy `json:"policies,omitempty"`
    
}

