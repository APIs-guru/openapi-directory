package shared



type ListAppsResponse struct {
    Apps []AppDetails `json:"Apps,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

