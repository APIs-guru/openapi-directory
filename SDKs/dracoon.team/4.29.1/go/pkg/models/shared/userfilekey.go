package shared

// UserFileKey
// User file key
type UserFileKey struct {
	FileKey FileKey `json:"fileKey"`
	UserID  int64   `json:"userId"`
}
