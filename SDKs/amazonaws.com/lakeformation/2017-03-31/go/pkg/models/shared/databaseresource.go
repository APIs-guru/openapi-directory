package shared

type DatabaseResource struct {
	CatalogID *string `json:"CatalogId,omitempty"`
	Name      string  `json:"Name"`
}
