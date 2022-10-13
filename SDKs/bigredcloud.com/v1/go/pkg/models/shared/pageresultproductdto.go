package shared

type PageResultProductDto struct {
	Count        *int64       `json:"Count"`
	Items        []ProductDto `json:"Items"`
	NextPageLink *string      `json:"NextPageLink"`
}
