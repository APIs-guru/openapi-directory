package shared

type SearchProvisionedProductsOutput struct {
	NextPageToken       *string                       `json:"NextPageToken,omitempty"`
	ProvisionedProducts []ProvisionedProductAttribute `json:"ProvisionedProducts,omitempty"`
	TotalResultsCount   *int64                        `json:"TotalResultsCount,omitempty"`
}
