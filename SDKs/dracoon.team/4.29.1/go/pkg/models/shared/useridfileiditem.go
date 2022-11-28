package shared

// UserIDFileIDItem
// User ID and file ID mapping
type UserIDFileIDItem struct {
	FileID *int64 `json:"fileId,omitempty"`
	UserID *int64 `json:"userId,omitempty"`
}
