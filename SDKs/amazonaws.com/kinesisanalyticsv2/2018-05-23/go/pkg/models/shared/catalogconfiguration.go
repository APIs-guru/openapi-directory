package shared

// CatalogConfiguration
// The configuration parameters for the default AWS Glue database. You use this database for SQL queries that you write in a Kinesis Data Analytics Studio notebook.
type CatalogConfiguration struct {
	GlueDataCatalogConfiguration GlueDataCatalogConfiguration `json:"GlueDataCatalogConfiguration"`
}
