package shared



type ListOrganizationPortfolioAccessOutput struct {
    NextPageToken *string `json:"NextPageToken,omitempty"`
    OrganizationNodes []OrganizationNode `json:"OrganizationNodes,omitempty"`
    
}

