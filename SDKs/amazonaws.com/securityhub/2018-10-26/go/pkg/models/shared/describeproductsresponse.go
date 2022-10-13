package shared

type DescribeProductsResponse struct {
	NextToken *string   `json:"NextToken"`
	Products  []Product `json:"Products"`
}
