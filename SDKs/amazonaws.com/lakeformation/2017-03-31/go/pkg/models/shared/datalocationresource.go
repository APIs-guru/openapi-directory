package shared

// DataLocationResource
// A structure for a data location object where permissions are granted or revoked.
type DataLocationResource struct {
	CatalogID   *string `json:"CatalogId,omitempty"`
	ResourceArn string  `json:"ResourceArn"`
}
