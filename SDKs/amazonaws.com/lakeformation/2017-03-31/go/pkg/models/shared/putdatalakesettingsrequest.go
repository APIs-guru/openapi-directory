package shared

type PutDataLakeSettingsRequest struct {
	CatalogID        *string          `json:"CatalogId"`
	DataLakeSettings DataLakeSettings `json:"DataLakeSettings"`
}
