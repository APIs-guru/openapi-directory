package shared

// TableResource
// A structure for the table object. A table is a metadata definition that represents your data. You can Grant and Revoke table privileges to a principal.
type TableResource struct {
	CatalogID     *string                `json:"CatalogId,omitempty"`
	DatabaseName  string                 `json:"DatabaseName"`
	Name          *string                `json:"Name,omitempty"`
	TableWildcard map[string]interface{} `json:"TableWildcard,omitempty"`
}
