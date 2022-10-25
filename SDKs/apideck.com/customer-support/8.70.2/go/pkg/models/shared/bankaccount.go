package shared

type BankAccountAccountTypeEnum string

const (
	BankAccountAccountTypeEnumBankAccount BankAccountAccountTypeEnum = "bank_account"
	BankAccountAccountTypeEnumCreditCard  BankAccountAccountTypeEnum = "credit_card"
	BankAccountAccountTypeEnumOther       BankAccountAccountTypeEnum = "other"
)

type BankAccount struct {
	AccountName      *string                     `json:"account_name,omitempty"`
	AccountNumber    *string                     `json:"account_number,omitempty"`
	AccountType      *BankAccountAccountTypeEnum `json:"account_type,omitempty"`
	BankCode         *string                     `json:"bank_code,omitempty"`
	Bic              *string                     `json:"bic,omitempty"`
	BranchIdentifier *string                     `json:"branch_identifier,omitempty"`
	BsbNumber        *string                     `json:"bsb_number,omitempty"`
	Currency         *CurrencyEnum               `json:"currency,omitempty"`
	Iban             *string                     `json:"iban,omitempty"`
}
