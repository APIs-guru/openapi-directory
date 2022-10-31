package shared



type PublicDownloadTokenGenerateResponse struct {
    DownloadURL *string `json:"downloadUrl,omitempty"`
    Token string `json:"token"`
    
}

