package shared

type UpdateFilesBulkRequest struct {
	Classification *int32            `json:"classification"`
	Expiration     *ObjectExpiration `json:"expiration"`
	ObjectIds      []int64           `json:"objectIds"`
}
