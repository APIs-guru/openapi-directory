package shared

type UserIDFileIDItem struct {
	FileID *int64 `json:"fileId,omitempty"`
	UserID *int64 `json:"userId,omitempty"`
}
