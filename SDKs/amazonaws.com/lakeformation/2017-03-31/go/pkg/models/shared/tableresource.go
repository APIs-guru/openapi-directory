package shared

type TableResource struct {
	CatalogID     *string                `json:"CatalogId,omitempty"`
	DatabaseName  string                 `json:"DatabaseName"`
	Name          *string                `json:"Name,omitempty"`
	TableWildcard map[string]interface{} `json:"TableWildcard,omitempty"`
}
