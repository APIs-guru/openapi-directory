package shared

type PosBankAccountAchDetails struct {
	AccountNumberSuffix *string `json:"account_number_suffix"`
	AccountType         *string `json:"account_type"`
	RoutingNumber       *string `json:"routing_number"`
}

type PosBankAccount struct {
	AccountOwnershipType *string                   `json:"account_ownership_type"`
	AchDetails           *PosBankAccountAchDetails `json:"ach_details"`
	BankName             *string                   `json:"bank_name"`
	Country              *string                   `json:"country"`
	Fingerprint          *string                   `json:"fingerprint"`
	StatementDescription *string                   `json:"statement_description"`
	TransferType         *string                   `json:"transfer_type"`
}
