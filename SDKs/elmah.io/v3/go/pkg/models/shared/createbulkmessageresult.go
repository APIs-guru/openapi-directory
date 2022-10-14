package shared

type CreateBulkMessageResult struct {
	Location   *string `json:"location,omitempty"`
	StatusCode *int32  `json:"statusCode,omitempty"`
}
