package shared

type GetAppResponse struct {
	AppSummary   *AppSummary   `json:"appSummary"`
	ServerGroups []ServerGroup `json:"serverGroups"`
	Tags         []Tag         `json:"tags"`
}
