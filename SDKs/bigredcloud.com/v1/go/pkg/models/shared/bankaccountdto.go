package shared

type BankAccountDto struct {
	AcCode                         *string  `json:"acCode,omitempty"`
	AccountName                    *string  `json:"accountName,omitempty"`
	AccountNumber                  *string  `json:"accountNumber,omitempty"`
	Address                        []string `json:"address,omitempty"`
	BankFeedSource                 *int32   `json:"bankFeedSource,omitempty"`
	BusinessIdentifierCodes        *string  `json:"businessIdentifierCodes,omitempty"`
	CategoryID                     *int64   `json:"categoryId,omitempty"`
	CreditorScheme                 *string  `json:"creditorScheme,omitempty"`
	Details                        *string  `json:"details,omitempty"`
	ID                             *int64   `json:"id,omitempty"`
	InternationalBankAccountNumber *string  `json:"internationalBankAccountNumber,omitempty"`
	IsDefaultBank                  *bool    `json:"isDefaultBank,omitempty"`
	LastChq                        *string  `json:"lastChq,omitempty"`
	NominalAcCode                  *string  `json:"nominalAcCode,omitempty"`
	OBalance                       *float64 `json:"oBalance,omitempty"`
	SortCode                       *string  `json:"sortCode,omitempty"`
	Timestamp                      *string  `json:"timestamp,omitempty"`
}
