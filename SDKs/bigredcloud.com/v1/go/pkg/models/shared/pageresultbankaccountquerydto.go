package shared

type PageResultBankAccountQueryDto struct {
	Count        *int64                `json:"Count"`
	Items        []BankAccountQueryDto `json:"Items"`
	NextPageLink *string               `json:"NextPageLink"`
}
