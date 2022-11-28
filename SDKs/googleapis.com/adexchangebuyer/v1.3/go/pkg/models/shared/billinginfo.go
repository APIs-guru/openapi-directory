package shared

// BillingInfo
// The configuration data for an Ad Exchange billing info.
type BillingInfo struct {
	AccountID   *int32   `json:"accountId,omitempty"`
	AccountName *string  `json:"accountName,omitempty"`
	BillingID   []string `json:"billingId,omitempty"`
	Kind        *string  `json:"kind,omitempty"`
}
