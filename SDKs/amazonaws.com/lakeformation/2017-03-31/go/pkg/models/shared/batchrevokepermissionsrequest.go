package shared



type BatchRevokePermissionsRequest struct {
    CatalogID *string `json:"CatalogId,omitempty"`
    Entries []BatchPermissionsRequestEntry `json:"Entries"`
    
}

