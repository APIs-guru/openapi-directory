package shared

type PreReceiveHookEnvironmentDownload struct {
	DownloadedAt *string `json:"downloaded_at"`
	Message      *string `json:"message"`
	State        *string `json:"state"`
	URL          *string `json:"url"`
}

type PreReceiveHookEnvironment struct {
	CreatedAt          *string                            `json:"created_at"`
	DefaultEnvironment *bool                              `json:"default_environment"`
	Download           *PreReceiveHookEnvironmentDownload `json:"download"`
	HooksCount         *int64                             `json:"hooks_count"`
	HTMLURL            *string                            `json:"html_url"`
	ID                 *int64                             `json:"id"`
	ImageURL           *string                            `json:"image_url"`
	Name               *string                            `json:"name"`
	URL                *string                            `json:"url"`
}

type PreReceiveHookScriptRepository struct {
	FullName *string `json:"full_name"`
	HTMLURL  *string `json:"html_url"`
	ID       *int64  `json:"id"`
	URL      *string `json:"url"`
}

type PreReceiveHook struct {
	AllowDownstreamConfiguration *bool                           `json:"allow_downstream_configuration"`
	Enforcement                  *string                         `json:"enforcement"`
	Environment                  *PreReceiveHookEnvironment      `json:"environment"`
	ID                           *int64                          `json:"id"`
	Name                         *string                         `json:"name"`
	Script                       *string                         `json:"script"`
	ScriptRepository             *PreReceiveHookScriptRepository `json:"script_repository"`
}
