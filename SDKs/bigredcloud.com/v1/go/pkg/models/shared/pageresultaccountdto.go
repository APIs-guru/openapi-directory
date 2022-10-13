package shared

type PageResultAccountDto struct {
	Count        *int64       `json:"Count"`
	Items        []AccountDto `json:"Items"`
	NextPageLink *string      `json:"NextPageLink"`
}
