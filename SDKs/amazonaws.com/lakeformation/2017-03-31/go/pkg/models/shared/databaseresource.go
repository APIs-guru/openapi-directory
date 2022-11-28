package shared

// DatabaseResource
// A structure for the database object.
type DatabaseResource struct {
	CatalogID *string `json:"CatalogId,omitempty"`
	Name      string  `json:"Name"`
}
