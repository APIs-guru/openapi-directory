package shared

type PageResultProductDto struct {
	Count        *int64       `json:"Count,omitempty"`
	Items        []ProductDto `json:"Items,omitempty"`
	NextPageLink *string      `json:"NextPageLink,omitempty"`
}
