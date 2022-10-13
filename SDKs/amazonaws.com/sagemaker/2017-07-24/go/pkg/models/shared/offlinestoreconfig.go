package shared

type OfflineStoreConfig struct {
	DataCatalogConfig        *DataCatalogConfig `json:"DataCatalogConfig"`
	DisableGlueTableCreation *bool              `json:"DisableGlueTableCreation"`
	S3StorageConfig          S3StorageConfig    `json:"S3StorageConfig"`
}
