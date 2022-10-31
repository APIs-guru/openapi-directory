package shared

type PreReceiveEnvironmentDownload struct {
	DownloadedAt *string `json:"downloaded_at,omitempty"`
	Message      *string `json:"message,omitempty"`
	State        *string `json:"state,omitempty"`
	URL          *string `json:"url,omitempty"`
}

type PreReceiveEnvironment struct {
	CreatedAt          *string                        `json:"created_at,omitempty"`
	DefaultEnvironment *bool                          `json:"default_environment,omitempty"`
	Download           *PreReceiveEnvironmentDownload `json:"download,omitempty"`
	HooksCount         *int64                         `json:"hooks_count,omitempty"`
	HTMLURL            *string                        `json:"html_url,omitempty"`
	ID                 *int64                         `json:"id,omitempty"`
	ImageURL           *string                        `json:"image_url,omitempty"`
	Name               *string                        `json:"name,omitempty"`
	URL                *string                        `json:"url,omitempty"`
}
