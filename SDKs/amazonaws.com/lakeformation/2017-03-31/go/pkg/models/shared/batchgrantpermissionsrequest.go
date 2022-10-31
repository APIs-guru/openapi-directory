package shared



type BatchGrantPermissionsRequest struct {
    CatalogID *string `json:"CatalogId,omitempty"`
    Entries []BatchPermissionsRequestEntry `json:"Entries"`
    
}

