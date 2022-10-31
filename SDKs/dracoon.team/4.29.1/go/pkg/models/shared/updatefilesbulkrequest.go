package shared



type UpdateFilesBulkRequest struct {
    Classification *int32 `json:"classification,omitempty"`
    Expiration *ObjectExpiration `json:"expiration,omitempty"`
    ObjectIds []int64 `json:"objectIds"`
    
}

