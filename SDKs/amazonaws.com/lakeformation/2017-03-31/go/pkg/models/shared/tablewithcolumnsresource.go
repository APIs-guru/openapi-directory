package shared

// TableWithColumnsResource
// <p>A structure for a table with columns object. This object is only used when granting a SELECT permission.</p> <p>This object must take a value for at least one of <code>ColumnsNames</code>, <code>ColumnsIndexes</code>, or <code>ColumnsWildcard</code>.</p>
type TableWithColumnsResource struct {
	CatalogID      *string         `json:"CatalogId,omitempty"`
	ColumnNames    []string        `json:"ColumnNames,omitempty"`
	ColumnWildcard *ColumnWildcard `json:"ColumnWildcard,omitempty"`
	DatabaseName   string          `json:"DatabaseName"`
	Name           string          `json:"Name"`
}
