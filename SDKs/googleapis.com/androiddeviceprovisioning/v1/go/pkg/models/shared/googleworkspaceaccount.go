package shared

// GoogleWorkspaceAccountInput
// A Google Workspace customer.
type GoogleWorkspaceAccountInput struct {
	CustomerID *string `json:"customerId,omitempty"`
}

// GoogleWorkspaceAccount
// A Google Workspace customer.
type GoogleWorkspaceAccount struct {
	CustomerID            *string  `json:"customerId,omitempty"`
	PreProvisioningTokens []string `json:"preProvisioningTokens,omitempty"`
}
