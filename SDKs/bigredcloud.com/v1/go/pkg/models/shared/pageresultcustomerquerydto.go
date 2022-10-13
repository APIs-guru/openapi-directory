package shared

type PageResultCustomerQueryDto struct {
	Count        *int64             `json:"Count"`
	Items        []CustomerQueryDto `json:"Items"`
	NextPageLink *string            `json:"NextPageLink"`
}
