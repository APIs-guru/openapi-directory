package shared

// PublicDownloadTokenGenerateResponse
// Download URL
type PublicDownloadTokenGenerateResponse struct {
	DownloadURL *string `json:"downloadUrl,omitempty"`
	Token       string  `json:"token"`
}
