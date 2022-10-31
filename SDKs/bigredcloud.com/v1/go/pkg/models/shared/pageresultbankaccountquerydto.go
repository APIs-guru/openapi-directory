package shared

type PageResultBankAccountQueryDto struct {
	Count        *int64                `json:"Count,omitempty"`
	Items        []BankAccountQueryDto `json:"Items,omitempty"`
	NextPageLink *string               `json:"NextPageLink,omitempty"`
}
