package shared

type ListEnabledProductsForImportResponse struct {
	NextToken            *string  `json:"NextToken,omitempty"`
	ProductSubscriptions []string `json:"ProductSubscriptions,omitempty"`
}
