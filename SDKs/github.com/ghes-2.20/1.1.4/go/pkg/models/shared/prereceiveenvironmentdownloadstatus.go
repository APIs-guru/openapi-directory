package shared

type PreReceiveEnvironmentDownloadStatus struct {
	DownloadedAt *string `json:"downloaded_at"`
	Message      *string `json:"message"`
	State        *string `json:"state"`
	URL          *string `json:"url"`
}
