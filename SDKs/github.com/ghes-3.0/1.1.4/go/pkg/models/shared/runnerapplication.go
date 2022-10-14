package shared

type RunnerApplication struct {
	Architecture      string  `json:"architecture"`
	DownloadURL       string  `json:"download_url"`
	Filename          string  `json:"filename"`
	Os                string  `json:"os"`
	Sha256Checksum    *string `json:"sha256_checksum,omitempty"`
	TempDownloadToken *string `json:"temp_download_token,omitempty"`
}
