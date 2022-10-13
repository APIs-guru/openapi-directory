package shared

type BatchGrantPermissionsRequest struct {
	CatalogID *string                        `json:"CatalogId"`
	Entries   []BatchPermissionsRequestEntry `json:"Entries"`
}
