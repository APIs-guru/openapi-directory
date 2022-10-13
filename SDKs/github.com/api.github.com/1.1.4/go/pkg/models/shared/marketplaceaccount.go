package shared

type MarketplaceAccount struct {
	Email                    *string `json:"email"`
	ID                       int64   `json:"id"`
	Login                    string  `json:"login"`
	NodeID                   *string `json:"node_id"`
	OrganizationBillingEmail *string `json:"organization_billing_email"`
	Type                     string  `json:"type"`
	URL                      string  `json:"url"`
}
