package shared

type GetProductsResponse struct {
	FormatVersion *string  `json:"FormatVersion"`
	NextToken     *string  `json:"NextToken"`
	PriceList     []string `json:"PriceList"`
}
