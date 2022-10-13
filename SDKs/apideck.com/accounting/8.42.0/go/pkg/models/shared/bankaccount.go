package shared

type BankAccountAccountTypeAccountTypeEnum string

const (
	BankAccountAccountTypeAccountTypeEnumBankAccount BankAccountAccountTypeAccountTypeEnum = "bank_account"
	BankAccountAccountTypeAccountTypeEnumCreditCard  BankAccountAccountTypeAccountTypeEnum = "credit_card"
	BankAccountAccountTypeAccountTypeEnumOther       BankAccountAccountTypeAccountTypeEnum = "other"
)

type BankAccount struct {
	AccountName      *string                                `json:"account_name"`
	AccountNumber    *string                                `json:"account_number"`
	AccountType      *BankAccountAccountTypeAccountTypeEnum `json:"account_type"`
	BankCode         *string                                `json:"bank_code"`
	Bic              *string                                `json:"bic"`
	BranchIdentifier *string                                `json:"branch_identifier"`
	BsbNumber        *string                                `json:"bsb_number"`
	Currency         *CurrencyEnum                          `json:"currency"`
	Iban             *string                                `json:"iban"`
}
