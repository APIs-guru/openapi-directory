package shared

type FirmwareInfo struct {
	DownloadURL *string `json:"download_url,omitempty"`
	Name        *string `json:"name,omitempty"`
	ReleaseDate *string `json:"release_date,omitempty"`
	Sha2        *string `json:"sha2,omitempty"`
	Version     *string `json:"version,omitempty"`
}
