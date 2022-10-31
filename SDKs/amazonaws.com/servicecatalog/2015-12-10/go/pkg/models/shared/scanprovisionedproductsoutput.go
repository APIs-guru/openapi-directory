package shared

type ScanProvisionedProductsOutput struct {
	NextPageToken       *string                    `json:"NextPageToken,omitempty"`
	ProvisionedProducts []ProvisionedProductDetail `json:"ProvisionedProducts,omitempty"`
}
