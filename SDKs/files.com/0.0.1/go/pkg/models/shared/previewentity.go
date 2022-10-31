package shared

type PreviewEntity struct {
	DownloadURI *string `json:"download_uri,omitempty"`
	ID          *int32  `json:"id,omitempty"`
	Size        *int32  `json:"size,omitempty"`
	Status      *string `json:"status,omitempty"`
	Type        *string `json:"type,omitempty"`
}
