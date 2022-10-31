package shared



type ListWebAppsResponse struct {
    NextPageToken *string `json:"nextPageToken,omitempty"`
    WebApps []WebApp `json:"webApps,omitempty"`
    
}

