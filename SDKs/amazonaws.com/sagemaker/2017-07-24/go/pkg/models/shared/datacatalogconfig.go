package shared

// DataCatalogConfig
// The meta data of the Glue table which serves as data catalog for the <code>OfflineStore</code>.
type DataCatalogConfig struct {
	Catalog   string `json:"Catalog"`
	Database  string `json:"Database"`
	TableName string `json:"TableName"`
}
