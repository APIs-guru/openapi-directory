package shared

type PageResultSaleRepsDto struct {
	Count        *int64        `json:"Count"`
	Items        []SaleRepsDto `json:"Items"`
	NextPageLink *string       `json:"NextPageLink"`
}
