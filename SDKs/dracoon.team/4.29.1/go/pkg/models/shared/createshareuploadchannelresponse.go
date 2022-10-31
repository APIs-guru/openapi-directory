package shared

type CreateShareUploadChannelResponse struct {
	Token     *string `json:"token,omitempty"`
	UploadID  string  `json:"uploadId"`
	UploadURL string  `json:"uploadUrl"`
}
