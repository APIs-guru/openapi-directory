package shared

type DescribeProductsResponse struct {
	NextToken *string   `json:"NextToken,omitempty"`
	Products  []Product `json:"Products"`
}
