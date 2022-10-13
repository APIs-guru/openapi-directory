package shared

type CreateShareUploadChannelResponse struct {
	Token     *string `json:"token"`
	UploadID  string  `json:"uploadId"`
	UploadURL string  `json:"uploadUrl"`
}
