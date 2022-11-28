package shared

// GlueDataCatalogConfigurationDescription
// The configuration of the Glue Data Catalog that you use for Apache Flink SQL queries and table API transforms that you write in an application.
type GlueDataCatalogConfigurationDescription struct {
	DatabaseArn string `json:"DatabaseARN"`
}
