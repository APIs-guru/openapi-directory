package shared

// GlueDataCatalogConfigurationUpdate
// Updates to the configuration of the Glue Data Catalog that you use for SQL queries that you write in a Kinesis Data Analytics Studio notebook.
type GlueDataCatalogConfigurationUpdate struct {
	DatabaseArnUpdate *string `json:"DatabaseARNUpdate,omitempty"`
}
