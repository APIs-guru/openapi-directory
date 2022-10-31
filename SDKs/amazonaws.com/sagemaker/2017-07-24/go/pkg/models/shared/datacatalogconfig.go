package shared

type DataCatalogConfig struct {
	Catalog   string `json:"Catalog"`
	Database  string `json:"Database"`
	TableName string `json:"TableName"`
}
