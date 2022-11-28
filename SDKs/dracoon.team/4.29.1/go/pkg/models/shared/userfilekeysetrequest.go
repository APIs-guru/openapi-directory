package shared

// UserFileKeySetRequest
// Request model for setting a user file key
type UserFileKeySetRequest struct {
	FileID  int64   `json:"fileId"`
	FileKey FileKey `json:"fileKey"`
	UserID  int64   `json:"userId"`
}
