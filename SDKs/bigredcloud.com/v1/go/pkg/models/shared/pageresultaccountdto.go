package shared

type PageResultAccountDto struct {
	Count        *int64       `json:"Count,omitempty"`
	Items        []AccountDto `json:"Items,omitempty"`
	NextPageLink *string      `json:"NextPageLink,omitempty"`
}
