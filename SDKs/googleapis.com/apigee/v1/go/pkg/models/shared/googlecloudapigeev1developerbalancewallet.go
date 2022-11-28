package shared

// GoogleCloudApigeeV1DeveloperBalanceWallet
// Wallet used to manage an account balance for a particular currency.
type GoogleCloudApigeeV1DeveloperBalanceWallet struct {
	Balance        *GoogleTypeMoney `json:"balance,omitempty"`
	LastCreditTime *string          `json:"lastCreditTime,omitempty"`
}
