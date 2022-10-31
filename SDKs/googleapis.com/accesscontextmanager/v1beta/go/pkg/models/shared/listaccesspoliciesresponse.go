package shared



type ListAccessPoliciesResponse struct {
    AccessPolicies []AccessPolicy `json:"accessPolicies,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

