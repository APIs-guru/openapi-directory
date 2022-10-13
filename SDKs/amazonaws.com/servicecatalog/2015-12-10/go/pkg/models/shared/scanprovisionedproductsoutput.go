package shared

type ScanProvisionedProductsOutput struct {
	NextPageToken       *string                    `json:"NextPageToken"`
	ProvisionedProducts []ProvisionedProductDetail `json:"ProvisionedProducts"`
}
