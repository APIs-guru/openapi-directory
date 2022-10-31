package shared

type GoogleCloudApigeeV1CreditDeveloperBalanceRequest struct {
	TransactionAmount *GoogleTypeMoney `json:"transactionAmount,omitempty"`
	TransactionID     *string          `json:"transactionId,omitempty"`
}
