package shared



type TableWithColumnsResource struct {
    CatalogID *string `json:"CatalogId,omitempty"`
    ColumnNames []string `json:"ColumnNames,omitempty"`
    ColumnWildcard *ColumnWildcard `json:"ColumnWildcard,omitempty"`
    DatabaseName string `json:"DatabaseName"`
    Name string `json:"Name"`
    
}

