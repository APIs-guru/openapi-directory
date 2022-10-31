package shared



type GetProductsResponse struct {
    FormatVersion *string `json:"FormatVersion,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    PriceList []string `json:"PriceList,omitempty"`
    
}

