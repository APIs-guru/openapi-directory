package shared

type BatchRevokePermissionsRequest struct {
	CatalogID *string                        `json:"CatalogId"`
	Entries   []BatchPermissionsRequestEntry `json:"Entries"`
}
