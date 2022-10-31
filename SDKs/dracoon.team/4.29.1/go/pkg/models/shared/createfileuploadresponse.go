package shared



type CreateFileUploadResponse struct {
    Token string `json:"token"`
    UploadID string `json:"uploadId"`
    UploadURL string `json:"uploadUrl"`
    
}

