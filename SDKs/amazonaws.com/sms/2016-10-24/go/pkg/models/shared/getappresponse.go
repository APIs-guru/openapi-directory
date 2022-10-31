package shared

type GetAppResponse struct {
	AppSummary   *AppSummary   `json:"appSummary,omitempty"`
	ServerGroups []ServerGroup `json:"serverGroups,omitempty"`
	Tags         []Tag         `json:"tags,omitempty"`
}
