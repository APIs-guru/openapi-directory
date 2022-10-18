package shared

type BankAccountAccountTypeAccountTypeEnum string

const (
	BankAccountAccountTypeAccountTypeEnumBankAccount BankAccountAccountTypeAccountTypeEnum = "bank_account"
	BankAccountAccountTypeAccountTypeEnumCreditCard  BankAccountAccountTypeAccountTypeEnum = "credit_card"
	BankAccountAccountTypeAccountTypeEnumOther       BankAccountAccountTypeAccountTypeEnum = "other"
)

type BankAccount struct {
	AccountName      *string                                `json:"account_name,omitempty"`
	AccountNumber    *string                                `json:"account_number,omitempty"`
	AccountType      *BankAccountAccountTypeAccountTypeEnum `json:"account_type,omitempty"`
	BankCode         *string                                `json:"bank_code,omitempty"`
	Bic              *string                                `json:"bic,omitempty"`
	BranchIdentifier *string                                `json:"branch_identifier,omitempty"`
	BsbNumber        *string                                `json:"bsb_number,omitempty"`
	Currency         *CurrencyEnum                          `json:"currency,omitempty"`
	Iban             *string                                `json:"iban,omitempty"`
}
