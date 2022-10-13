package shared

type BillingInfo struct {
	AccountID   *int32   `json:"accountId"`
	AccountName *string  `json:"accountName"`
	BillingID   []string `json:"billingId"`
	Kind        *string  `json:"kind"`
}
