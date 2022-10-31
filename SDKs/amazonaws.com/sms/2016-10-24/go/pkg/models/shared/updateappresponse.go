package shared



type UpdateAppResponse struct {
    AppSummary *AppSummary `json:"appSummary,omitempty"`
    ServerGroups []ServerGroup `json:"serverGroups,omitempty"`
    Tags []Tag `json:"tags,omitempty"`
    
}

