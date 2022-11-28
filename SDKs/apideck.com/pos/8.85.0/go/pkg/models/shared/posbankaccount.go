package shared

// PosBankAccountAchDetails
// ACH-specific details about `BANK_ACCOUNT` type payments with the `transfer_type` of `ACH`.
type PosBankAccountAchDetails struct {
	AccountNumberSuffix *string `json:"account_number_suffix,omitempty"`
	AccountType         *string `json:"account_type,omitempty"`
	RoutingNumber       *string `json:"routing_number,omitempty"`
}

// PosBankAccount
// Card details for this payment. This field is currently not available. Reach out to our team for more info.
type PosBankAccount struct {
	AccountOwnershipType *string                   `json:"account_ownership_type,omitempty"`
	AchDetails           *PosBankAccountAchDetails `json:"ach_details,omitempty"`
	BankName             *string                   `json:"bank_name,omitempty"`
	Country              *string                   `json:"country,omitempty"`
	Fingerprint          *string                   `json:"fingerprint,omitempty"`
	StatementDescription *string                   `json:"statement_description,omitempty"`
	TransferType         *string                   `json:"transfer_type,omitempty"`
}
