package shared

type PreReceiveEnvironmentDownload struct {
	DownloadedAt *string `json:"downloaded_at"`
	Message      *string `json:"message"`
	State        *string `json:"state"`
	URL          *string `json:"url"`
}

type PreReceiveEnvironment struct {
	CreatedAt          *string                        `json:"created_at"`
	DefaultEnvironment *bool                          `json:"default_environment"`
	Download           *PreReceiveEnvironmentDownload `json:"download"`
	HooksCount         *int64                         `json:"hooks_count"`
	HTMLURL            *string                        `json:"html_url"`
	ID                 *int64                         `json:"id"`
	ImageURL           *string                        `json:"image_url"`
	Name               *string                        `json:"name"`
	URL                *string                        `json:"url"`
}
