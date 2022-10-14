package shared

type Collection struct {
	AssetFamily  *string  `json:"asset_family,omitempty"`
	Code         *string  `json:"code,omitempty"`
	ID           *int32   `json:"id,omitempty"`
	LicenseModel *string  `json:"license_model,omitempty"`
	Name         *string  `json:"name,omitempty"`
	ProductTypes []string `json:"product_types,omitempty"`
}
