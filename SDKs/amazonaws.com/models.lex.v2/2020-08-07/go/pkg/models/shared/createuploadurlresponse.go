package shared

type CreateUploadURLResponse struct {
	ImportID  *string `json:"importId"`
	UploadURL *string `json:"uploadUrl"`
}
