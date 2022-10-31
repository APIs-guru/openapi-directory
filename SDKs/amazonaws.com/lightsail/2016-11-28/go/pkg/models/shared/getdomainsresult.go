package shared



type GetDomainsResult struct {
    Domains []Domain `json:"domains,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

