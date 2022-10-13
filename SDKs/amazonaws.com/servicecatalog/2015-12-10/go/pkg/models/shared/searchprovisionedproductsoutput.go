package shared

type SearchProvisionedProductsOutput struct {
	NextPageToken       *string                       `json:"NextPageToken"`
	ProvisionedProducts []ProvisionedProductAttribute `json:"ProvisionedProducts"`
	TotalResultsCount   *int64                        `json:"TotalResultsCount"`
}
