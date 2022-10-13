package shared

type PageResultVatCategoryDto struct {
	Count        *int64           `json:"Count"`
	Items        []VatCategoryDto `json:"Items"`
	NextPageLink *string          `json:"NextPageLink"`
}
