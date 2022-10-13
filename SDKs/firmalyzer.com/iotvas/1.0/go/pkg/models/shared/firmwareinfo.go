package shared

type FirmwareInfo struct {
	DownloadURL *string `json:"download_url"`
	Name        *string `json:"name"`
	ReleaseDate *string `json:"release_date"`
	Sha2        *string `json:"sha2"`
	Version     *string `json:"version"`
}
