package shared



type OfflineStoreConfig struct {
    DataCatalogConfig *DataCatalogConfig `json:"DataCatalogConfig,omitempty"`
    DisableGlueTableCreation *bool `json:"DisableGlueTableCreation,omitempty"`
    S3StorageConfig S3StorageConfig `json:"S3StorageConfig"`
    
}

