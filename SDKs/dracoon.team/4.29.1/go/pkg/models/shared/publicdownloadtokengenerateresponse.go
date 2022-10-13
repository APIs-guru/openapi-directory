package shared

type PublicDownloadTokenGenerateResponse struct {
	DownloadURL *string `json:"downloadUrl"`
	Token       string  `json:"token"`
}
