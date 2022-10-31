package shared



type MarketplaceAccount struct {
    Email *string `json:"email,omitempty"`
    ID int64 `json:"id"`
    Login string `json:"login"`
    NodeID *string `json:"node_id,omitempty"`
    OrganizationBillingEmail *string `json:"organization_billing_email,omitempty"`
    Type string `json:"type"`
    URL string `json:"url"`
    
}

