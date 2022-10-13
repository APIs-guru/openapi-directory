package shared

type Collection struct {
	AssetFamily  *string  `json:"asset_family"`
	Code         *string  `json:"code"`
	ID           *int32   `json:"id"`
	LicenseModel *string  `json:"license_model"`
	Name         *string  `json:"name"`
	ProductTypes []string `json:"product_types"`
}
