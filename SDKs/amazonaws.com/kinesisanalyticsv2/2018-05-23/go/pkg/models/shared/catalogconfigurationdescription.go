package shared

// CatalogConfigurationDescription
// The configuration parameters for the default AWS Glue database. You use this database for Apache Flink SQL queries and table API transforms that you write in a Kinesis Data Analytics Studio notebook.
type CatalogConfigurationDescription struct {
	GlueDataCatalogConfigurationDescription GlueDataCatalogConfigurationDescription `json:"GlueDataCatalogConfigurationDescription"`
}
