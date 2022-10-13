package shared

type BankAccountDto struct {
	AcCode                         *string  `json:"acCode"`
	AccountName                    *string  `json:"accountName"`
	AccountNumber                  *string  `json:"accountNumber"`
	Address                        []string `json:"address"`
	BankFeedSource                 *int32   `json:"bankFeedSource"`
	BusinessIdentifierCodes        *string  `json:"businessIdentifierCodes"`
	CategoryID                     *int64   `json:"categoryId"`
	CreditorScheme                 *string  `json:"creditorScheme"`
	Details                        *string  `json:"details"`
	ID                             *int64   `json:"id"`
	InternationalBankAccountNumber *string  `json:"internationalBankAccountNumber"`
	IsDefaultBank                  *bool    `json:"isDefaultBank"`
	LastChq                        *string  `json:"lastChq"`
	NominalAcCode                  *string  `json:"nominalAcCode"`
	OBalance                       *float64 `json:"oBalance"`
	SortCode                       *string  `json:"sortCode"`
	Timestamp                      *string  `json:"timestamp"`
}
