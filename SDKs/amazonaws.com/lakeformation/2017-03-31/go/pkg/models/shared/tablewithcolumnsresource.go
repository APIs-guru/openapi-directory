package shared

type TableWithColumnsResource struct {
	CatalogID      *string         `json:"CatalogId"`
	ColumnNames    []string        `json:"ColumnNames"`
	ColumnWildcard *ColumnWildcard `json:"ColumnWildcard"`
	DatabaseName   string          `json:"DatabaseName"`
	Name           string          `json:"Name"`
}
