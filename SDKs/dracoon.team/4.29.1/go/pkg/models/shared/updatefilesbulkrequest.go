package shared

// UpdateFilesBulkRequest
// Request model for updating files
type UpdateFilesBulkRequest struct {
	Classification *int32            `json:"classification,omitempty"`
	Expiration     *ObjectExpiration `json:"expiration,omitempty"`
	ObjectIds      []int64           `json:"objectIds"`
}
