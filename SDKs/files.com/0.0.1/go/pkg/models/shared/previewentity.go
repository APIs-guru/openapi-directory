package shared

type PreviewEntity struct {
	DownloadURI *string `json:"download_uri"`
	ID          *int32  `json:"id"`
	Size        *int32  `json:"size"`
	Status      *string `json:"status"`
	Type        *string `json:"type"`
}
