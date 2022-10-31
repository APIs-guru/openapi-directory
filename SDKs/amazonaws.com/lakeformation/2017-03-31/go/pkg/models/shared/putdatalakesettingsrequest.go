package shared

type PutDataLakeSettingsRequest struct {
	CatalogID        *string          `json:"CatalogId,omitempty"`
	DataLakeSettings DataLakeSettings `json:"DataLakeSettings"`
}
