package shared

type SupplierQueryDto struct {
	AccountName                    *string     `json:"accountName"`
	AccountNumber                  *string     `json:"accountNumber"`
	Address                        []string    `json:"address"`
	AuthCode                       *string     `json:"authCode"`
	Bank                           *EftBankDto `json:"bank"`
	BusinessIdentifierCode         *string     `json:"businessIdentifierCode"`
	Code                           *string     `json:"code"`
	Contact                        *string     `json:"contact"`
	EFtReference                   *string     `json:"eFTReference"`
	Email                          *string     `json:"email"`
	Fax                            *string     `json:"fax"`
	ID                             *int64      `json:"id"`
	InternationalBankAccountNumber *string     `json:"internationalBankAccountNumber"`
	Mobile                         *string     `json:"mobile"`
	Name                           *string     `json:"name"`
	OurCode                        *string     `json:"ourCode"`
	OwnerTypeID                    *int64      `json:"ownerTypeId"`
	Phone                          *string     `json:"phone"`
	PostponedAccounting            *bool       `json:"postponedAccounting"`
	Timestamp                      *string     `json:"timestamp"`
	VatAnalysisTypeID              *int64      `json:"vatAnalysisTypeId"`
	VatReg                         *string     `json:"vatReg"`
	VatType                        *int64      `json:"vatType"`
}
