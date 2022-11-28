package shared

// UserFileKeySetBatchRequest
// List of request models for setting a user file key(s)
type UserFileKeySetBatchRequest struct {
	Items []UserFileKeySetRequest `json:"items"`
}
