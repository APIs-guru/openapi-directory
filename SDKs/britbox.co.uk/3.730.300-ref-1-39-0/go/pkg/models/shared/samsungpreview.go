package shared

type SamsungPreview struct {
	Expires     *int64                  `json:"expires"`
	ExpiresOnly *bool                   `json:"expires_only"`
	Sections    []SamsungPreviewSection `json:"sections"`
}
