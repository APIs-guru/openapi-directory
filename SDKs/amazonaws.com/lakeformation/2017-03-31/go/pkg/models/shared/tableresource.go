package shared

type TableResource struct {
	CatalogID     *string                `json:"CatalogId"`
	DatabaseName  string                 `json:"DatabaseName"`
	Name          *string                `json:"Name"`
	TableWildcard map[string]interface{} `json:"TableWildcard"`
}
