package shared

type UserFileKeySetRequest struct {
	FileID  int64   `json:"fileId"`
	FileKey FileKey `json:"fileKey"`
	UserID  int64   `json:"userId"`
}
