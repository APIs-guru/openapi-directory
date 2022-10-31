package shared

type DownloadDetails struct {
	DownloadNotes *string `json:"download_notes,omitempty"`
	ProjectCode   *string `json:"project_code,omitempty"`
}
