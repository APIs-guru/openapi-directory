package shared

type PageResultCustomerQueryDto struct {
	Count        *int64             `json:"Count,omitempty"`
	Items        []CustomerQueryDto `json:"Items,omitempty"`
	NextPageLink *string            `json:"NextPageLink,omitempty"`
}
