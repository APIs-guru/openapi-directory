package shared

// OfflineStoreConfig
// <p>The configuration of an <code>OfflineStore</code>.</p> <p>Provide an <code>OfflineStoreConfig</code> in a request to <code>CreateFeatureGroup</code> to create an <code>OfflineStore</code>.</p> <p>To encrypt an <code>OfflineStore</code> using at rest data encryption, specify Amazon Web Services Key Management Service (KMS) key ID, or <code>KMSKeyId</code>, in <code>S3StorageConfig</code>.</p>
type OfflineStoreConfig struct {
	DataCatalogConfig        *DataCatalogConfig `json:"DataCatalogConfig,omitempty"`
	DisableGlueTableCreation *bool              `json:"DisableGlueTableCreation,omitempty"`
	S3StorageConfig          S3StorageConfig    `json:"S3StorageConfig"`
}
