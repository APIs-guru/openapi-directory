package shared

// GoogleCloudApigeeV1CreditDeveloperBalanceRequest
// Request for CreditDeveloperBalance.
type GoogleCloudApigeeV1CreditDeveloperBalanceRequest struct {
	TransactionAmount *GoogleTypeMoney `json:"transactionAmount,omitempty"`
	TransactionID     *string          `json:"transactionId,omitempty"`
}
