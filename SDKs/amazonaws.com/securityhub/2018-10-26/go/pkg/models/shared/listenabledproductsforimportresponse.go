package shared

type ListEnabledProductsForImportResponse struct {
	NextToken            *string  `json:"NextToken"`
	ProductSubscriptions []string `json:"ProductSubscriptions"`
}
