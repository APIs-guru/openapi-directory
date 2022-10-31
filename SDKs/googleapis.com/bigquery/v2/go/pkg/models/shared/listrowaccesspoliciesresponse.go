package shared



type ListRowAccessPoliciesResponse struct {
    NextPageToken *string `json:"nextPageToken,omitempty"`
    RowAccessPolicies []RowAccessPolicy `json:"rowAccessPolicies,omitempty"`
    
}

